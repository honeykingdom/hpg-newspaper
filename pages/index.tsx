import { useEffect } from "react";
import type { GetStaticProps } from "next";
import { useRouter } from "next/router";
import getNewspaperNumbers from "../utils/getNewspaperNumbers";

type Props = {
  lastNewspaperNumber: string;
};

const Home = ({ lastNewspaperNumber }: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.push(lastNewspaperNumber);
  });

  return null;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const newspaperNumbers = await getNewspaperNumbers();
  const lastNewspaperNumber = newspaperNumbers[newspaperNumbers.length - 1];

  return { props: { lastNewspaperNumber } };
};
