import { GetStaticPaths, GetStaticProps } from "next";
import MDX from "@mdx-js/runtime";
import Grid from "../../components/Grid";
import Article from "../../components/Article";
import Heading from "../../components/Heading";
import HpgLayout from "../../components/HpgLayout";
import getArticleNumbers from "../../utils/getArticleNumbers";
import getArticlesFromMd from "../../utils/getArticlesFromMd";
import type { HpgLayoutProps } from "../../types";

const components = {
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
  const articleNumbers = await getArticleNumbers();

  return {
    paths: articleNumbers.map((number) => ({
      params: { id: `hpg-${number}` },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<HpgLayoutProps> = async ({
  params,
}) => {
  const filename = `./text/${params.id.slice(4)}.md`;

  return {
    props: {
      articleNumbers: await getArticleNumbers(),
      ...(await getArticlesFromMd(filename)),
    },
  };
};

export default HpgNews;
