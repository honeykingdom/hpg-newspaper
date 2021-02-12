import Link from "next/link";
import styled, { css } from "styled-components";

const ArrowPrev = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
    ></path>
  </svg>
);

const ArrowNext = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"
    ></path>
  </svg>
);

const ContainerRoot = styled.div`
  position: relative;
  padding-bottom: 128px;
  min-height: calc(100vh - 128px);
  background: url("/images/bottom-line.svg") bottom center repeat-x;
  background-size: 1000px 20px;
`;
const Inner = styled.div`
  margin: 0 auto;
  width: 800px;
`;
const articleButton = css`
  display: none;
  position: fixed;
  top: 50vh;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0.2;

  &:hover {
    opacity: 0.5;
  }

  @media (min-width: 1200px) {
    display: block;
  }
`;
const PrevArticle = styled.a`
  ${articleButton};
  left: 0;
`;
const NextArticle = styled.a`
  ${articleButton};
  right: 0;
`;
const articleIcon = css`
  width: 128px;
  height: 128px;
  color: var(--color-black);
`;
const StyledArrowPrev = styled(ArrowPrev)`
  ${articleIcon};
`;
const StyledArrowNext = styled(ArrowNext)`
  ${articleIcon};
`;

type Props = {
  children: React.ReactNode;
  currentArticleNumber: string;
  articleNumbers: string[];
};

const Container = ({
  children,
  currentArticleNumber,
  articleNumbers,
}: Props) => {
  const current =
    currentArticleNumber.length === 1
      ? `0${currentArticleNumber}`
      : currentArticleNumber;
  const currentIndex = articleNumbers.findIndex((n) => n === current);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === articleNumbers.length - 1;

  const prevNumberUrl = `/articles/hpg-${articleNumbers[currentIndex - 1]}`;
  const nextNumberUrl = `/articles/hpg-${articleNumbers[currentIndex + 1]}`;

  return (
    <ContainerRoot>
      <Inner>{children}</Inner>
      {!isFirst && (
        <Link href={prevNumberUrl} passHref>
          <PrevArticle title="Предыдущий выпуск">
            <StyledArrowPrev />
          </PrevArticle>
        </Link>
      )}
      {!isLast && (
        <Link href={nextNumberUrl} passHref>
          <NextArticle title="Следующий выпуск">
            <StyledArrowNext />
          </NextArticle>
        </Link>
      )}
    </ContainerRoot>
  );
};

export default Container;
