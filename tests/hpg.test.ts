import { promises as fs } from "fs";
import getArticlesFromMd from "../utils/getArticlesFromMd";

describe("HPG Pages", () => {
  test("syntax in md files", async () => {
    const files = await fs.readdir("./text/");
    const mdFiles = files.filter((file) => file.endsWith(".md"));

    for (const mdFile of mdFiles) {
      await getArticlesFromMd(`./text/${mdFile}`);
    }
  });
});
