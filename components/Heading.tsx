import styled from "styled-components";

const HeadingRoot = styled.div`
  position: relative;
  display: block;
  padding-top: 16px;
  margin-bottom: 32px;
  font-weight: bold;
  color: #02d7f2;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 1px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #010101;
  }
`;
const Inner = styled.span`
  display: inline-flex;
  padding: 4px 8px;
  background-color: #010101;
`;

type Props = {
  children: React.ReactNode;
};

const Heading = ({ children }: Props) => (
  <HeadingRoot>
    <Inner>{children}</Inner>
  </HeadingRoot>
);

export default Heading;
