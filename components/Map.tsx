import styled from "styled-components";
import MapBorder from "../public/images/map-border.svg";

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
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 768px;
  height: 418px;
  background-color: #1b1d1e;
`;
const Image = styled.img`
  display: block;
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
