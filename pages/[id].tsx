import { promises as fs } from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import MDX from "@mdx-js/runtime";
import Grid from "components/Grid";
import Article from "components/Article";
import Heading from "components/Heading";
import HpgLayout from "components/HpgLayout";
import ArticleImage from "components/ArticleImage";
import getNewspaperNumbers from "utils/getNewspaperNumbers";
import parseNewspaperData from "utils/parseNewspaperData";
import type { ComponentDictionary, HpgLayoutProps } from "types";

export const components: ComponentDictionary = {
  Layout: HpgLayout,
  Heading,
  Article,
  Grid,
  ArticleImage,
};

type Params = {
  id: string;
};

const HpgNews = ({ articles, layout, ...props }: HpgLayoutProps) => (
  <>
    {/* eslint-disable-next-line react/destructuring-assignment */}
    <NextSeo title={`HPG Newspaper. Выпуск ${props.number}`} />
    <MDX components={components} scope={{ articles, props }}>
      {layout}
    </MDX>
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const files = await fs.readdir("./text");
  const pages = files
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => filename.slice(0, -3));

  return {
    paths: pages.map((newspaperNumber) => ({
      params: { id: newspaperNumber },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<HpgLayoutProps, Params> = async ({
  params,
}) => {
  const [content, newspaperNumbers] = await Promise.all([
    fs.readFile(`./text/${params?.id}.md`, "utf8"),
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
