import styled from "styled-components";

const MapRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1d1e;
  border: 16px solid #000;
  clip-path: polygon(
    62% 0,
    63% 4px,
    86% 4px,
    87% 0,
    calc(100% - 16px) 0,
    100% 16px,
    100% calc(100% - 16px),
    calc(100% - 16px) 100%,
    89% 100%,
    88% calc(100% - 4px),
    13% calc(100% - 4px),
    12% 100%,
    16px 100%,
    0 calc(100% - 16px),
    0 51%,
    4px 50%,
    4px 14%,
    0 13%,
    0 16px,
    16px 0
  );

  @media (min-width: 864px) {
    width: 768px;
    height: 418px;
  }
`;
const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

type Props = {
  src: string;
};

const Map = ({ src }: Props) => (
  <MapRoot>
    <Image src={src} alt="HPG map" />
  </MapRoot>
);

export default Map;
