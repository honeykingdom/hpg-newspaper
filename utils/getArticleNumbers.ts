import { promises as fs } from "fs";

const getArticleNumbers = async () => {
  const files = await fs.readdir("./text");

  const articleNumbers = files
    .filter((filename) => /^\d+\.md$/.test(filename))
    .map((filename) => filename.slice(0, -3));

  return articleNumbers;
};

export default getArticleNumbers;
