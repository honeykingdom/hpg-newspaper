import { useEffect } from "react";
import type { GetStaticProps } from "next";
import { useRouter } from "next/router";
import getArticleNumbers from "../utils/getArticleNumbers";

type Props = {
  lastArticleNumber: string;
};

const Home = ({ lastArticleNumber }: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/articles/hpg-${lastArticleNumber}`);
  });

  return null;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const articleNumbers = await getArticleNumbers();

  return {
    props: {
      lastArticleNumber: articleNumbers[articleNumbers.length - 1],
    },
  };
};
