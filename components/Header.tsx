import Link from "next/link";
import styled from "styled-components";
import getCurrentNewspaperIndex from "../utils/getCurrentNewspaperIndex";

const HeaderRoot = styled.header`
  padding-top: 16px;
  margin-bottom: 32px;
  font-family: var(--font-secondary);
`;
const Description = styled.div`
  display: flex;
  justify-content: space-between;
  height: 32px;
  color: #02d7f2;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  font-weight: bold;
`;
const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  display: none;
  margin: 0;
  padding: 8px 16px;
  list-style: none;
  text-align: center;
  border: 2px solid var(--color-blue);
  background-color: #101010;
`;
const ArticleNumber = styled.div`
  position: relative;
  width: 128px;
  text-align: right;

  &:hover ${Dropdown} {
    display: block;
  }
`;
const ArticleNumberText = styled.div`
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    top: 4px;
    left: 28px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 4px 0 4px;
    border-color: var(--color-blue) transparent transparent transparent;
  }
`;
const Item = styled.li`
  a {
    display: block;
    padding: 4px 0;
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const Logo = styled.img.attrs({
  src: "/images/logo.png",
  alt: "HPG Newspaper",
})`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  aspect-ratio: 6 / 2;

  @media (min-width: 864px) {
    width: 600px;
    height: 200px;
  }
`;

const normalizeArticleNumber = (number: string) =>
  number[0] === "0" ? number.slice(1) : number;

type Props = {
  date?: string;
  currentNewspaperNumber: string;
  newspaperNumbers: string[];
};

const Header = ({ date, currentNewspaperNumber, newspaperNumbers }: Props) => {
  const currentIndex = getCurrentNewspaperIndex(
    newspaperNumbers,
    currentNewspaperNumber
  );
  const renderedArticles = newspaperNumbers.filter(
    (_, i) => i !== currentIndex
  );

  return (
    <HeaderRoot>
      <Description>
        {date && <span>{date}</span>}
        <ArticleNumber>
          {currentNewspaperNumber && (
            <ArticleNumberText>
              Выпуск {currentNewspaperNumber}
            </ArticleNumberText>
          )}
          <Dropdown>
            {renderedArticles.map((n) => (
              <Item key={n}>
                <Link href={`/articles/hpg-${n}`}>
                  <a>Выпуск {normalizeArticleNumber(n)}</a>
                </Link>
              </Item>
            ))}
          </Dropdown>
        </ArticleNumber>
      </Description>
      <Logo />
    </HeaderRoot>
  );
};

export default Header;
