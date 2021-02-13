import { promises as fs } from "fs";
import assert from "assert";
import yaml from "js-yaml";
import { StatisticItem } from "../components/HpgLayout";

const METADATA_REGEX = /<!--(.+)-->/s;
const CONTENT_REGEX = /^.+-->(.+)$/s;

const getRawMetadata = (content: string) => {
  const m = METADATA_REGEX.exec(content);

  if (!m) return null;

  return m[1];
};

const parseYaml = (content: string) => {
  return yaml.load(content.replace(/\t/g, "  "));
};

const normalizeTitle = (title: string) =>
  title.trim() === "-" ? null : title.trim();

const getArticlesFromMd = async (filename) => {
  const content = await fs.readFile(filename, "utf8");

  const [rawMetadata, ...rawArticles] = content.split("\n## ");

  const lines = rawMetadata.split("\n");

  assert(/^# Выпуск \d+/.test(lines[0]));

  const number = lines[0].slice(9);
  const metadata = parseYaml(getRawMetadata(rawMetadata));

  assert(typeof metadata === "object");

  const { date, map, statistics } = metadata as {
    date: string;
    map: string;
    statistics: StatisticItem[];
  };

  const articles = rawArticles.map((rawArticle) => {
    const lines = rawArticle.split("\n");

    const title = normalizeTitle(lines[0]);
    const subtitleRaw = lines.find((line) => line.startsWith("### "));

    assert(subtitleRaw);

    const subtitle = normalizeTitle(subtitleRaw.slice(4));
    const metadata = parseYaml(getRawMetadata(rawArticle));

    assert(typeof metadata === "object");

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

  return { date, map, number, statistics, articles };
};

export default getArticlesFromMd;
