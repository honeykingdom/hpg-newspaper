import { promises as fs } from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import MDX from "@mdx-js/runtime";
import Grid from "../../components/Grid";
import Article from "../../components/Article";
import Heading from "../../components/Heading";
import HpgLayout from "../../components/HpgLayout";
import getNewspaperNumbers from "../../utils/getNewspaperNumbers";
import parseNewspaperData from "../../utils/parseNewspaperData";
import type { ComponentDictionary, HpgLayoutProps } from "../../types";

export const components: ComponentDictionary = {
  Layout: HpgLayout,
  Heading,
  Article,
  Grid,
};

const HpgNews = ({ articles, layout, ...props }: HpgLayoutProps) => (
  <MDX components={components} scope={{ articles, props }}>
    {layout}
  </MDX>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const files = await fs.readdir("./text");
  const pages = files
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => filename.slice(0, -3));

  return {
    paths: pages.map((number) => ({
      params: { id: `hpg-${number}` },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<HpgLayoutProps> = async ({
  params,
}) => {
  const [content, newspaperNumbers] = await Promise.all([
    fs.readFile(`./text/${params.id.slice(4)}.md`, "utf8"),
    getNewspaperNumbers(),
  ]);

  return {
    props: {
      newspaperNumbers,
      ...parseNewspaperData(content),
    },
  };
};

export default HpgNews;
