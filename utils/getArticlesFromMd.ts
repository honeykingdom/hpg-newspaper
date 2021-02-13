import { promises as fs } from "fs";
import assert from "assert";
import yaml from "js-yaml";
import type { StatisticItem } from "../types";

const METADATA_REGEX = /```yaml(.+)```/s;
const CONTENT_REGEX = /```yaml.+```(.+)/s;

const getRawMetadata = (content: string) => {
  const m = METADATA_REGEX.exec(content);

  if (!m) return null;

  return m[1];
};

const parseYaml = (content: string) => {
  return yaml.load(content.replace(/\t/g, "  "));
};

const parseMetadata = (rawMetadata: string) => {
  const parts = rawMetadata.split(/(```)/);

  assert(/^# Выпуск \d+/.test(parts[0]));

  const number = parts[0].slice(9).trim();

  assert(parts[2].startsWith("yaml"));
  assert(parts[6].startsWith("jsx"));

  const metadata = parseYaml(parts[2].slice(4)) as {
    date: string;
    map: string;
    statistics: StatisticItem[];
  };
  const layout = parts[6].slice(3).trim();

  assert(typeof metadata === "object");
  assert(/^\d{2}\.\d{2}\.\d{4}$/.test(metadata.date));

  return { number, ...metadata, layout };
};

const normalizeTitle = (title: string) =>
  title.trim() === "-" ? null : title.trim();

const getArticlesFromMd = async (filename) => {
  const content = await fs.readFile(filename, "utf8");

  const [rawMetadata, ...rawArticles] = content.split("\n## ");

  const metadata = parseMetadata(rawMetadata);

  const articles = rawArticles.map((rawArticle) => {
    const lines = rawArticle.split("\n");

    const title = normalizeTitle(lines[0]);
    const subtitleRaw = lines.find((line) => line.startsWith("### "));

    assert(subtitleRaw, filename);

    const subtitle = normalizeTitle(subtitleRaw.slice(4));
    const metadata = parseYaml(getRawMetadata(rawArticle));

    assert(typeof metadata === "object", filename);

    let content: null | string = null;

    const m = CONTENT_REGEX.exec(rawArticle);

    if (m) {
      content = m[1]
        .trim()
        .replace(/<\.\.\.>/g, "&lt;...&gt;")
        .replace(/<3/g, "&lt;3");
    }

    return {
      title,
      subtitle,
      content,
      ...metadata,
    };
  });

  return { ...metadata, articles };
};

export default getArticlesFromMd;
