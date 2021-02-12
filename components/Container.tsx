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

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"
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
  padding: 0 32px;
  width: 864px;
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
const GithubButton = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  padding: 4px;
  justify-content: flex-end;
  height: 56px;
  width: 56px;
  color: var(--color-gray);
  background-color: #171717;
  clip-path: polygon(0 0, 100% 0, 100% 100%);
`;
const StyledGithubIcon = styled(GithubIcon)`
  display: block;
  height: 24px;
  width: 24px;
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
      <GithubButton
        href="https://github.com/honeykingdom/hpg-newspaper"
        target="_blank"
        rel="noreferrer noopener"
        title="Github Repository"
      >
        <StyledGithubIcon />
      </GithubButton>
    </ContainerRoot>
  );
};

export default Container;
