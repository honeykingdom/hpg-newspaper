import styled from "styled-components";
import MDX from "@mdx-js/runtime";
import ArticleNeon from "./ArticleNeon";
import type { ArticleType, ArticleColor, ComponentDictionary } from "../types";
import Emote from "./Emote";
import Line from "../public/images/line.svg";

const bgColorsMap = {
  yellow: "var(--color-yellow)",
  blue: "var(--color-blue)",
  white: "var(--color-white)",
  red: "var(--color-red)",
};
const colorsMap = {
  yellow: "var(--color-black)",
  blue: "var(--color-black)",
  white: "var(--color-black)",
  red: "var(--color-white)",
};

const ArticleRoot = styled.article`
  position: relative;
  margin-bottom: 32px;
  background-color: #171717;
  clip-path: polygon(16px 0, 100% 0, 100% 100%, 0 100%, 0 16px);
  overflow: hidden;
`;
const Header = styled.header<{ color: ArticleColor }>`
  padding-top: 32px;
  overflow: hidden;
  color: ${(p) => colorsMap[p.color]};
  background-color: ${(p) => bgColorsMap[p.color]};
`;
const Subtitle = styled.span`
  position: relative;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: calc(var(--subtitle-hr-width) + var(--padding-mobile) * 2);
  padding-right: var(--padding-mobile);
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
    width: var(--subtitle-hr-width);
    height: 2px;
    background-color: currentColor;

    @media (min-width: 540px) {
      left: var(--padding-desktop);
    }
  }
`;
const Title = styled.div`
  padding: 0 var(--padding-mobile);
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: bold;
  font-family: var(--font-secondary);
  line-height: 40px;

  @media (min-width: 540px) {
    padding: 0 var(--padding-desktop);
    font-size: 36px;
    line-height: 48px;
  }
`;
const HeaderImageWrapper = styled.div`
  padding: 6px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #171717;
`;
const HeaderImage = styled.img<{ $height?: number; $width?: number }>`
  display: block;
  object-fit: contain;

  @media (min-width: 864px) {
    width: ${(p) => p.$width}px;
    height: ${(p) => p.$height}px;
  }
`;
const ImageTopLine = styled(Line)<{ color: ArticleColor }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  fill: ${(p) => bgColorsMap[p.color]};
`;
const ImageBottomLine = styled(Line)<{ color: ArticleColor }>`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  transform: scaleY(-1);
  fill: ${(p) => bgColorsMap[p.color]};
`;
const Content = styled.div<{ color: ArticleColor; hasImage: boolean }>`
  padding-left: var(--padding-mobile);
  padding-right: var(--padding-mobile);
  padding-bottom: 24px;
  padding-top: ${(p) => (p.hasImage ? "8px" : "0")};
  line-height: 1.5;
  font-size: 16px;

  @media (min-width: 540px) {
    padding-left: var(--padding-desktop);
    padding-right: var(--padding-desktop);
  }

  h1,
  h2 {
    font-family: var(--font-secondary);
  }

  p {
    margin: 16px 0;
  }

  hr {
    margin: 16px 0;
    height: 8px;
    background-color: ${(p) => bgColorsMap[p.color]};
    border: none;
    clip-path: polygon(0 0, 100% 0, 100% 2px, 88px 2px, 80px 100%, 0% 100%);
  }

  blockquote {
    position: relative;
    margin-left: 24px;
    margin-right: 0;
    font-size: 14px;

    &:before {
      content: "";
      position: absolute;
      top: 6px;
      bottom: 5px;
      left: -16px;
      width: 2px;
      background-color: var(--color-white);
    }
  }

  & :last-child {
    margin-bottom: 0;
  }
`;
const BottomLine = styled(Line)<{ color: ArticleColor }>`
  fill: ${(p) => bgColorsMap[p.color]};
  transform: scaleY(-1);
`;

const components: ComponentDictionary = { Emote };

type Props = {
  children?: React.ReactNode;
} & ArticleType;

const Article = ({
  children,
  title,
  subtitle,
  image,
  imageHeight,
  imageWidth = 800,
  content,
  color,
  variant = "default",
}: Props) => {
  const hasContent = content || children;
  const hasImage = !!image;

  if (variant === "neon") {
    return (
      <ArticleNeon
        title={title}
        subtitle={subtitle}
        content={content}
        components={components}
      />
    );
  }

  return (
    <ArticleRoot>
      <Header color={color}>
        <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        {title && <Title dangerouslySetInnerHTML={{ __html: title }} />}
        {image && (
          <HeaderImageWrapper>
            <ImageTopLine color={color} />
            <HeaderImage
              src={image}
              alt={title}
              $height={imageHeight}
              $width={imageWidth}
            />
            <ImageBottomLine color={color} />
          </HeaderImageWrapper>
        )}
      </Header>
      {variant === "default" && !hasImage && (
        <Line
          style={{
            fill: bgColorsMap[color],
          }}
        />
      )}
      {hasContent && (
        <Content color={color} hasImage={hasImage}>
          {content ? <MDX components={components}>{content}</MDX> : children}
        </Content>
      )}
      {variant === "default" && hasContent && <BottomLine color={color} />}
    </ArticleRoot>
  );
};

export default Article;
