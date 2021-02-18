import { useState } from "react";
import styled from "styled-components";
import MDX from "@mdx-js/runtime";
import type { ComponentDictionary } from "../types";
import VideoModal from "./VideoModal";
import getTwitchClipEmbedSrc from "../utils/getTwitchClipEmbedSrc";

const ArticleNeonRoot = styled.article`
  position: relative;
  margin-bottom: 32px;
  padding-top: 24px;
  padding-bottom: 24px;
  color: var(--color-blue);
  background-color: var(--color-black);
  border: 2px solid var(--color-blue);
  clip-path: polygon(16px 0, 100% 0, 100% 100%, 0 100%, 0 16px);
  overflow: hidden;

  @media (min-width: 540px) {
    padding-top: 32px;
    padding-bottom: 40px;
  }

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
  padding-left: calc(var(--subtitle-hr-width) + var(--padding-mobile) * 2);
  padding-right: var(--padding-mobile);
  margin-bottom: 32px;
  font-family: var(--font-secondary);
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: right;
  letter-spacing: 0.2em;
  line-height: 16px;

  @media (min-width: 540px) {
    padding-left: calc(var(--subtitle-hr-width) + var(--padding-desktop) * 2);
    padding-right: var(--padding-desktop);
  }

  &:after {
    content: "";
    position: absolute;
    top: 7px;
    left: var(--padding-mobile);
    width: 48px;
    height: 2px;
    background-color: currentColor;

    @media (min-width: 540px) {
      left: var(--padding-desktop);
    }
  }
`;
const Title = styled.div`
  padding: 0 var(--padding-mobile);
  margin-bottom: 32px;
  font-size: 26px;
  line-height: 34px;
  font-family: var(--font-secondary);
  font-weight: bold;

  @media (min-width: 540px) {
    padding: 0 var(--padding-desktop);
  }
`;
const Content = styled.div`
  padding: 0 var(--padding-mobile);
  font-size: 18px;
  line-height: 1.5;

  a {
    color: inherit;
    text-decoration-color: var(--color-yellow);

    &:hover {
      color: var(--color-yellow);
    }
  }

  & :last-child {
    margin-bottom: 0;
  }

  @media (min-width: 540px) {
    padding: 0 var(--padding-desktop);
  }
`;

type Props = {
  children?: React.ReactNode;
  title?: string;
  subtitle: string;
  content?: string;
  components: ComponentDictionary;
};

const ArticleNeon = ({
  children,
  title,
  subtitle,
  content,
  components,
}: Props) => (
      <ArticleNeonRoot>
        <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Title dangerouslySetInnerHTML={{ __html: title || "" }} />
    <Content>
          {content ? <MDX components={components}>{content}</MDX> : children}
        </Content>
      </ArticleNeonRoot>
  );

export default ArticleNeon;
