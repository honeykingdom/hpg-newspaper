import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 864px) {
    flex-direction: row;
  }
`;
const Item = styled.div`
  @media (min-width: 864px) {
    width: 384px;
  }
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
    return (
      <Item>
        {React.Children.map(children, (child) =>
          React.cloneElement(
            child as React.ReactElement<
              any,
              string | React.JSXElementConstructor<any>
            >,
            { imageWidth: 384 }
          )
        )}
      </Item>
    );
  }

  return null;
};

export default Grid;
