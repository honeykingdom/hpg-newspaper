import Image from "next/image";
import styled from "styled-components";
import type { PlayerName } from "types";

const StatisticCardRoot = styled.div<{ color: string }>`
  position: relative;
  padding: 16px;
  margin-bottom: 32px;
  color: var(--color-blue);
  font-family: var(--font-secondary);
  background-color: var(--color-black);
  border: 2px solid var(--color-blue);
  border-left-width: 16px;
  clip-path: polygon(16px 0, 100% 0, 100% 100%, 0 100%, 0 16px);

  @media (min-width: 420px) {
    width: 384px;
    height: 200px;
  }

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
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 1.5;

  @media (min-width: 420px) {
    width: 180px;
  }
`;
const ImageWrapper = styled.div`
  width: 140px;
  height: 90px;
  margin-bottom: 8px;
  background-color: var(--color-blue);
  clip-path: polygon(
    15px 0,
    84px 0,
    86px 4px,
    109px 4px,
    111px 0,
    125px 0,
    140px 15px,
    140px 75px,
    125px 90px,
    113px 90px,
    111px 86px,
    29px 86px,
    27px 90px,
    15px 90px,
    0 75px,
    0 45px,
    4px 43px,
    4px 24px,
    0 22px,
    0 15px
  );

  @media (min-width: 420px) {
    position: absolute;
    top: 16px;
    right: 16px;
    margin-bottom: 0;
  }
`;
const ImageInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  clip-path: polygon(
    17px 3px,
    82px 3px,
    84px 7px,
    111px 7px,
    113px 3px,
    123px 3px,
    137px 17px,
    137px 73px,
    123px 87px,
    115px 87px,
    113px 83px,
    27px 83px,
    25px 87px,
    17px 87px,
    3px 73px,
    3px 47px,
    7px 45px,
    7px 22px,
    3px 20px,
    3px 17px
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

const StatisticCard = ({ name, time, level, points, partner }: Props) => (
  <StatisticCardRoot color={players[name].color}>
    <Name>{players[name].name}</Name>
    <ImageWrapper>
      <ImageInner>
        <Image
          src={players[name].image}
          alt={players[name].name}
          width={136}
          height={86}
          layout="fixed"
          unoptimized
        />
      </ImageInner>
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
        Partner: <strong dangerouslySetInnerHTML={{ __html: partner }} />
      </TableRow>
    </Table>
  </StatisticCardRoot>
);

export default StatisticCard;
