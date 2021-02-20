import Link from "next/link";
import styled, { css } from "styled-components";
import getCurrentNewspaperIndex from "utils/getCurrentNewspaperIndex";
import ArrowPrev from "public/images/arrow-prev.svg";
import ArrowNext from "public/images/arrow-next.svg";
import GithubIcon from "public/images/github-icon.svg";

const ContainerRoot = styled.div`
  position: relative;
  padding-bottom: 128px;
  min-height: calc(100vh - 128px);
  background: url("/images/bottom-line.svg") bottom center repeat-x;
  background-size: 1000px 20px;
`;
const Inner = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 540px) {
    padding: 0 32px;
  }

  @media (min-width: 864px) {
    width: 864px;
  }
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
  display: none;
  padding: 4px;
  justify-content: flex-end;
  height: 56px;
  width: 56px;
  color: var(--color-gray);
  background-color: #171717;
  clip-path: polygon(0 0, 100% 0, 100% 100%);

  @media (min-width: 1024px) {
    display: flex;
  }
`;
const StyledGithubIcon = styled(GithubIcon)`
  display: block;
  height: 24px;
  width: 24px;
`;

type Props = {
  children: React.ReactNode;
  currentNewspaperNumber: string;
  newspaperNumbers: string[];
};

const Container = ({
  children,
  currentNewspaperNumber,
  newspaperNumbers,
}: Props) => {
  const currentIndex = getCurrentNewspaperIndex(
    newspaperNumbers,
    currentNewspaperNumber
  );
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === newspaperNumbers.length - 1;

  // TODO: check if it really string
  const prevNumberUrl = `${newspaperNumbers[currentIndex - 1]}`;
  const nextNumberUrl = `${newspaperNumbers[currentIndex + 1]}`;

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
