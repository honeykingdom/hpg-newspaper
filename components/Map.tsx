import styled from "styled-components";

const MapBorder = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" {...props}>
    <path d="M16 0L0 16v53l4 7v142l-4 7v209l16 16h84l7-4h587l7 4h83l16-16V16L784 0h-98l-7 4H505l-7-4zm0 16h768v418H16z" />
  </svg>
);

const MapRoot = styled.div`
  position: relative;
  padding: 16px;
`;
const StyledMapBorder = styled(MapBorder)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Image = styled.img`
  display: block;
`;

type Props = {
  src: string;
};

const Map = ({ src }: Props) => (
  <MapRoot>
    <Image src={src} alt="HPG map" width={768} height={418} />
    <StyledMapBorder />
  </MapRoot>
);

export default Map;
