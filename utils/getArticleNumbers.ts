import { promises as fs } from "fs";

const getArticleNumbers = async () => {
  const files = await fs.readdir("./pages/articles");

  const articleNumbers = files
    .filter((filename) => /^hpg-\d+(\.tsx)?$/.test(filename))
    .map((filename) =>
      filename.length === 10 ? filename.slice(4, -4) : filename.slice(4)
    );

  return articleNumbers;
};

export default getArticleNumbers;
