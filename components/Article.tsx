import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import MDX from "@mdx-js/runtime";
import type {
  ArticleType,
  ArticleColor,
  ComponentDictionary,
  ArticleVariant,
} from "types";
import Icon from "components/Icon";
import VideoModal from "components/VideoModal";
import getTwitchClipEmbedSrc from "utils/getTwitchClipEmbedSrc";
import Line from "public/images/line.svg";

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
const linkColorsMap = {
  yellow: "var(--color-yellow)",
  blue: "var(--color-blue)",
  white: "var(--color-yellow)",
  red: "var(--color-red)",
  undefined: "var(--color-yellow)",
};

const ArticleRoot = styled.article`
  position: relative;
  margin-bottom: 32px;
  background-color: #171717;
  clip-path: polygon(16px 0, 100% 0, 100% 100%, 0 100%, 0 16px);
  overflow: hidden;
`;
const ArticleNeon = styled.article`
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
const SubtitleNeon = styled.div`
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
const TitleNeon = styled.div`
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
const HeaderImageWrapper = styled.div`
  padding: 6px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #171717;
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
type ContentProps = {
  variant: ArticleVariant;
  color: ArticleColor;
  hasImage: boolean;
};
const Content = styled.div<ContentProps>`
  padding-left: var(--padding-mobile);
  padding-right: var(--padding-mobile);
  padding-bottom: ${(p) => (p.variant === "default" ? "24px" : "0")};
  padding-top: ${(p) => (p.variant === "default" && p.hasImage ? "8px" : "0")};
  line-height: 1.5;
  font-size: ${(p) => (p.variant === "default" ? "16px" : "18px")};

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

  a {
    color: inherit;
    text-decoration-color: ${(p) => linkColorsMap[p.color]};
    text-decoration-thickness: 2px;

    &:hover {
      color: ${(p) => linkColorsMap[p.color]};
    }
  }

  img {
    max-width: 100%;
  }

  & :last-child {
    margin-bottom: 0;
  }
`;
const BottomLine = styled(Line)<{ color: ArticleColor }>`
  fill: ${(p) => bgColorsMap[p.color]};
  transform: scaleY(-1);
`;

const getAnchorElement = (
  el: HTMLElement | null,
  depth = 2
): HTMLAnchorElement | null => {
  if (!el) return null;
  if (el.nodeName === "A") return el as HTMLAnchorElement;

  if (depth === 0) return null;

  return getAnchorElement(el.parentElement, depth - 1);
};

const components: ComponentDictionary = { Icon };

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
  const [isOpen, setIsOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const hasContent = content || children;
  const hasImage = !!image;

  const handleContentClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    const anchorElement = getAnchorElement(e.target as HTMLElement);

    if (!anchorElement) return;

    const src = getTwitchClipEmbedSrc(anchorElement.href);

    if (!src) return;

    e.preventDefault();
    setIsOpen(true);
    setVideoSrc(src);
  };

  const renderContent = () => (
    <Content
      variant={variant}
      color={color}
      hasImage={hasImage}
      onClick={handleContentClick}
    >
      {content ? <MDX components={components}>{content}</MDX> : children}
    </Content>
  );

  const renderModal = () => (
    <VideoModal
      isOpen={isOpen}
      src={videoSrc}
      onClose={() => setIsOpen(false)}
    />
  );

  if (variant === "neon") {
    return (
      <>
        <ArticleNeon>
          <SubtitleNeon dangerouslySetInnerHTML={{ __html: subtitle }} />
          <TitleNeon dangerouslySetInnerHTML={{ __html: title || "" }} />
          {hasContent && renderContent()}
        </ArticleNeon>
        {isOpen && renderModal()}
      </>
    );
  }

  return (
    <>
      <ArticleRoot>
        <Header color={color}>
          <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
          {title && <Title dangerouslySetInnerHTML={{ __html: title }} />}
          {image && (
            <HeaderImageWrapper>
              <ImageTopLine color={color} />
              <Image
                src={image}
                alt={title}
                height={imageHeight}
                width={imageWidth}
                layout="responsive"
                unoptimized
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
        {hasContent && renderContent()}
        {variant === "default" && hasContent && <BottomLine color={color} />}
      </ArticleRoot>
      {isOpen && renderModal()}
    </>
  );
};

export default Article;
