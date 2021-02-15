import styled from "styled-components";
import MapBorder from "../public/images/map-border.svg";

const MapRoot = styled.div`
  position: relative;
  border: 16px solid #000;
  clip-path: polygon(
    calc(100% - 16px) 0,
    100% 16px,
    100% calc(100% - 16px),
    calc(100% - 16px) 100%,
    16px 100%,
    0 calc(100% - 16px),
    0 16px,
    16px 0
  );

  @media (min-width: 864px) {
    padding: 16px;
    border: none;
    clip-path: none;
  }
`;
const StyledMapBorder = styled(MapBorder)`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media (min-width: 864px) {
    display: block;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1d1e;

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
    <ImageWrapper>
      <Image src={src} alt="HPG map" />
    </ImageWrapper>
    <StyledMapBorder />
  </MapRoot>
);

export default Map;
