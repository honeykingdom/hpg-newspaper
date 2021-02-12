import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Item = styled.div`
  width: 384px;
`;

type Props = {
  children: React.ReactNode;
  container?: boolean;
  item?: boolean;
};

const Grid = ({ children, container, item }: Props) => {
  if (container) {
    return <Container>{children}</Container>;
  }

  if (item) {
    return <Item>{children}</Item>;
  }

  return null;
};

export default Grid;
