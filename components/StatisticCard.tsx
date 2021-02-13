import styled from "styled-components";
import type { PlayerName } from "../types";

const StatisticCardRoot = styled.div<{ color: string }>`
  position: relative;
  padding: 16px;
  margin-bottom: 32px;
  height: 200px;
  color: var(--color-blue);
  font-family: "Chakra Petch", sans-serif;
  background-color: var(--color-black);
  border: 2px solid var(--color-blue);
  border-left-width: 16px;
  clip-path: polygon(16px 0, 100% 0, 100% 100%, 0 100%, 0 16px);

  &:before {
    content: "";
    position: absolute;
    top: -2px;
    left: -16px;
    bottom: -2px;
    width: 16px;
    background-color: ${(p) => p.color};
  }

  &:after {
    content: "";
    position: absolute;
    right: -2px;
    bottom: -2px;
    width: 8px;
    height: 88px;
    background-color: var(--color-blue);
    clip-path: polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px);
  }
`;
const Name = styled.div`
  margin-bottom: 8px;
  width: 180px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 1.5;
`;
const ImageWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 140px;
  height: 90px;
  padding: 1px;
`;
const Image = styled.img`
  display: block;
  clip-path: path(
    "M15 0L0 14v8l4 2v19l-4 2v31l15 14h12l2-4h82l2 4h12l15-14V14L125 0h-14l-2 4H86l-2-4z"
  );
`;
const Table = styled.div`
  font-size: 18px;
`;
const TableRow = styled.div`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const players = {
  browjey: {
    name: "Алексей «Browjey» Жданов",
    image: "/images/avatars/browjey.png",
    color: "#f34a44",
  },
  unclebjorn: {
    name: "Михаил «Uncle-Bjorn» Левенко",
    image: "/images/avatars/unclebjorn.png",
    color: "#b07e54",
  },
  mistafaker: {
    name: "Иван «Mistafaker» Дёмкин",
    image: "/images/avatars/mistafaker.png",
    color: "#78b05e",
  },
  lasqa: {
    name: "Богдан «Lasqa» Вавилов",
    image: "/images/avatars/lasqa.png",
    color: "#4a9cf3",
  },
  melharucos: {
    name: "Владимир «Melha-rucos» Дубровин",
    image: "/images/avatars/melharucos.png",
    color: "#ffd167",
  },
  segall: {
    name: "Александр «Segall» Хорохорин",
    image: "/images/avatars/segall.png",
    color: "#a17aff",
  },
} as const;

type Props = {
  name: PlayerName;
  time: string;
  level: string;
  points: string;
  partner: string;
};

const ImageBorder = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 90" {...props}>
    <path d="M15 0L0 14v8l4 2v19l-4 2v31l15 14h12l2-4h82l2 4h12l15-14V14L125 0h-14l-2 4H86l-2-4H15zm2 3h65l2 4h27l2-4h10l14 13v58l-14 13h-8l-2-4H27l-2 4h-8L3 74V48l4-2V21l-4-2v-3L17 3z" />
  </svg>
);

const StyledImageBorder = styled(ImageBorder)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  fill: var(--color-blue);
`;

const StatisticCard = ({ name, time, level, points, partner }: Props) => (
  <StatisticCardRoot color={players[name].color}>
    <Name>{players[name].name}</Name>
    <ImageWrapper>
      <Image
        src={players[name].image}
        alt={players[name].name}
        width={136}
        height={86}
      />
      <StyledImageBorder />
    </ImageWrapper>
    <Table>
      <TableRow>
        Time: <strong>{time}</strong>
      </TableRow>
      <TableRow>
        Level: <strong>{level}</strong>
      </TableRow>
      <TableRow>
        Points: <strong>{points}</strong>
      </TableRow>
      <TableRow>
        Partner: <strong>{partner}</strong>
      </TableRow>
    </Table>
  </StatisticCardRoot>
);

export default StatisticCard;
