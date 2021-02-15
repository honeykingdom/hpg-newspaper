import styled from "styled-components";
import Head from "next/head";
import Container from "./Container";
import Grid from "./Grid";
import Header from "./Header";
import Heading from "./Heading";
import StatisticCard from "./StatisticCard";
import Map from "./Map";
import type { StatisticItem } from "../types";

const CardsWrapper = styled.div`
  @media (min-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

type Props = {
  children: React.ReactNode;
  date: string;
  number: string;
  map: string;
  statistics: StatisticItem[];
  articleNumbers: string[];
};

const HpgLayout = ({
  children,
  date,
  number,
  map,
  statistics,
  articleNumbers,
}: Props) => (
  <>
    <Head>
      <title>HPG Newspaper. Выпуск {number}</title>
    </Head>
    <Container currentArticleNumber={number} articleNumbers={articleNumbers}>
      <Header
        date={date}
        currentArticleNumber={number}
        articleNumbers={articleNumbers}
      />

      <>{children}</>

      <Heading>Статистика участников</Heading>
      <Grid container>
        <Grid item>
          <CardsWrapper>
            {statistics.slice(0, 3).map((props) => (
              <StatisticCard key={props.name} {...props} />
            ))}
          </CardsWrapper>
        </Grid>
        <Grid item>
          <CardsWrapper>
            {statistics.slice(3).map((props) => (
              <StatisticCard key={props.name} {...props} />
            ))}
          </CardsWrapper>
        </Grid>
      </Grid>

      <Heading>Карта</Heading>
      <Map src={map} />
    </Container>
  </>
);

export default HpgLayout;
