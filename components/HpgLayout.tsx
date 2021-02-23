import styled from "styled-components";
import Container from "components/Container";
import Grid from "components/Grid";
import Header from "components/Header";
import Heading from "components/Heading";
import StatisticCard from "components/StatisticCard";
import Map from "components/Map";
import type { StatisticItem } from "types";

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
  newspaperNumbers: string[];
};

const HpgLayout = ({
  children,
  date,
  number,
  map,
  statistics,
  newspaperNumbers,
}: Props) => (
  <Container
    currentNewspaperNumber={number}
    newspaperNumbers={newspaperNumbers}
  >
    <Header
      date={date}
      currentNewspaperNumber={number}
      newspaperNumbers={newspaperNumbers}
    />

    {children}

    <Heading>Статистика участников</Heading>
    <Grid container>
      <Grid item>
        <CardsWrapper>
          {statistics.slice(0, 3).map((card) => (
            <StatisticCard key={card.name} {...card} />
          ))}
        </CardsWrapper>
      </Grid>
      <Grid item>
        <CardsWrapper>
          {statistics.slice(3).map((card) => (
            <StatisticCard key={card.name} {...card} />
          ))}
        </CardsWrapper>
      </Grid>
    </Grid>

    <Heading>Карта</Heading>
    <Map src={map} />
  </Container>
);

export default HpgLayout;
