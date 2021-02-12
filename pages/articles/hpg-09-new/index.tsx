import { GetStaticProps } from "next";
import HpgLayout, { StatisticItem } from "../../../components/HpgLayout";
import Heading from "../../../components/Heading";
import Grid from "../../../components/Grid";
import Article from "../../../components/Article";
import getArticleNumbers from "../../../utils/getArticleNumbers";
import Article1 from "./article1.mdx";
import Article2 from "./article2.mdx";
import Article3 from "./article3.mdx";
import Article4 from "./article4.mdx";
import Article5 from "./article5.mdx";
import Article6 from "./article6.mdx";

const statistics: StatisticItem[] = [
  {
    name: "browjey",
    time: "17:05",
    level: "6",
    points: "32",
    partner: "Клоун Клёпа, Тайлер, Пьер Медовый",
  },
  {
    name: "unclebjorn",
    time: "11:22",
    level: "4",
    points: "3",
    partner: "Маэстро",
  },
  {
    name: "mistafaker",
    time: "05:45",
    level: "4",
    points: "33",
    partner: "Отсутствует",
  },
  {
    name: "lasqa",
    time: "07:00",
    level: "7",
    points: "24",
    partner: "Настоятель Жук",
  },
  {
    name: "melharucos",
    time: "16:18",
    level: "7",
    points: "34",
    partner: "Юрий Александрович",
  },
  {
    name: "segall",
    time: "14:59",
    level: "4",
    points: "-2",
    partner: "Отсутствует",
  },
];

type Props = {
  articleNumbers: string[];
};

export default ({ articleNumbers }: Props) => (
  <HpgLayout
    date="11.02.2021"
    number="9"
    map="/images/09/map.png"
    statistics={statistics}
    articleNumbers={articleNumbers}
  >
    <Article1 />
    <Heading>Главное</Heading>
    <Article2 />
    <Grid container>
      <Grid item>
        <Article3 imageWidth={384} />
        <Article4 imageWidth={384} />
      </Grid>
      <Grid item>
        <Article
          color="white"
          subtitle="Ctrl+V"
          image="/images/09/pasta.png"
          imageHeight={197}
          imageWidth={384}
        />
        <Article5 imageWidth={384} />
      </Grid>
    </Grid>
    <Article6 />
  </HpgLayout>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { articleNumbers: await getArticleNumbers() },
});
