import { GetStaticProps } from "next";
import { HpgLayoutProps } from "../types";
import getArticleNumbers from "./getArticleNumbers";
import getArticlesFromMd from "./getArticlesFromMd";

const getHpgStaticProps = (filename: string) => {
  const getStaticProps: GetStaticProps<HpgLayoutProps> = async () => ({
    props: {
      articleNumbers: await getArticleNumbers(),
      ...(await getArticlesFromMd(filename)),
    },
  });

  return getStaticProps;
};

export default getHpgStaticProps;
