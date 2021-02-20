import styled from "styled-components";
import Modal from "react-modal";
import Close from "../public/images/close.svg";

const StyledModal = styled(Modal)`
  position: static;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 16px;
  width: 100%;
  height: 320px;
  max-height: 100vh;
  border-radius: 0;
  border: none;
  outline: none;

  @media (min-width: 540px) {
    margin: 0 32px;
    height: 480px;
  }

  @media (min-width: 864px) {
    height: 560px;
  }

  @media (min-width: 1024px) {
    height: 640px;
  }

  @media (min-width: 1280px) {
    margin: 32px auto;
    width: 1280px;
    height: 720px;
  }
`;
const VideoFrame = styled.iframe.attrs({
  allow: "autoplay",
  allowFullScreen: true,
})`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  border: none;
  background-color: #000;
`;
const styledOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
} as const;
const ModalClose = styled(Close)`
  position: absolute;
  top: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  color: var(--color-white);
  opacity: 0.2;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

type Props = {
  isOpen: boolean;
  src?: string;
  onClose?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
};

const VideoModal = ({ isOpen, src, onClose }: Props) => (
  <StyledModal
    isOpen={isOpen}
    onRequestClose={onClose}
    style={{ overlay: styledOverlay }}
    ariaHideApp={false}
  >
    <VideoFrame src={src} />

    <ModalClose onClick={onClose} />
  </StyledModal>
);

export default VideoModal;
