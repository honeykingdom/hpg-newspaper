import styled, { css } from "styled-components";
import MDX from "@mdx-js/runtime";

type ArticleColor = "yellow" | "blue" | "white" | "red";
type ArticleVariant = "default" | "neon";

type Props = {
  children?: React.ReactNode;
  title?: string;
  subtitle: string;
  image?: string;
  imageHeight?: number;
  imageWidth?: number;
  content?: string;
  color?: ArticleColor;
  variant?: ArticleVariant;
};

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

type LineProps = {
  style?: React.CSSProperties;
  className?: string;
};

const Line = ({ style, className }: LineProps) => (
  <svg
    width="800"
    height="17"
    viewBox="0 0 800 17"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.6851 10.4827L38.6963 10.4945L35.923 10.4945L35.9338 10.4827L38.6851 10.4827ZM39.598 6.55397L35.0129 6.55397L37.3079 8.94128L35.9338 10.4827L-5.69766e-07 10.4827L-1.48619e-06 -6.33678e-07L800 -7.05719e-05L800 10.4861L686.715 10.4861L683.527 14.0087L678.143 14.0087L671.49 6.55392L671.48 6.56394L671.472 6.55392L667.651 10.4826L606.983 10.4826L605.609 8.94123L607.904 6.55392L603.319 6.55392L605.609 8.94123L604.232 10.4826L570.185 10.4827L568.229 12.4189L564.377 16.437L561.807 13.9494L548.788 13.9542L546.701 13.9542L541.426 8.32022L527.413 8.32022L524.397 11.3821L493.455 11.3656L491.05 8.94298L487.447 12.7013L486.242 11.3656L417.425 11.3822L412.108 17L402.086 6.55394L402.084 6.55917L402.079 6.55394L398.307 10.4862L396.706 10.4862L395.831 9.57403L397.221 8.13022L394.448 8.13022L395.831 9.57403L394.972 10.4678L362.5 10.4818L362.5 10.4862L356.654 10.4844L353.334 10.4862L353.334 10.4835L289.195 10.4679L288.336 9.57404L289.719 8.13023L286.946 8.13023L288.336 9.57404L287.461 10.4862L285.86 10.4862L282.088 6.55395L282.083 6.55918L282.081 6.55395L272.059 17L266.742 11.3822L229.592 11.3656L228.387 12.7013L224.783 8.943L222.379 11.3386L118.52 11.3552L115.504 8.32026L101.491 8.32026L96.2167 13.9817L81.1096 13.9769L78.5409 16.437L74.688 12.4189L72.7321 10.4827L38.6851 10.4827L37.3079 8.94128L39.598 6.55397ZM657.657 8.81092L658.38 8.81092L658.38 6.55392L657.657 6.55392L657.657 8.81092ZM656.564 8.81092L657.285 8.81092L657.285 6.55392L656.564 6.55392L656.564 8.81092ZM651.513 8.81092L652.234 8.81092L652.234 6.55392L651.513 6.55392L651.513 8.81092ZM642.847 8.81092L645.012 8.81092L645.012 6.55392L642.847 6.55392L642.847 8.81092ZM556.386 11.6475L557.108 11.6475L557.108 10.8958L556.386 10.8958L556.386 11.6475ZM553.619 11.6475L554.341 11.6475L554.341 9.39098L553.619 9.39098L553.619 11.6475ZM548.021 11.6475L548.743 11.6475L548.743 10.8958L548.021 10.8958L548.021 11.6475ZM548.021 10.1423L548.743 10.1423L548.743 9.39098L548.021 9.39098L548.021 10.1423ZM94.1738 11.6476L94.8963 11.6476L94.8963 10.8958L94.1738 10.8958L94.1738 11.6476ZM94.1738 10.1423L94.8963 10.1423L94.8963 9.39102L94.1738 9.39102L94.1738 10.1423ZM88.5759 11.6476L89.2988 11.6476L89.2988 9.39102L88.5759 9.39102L88.5759 11.6476ZM85.8088 11.6476L86.5317 11.6476L86.5317 10.8958L85.8088 10.8958L85.8088 11.6476ZM606.994 10.4944L604.221 10.4944L604.232 10.4826L606.983 10.4826L606.994 10.4944ZM485.741 14.4245L487.447 12.7013L489.156 14.4245L485.741 14.4245ZM226.677 14.4245L228.387 12.7013L230.093 14.4245L226.677 14.4245Z"
    />
  </svg>
);

const ArticleRoot = styled.article<{ variant: ArticleVariant }>`
  position: relative;
  margin-bottom: 32px;
  color: ${(p) => (p.variant === "default" ? "inherit" : "var(--color-blue)")};
  background-color: ${(p) => (p.variant === "default" ? "#171717" : "#010101")};
  border: ${(p) =>
    p.variant === "neon" ? "2px solid var(--color-blue)" : "none"};
  clip-path: polygon(16px 0, 100% 0, 100% 100%, 0 100%, 0 16px);
  overflow: hidden;

  ${(p) =>
    p.variant === "neon" &&
    css`
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
    `};
`;
const Header = styled.header<{ variant: ArticleVariant; color: ArticleColor }>`
  padding-top: ${(p) => (p.variant === "default" ? "32px" : "24px")};
  overflow: hidden;
  color: ${(p) => colorsMap[p.color]};
  background-color: ${(p) => bgColorsMap[p.color]};
`;
const Subtitle = styled.span<{ variant: ArticleVariant }>`
  position: relative;
  margin-bottom: ${(p) => (p.variant === "default" ? "24px" : "0")};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 112px; // 32+48+32
  padding-right: 32px;
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
    top: 14px;
    left: 32px;
    width: 48px;
    height: 2px;
    background-color: currentColor;
  }
`;
const Title = styled.div`
  padding: 0 32px;
  margin-bottom: 24px;
  font-size: 38px;
  font-weight: bold;
  font-family: "Chakra Petch", sans-serif;
  letter-spacing: 1px;
`;
const HeaderImageWrapper = styled.div`
  padding: 6px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #171717;
`;
const HeaderImage = styled.img`
  display: block;
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
  padding: 0 32px;
  padding-bottom: 32px;
  padding-top: ${(p) => (p.hasImage ? "8px" : "0")};
  line-height: 1.5;
  font-size: ${(p) => (p.variant === "default" ? "16px" : "18px")};

  h1,
  h2 {
    font-family: "Chakra Petch", sans-serif;
  }

  p {
    margin: 16px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  hr {
    margin: 16px 0;
    height: 8px;
    background-color: ${(p) => bgColorsMap[p.color]};
    border: none;
    clip-path: polygon(0 0, 100% 0, 100% 2px, 88px 2px, 80px 100%, 0% 100%);
  }
`;
const BottomLine = styled(Line)<{ color: ArticleColor }>`
  fill: ${(p) => bgColorsMap[p.color]};
  transform: scaleY(-1);
`;

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

  return (
    <ArticleRoot variant={variant}>
      <Header variant={variant} color={color}>
        <Subtitle variant={variant}>{subtitle}</Subtitle>
        {title && <Title>{title}</Title>}
        {image && (
          <HeaderImageWrapper>
            <ImageTopLine color={color} />
            <HeaderImage
              src={image}
              alt=""
              height={imageHeight}
              width={imageWidth}
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
        <Content variant={variant} color={color} hasImage={hasImage}>
          {content ? <MDX>{content}</MDX> : children}
        </Content>
      )}
      {variant === "default" && hasContent && <BottomLine color={color} />}
    </ArticleRoot>
  );
};

export default Article;
