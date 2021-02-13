import styled from "styled-components";
import MDX from "@mdx-js/runtime";

const ArticleNeonRoot = styled.article`
  position: relative;
  margin-bottom: 32px;
  padding-top: 32px;
  padding-bottom: 40px;
  color: var(--color-blue);
  background-color: var(--color-black);
  border: 2px solid var(--color-blue);
  clip-path: polygon(16px 0, 100% 0, 100% 100%, 0 100%, 0 16px);
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    background-color: var(--color-blue);
    clip-path: polygon(15px 0, 0 15px, 0 0);
  }
`;
const Subtitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 96px; // 24+48+24
  padding-right: 24px;
  margin-bottom: 32px;
  font-family: "Chakra Petch", sans-serif;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: right;
  letter-spacing: 0.2em;
  line-height: 16px;

  &:after {
    content: "";
    position: absolute;
    top: 7px;
    left: 24px;
    width: 48px;
    height: 2px;
    background-color: currentColor;
  }
`;
const Title = styled.div`
  padding: 0 24px;
  margin-bottom: 32px;
  font-size: 26px;
  line-height: 34px;
  font-family: "Chakra Petch", sans-serif;
  font-weight: bold;
`;
const Content = styled.div`
  padding: 0 24px;
  font-size: 18px;

  & :last-child {
    margin-bottom: 0;
  }
`;

type Props = {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
  content?: string;
};

const ArticleNeon = ({ children, title, subtitle, content }: Props) => (
  <ArticleNeonRoot>
    <Subtitle>{subtitle}</Subtitle>
    <Title>{title}</Title>
    <Content>{content ? <MDX>{content}</MDX> : children}</Content>
  </ArticleNeonRoot>
);

export default ArticleNeon;
