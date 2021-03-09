import assert from "assert";
import parseYaml from "./parseYaml";
import type { ArticleType, StatisticItem } from "../types";

const METADATA_REGEX = /```yaml(.+)```/s;
const CONTENT_REGEX = /```yaml.+```(.+)/s;

const getRawMetadata = (content: string) => {
  const m = METADATA_REGEX.exec(content);

  if (!m) return null;

  return m[1];
};

const parseMetadata = (rawMetadata: string) => {
  const parts = rawMetadata.split(/(```)/);

  assert(/^# Выпуск \d+/.test(parts[0]));

  const number = parts[0].slice(9).trim();

  assert(parts[2].startsWith("yaml"));
  assert(parts[6].startsWith("jsx"));

  const metadata = parseYaml(parts[2].slice(4).replace(/\t/g, "  ")) as {
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

const parseNewspaperData = (content: string) => {
  const [rawMetadata, ...rawArticles] = content.split("\n## ");

  const metadata = parseMetadata(rawMetadata);

  const articles = rawArticles.map((rawArticle) => {
    const lines = rawArticle.split("\n");

    const title = normalizeTitle(lines[0]);
    const subtitleRaw = lines.find((line) => line.startsWith("### "));

    assert(subtitleRaw);

    const subtitle = normalizeTitle(subtitleRaw.slice(4));
    const rawMetadata = getRawMetadata(rawArticle);

    assert(rawMetadata);

    const metadata = parseYaml(rawMetadata.replace(/\t/g, "  "));

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
    } as ArticleType;
  });

  return { ...metadata, articles };
};

export default parseNewspaperData;
