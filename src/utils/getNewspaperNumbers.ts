import { promises as fs } from "fs";

const getNewspaperNumbers = async () => {
  const files = await fs.readdir("./text");

  const newspaperNumbers = files
    .filter((filename) => /^\d+\.md$/.test(filename))
    .map((filename) => filename.slice(0, -3));

  return newspaperNumbers;
};

export default getNewspaperNumbers;
