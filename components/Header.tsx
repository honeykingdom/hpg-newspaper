import Link from "next/link";
import styled from "styled-components";

const HeaderRoot = styled.header`
  padding-top: 16px;
  margin-bottom: 32px;
  font-family: "Chakra Petch", sans-serif;
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
  display: none;
  margin: 0;
  padding: 8px 16px;
  list-style: none;
  text-align: center;
  border: 2px solid var(--color-blue);
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
const Logo = styled.div`
  height: 200px;
  background: url("/images/logo.png") center no-repeat;
`;

const normalizeArticleNumber = (number) =>
  number[0] === "0" ? number.slice(1) : number;

type Props = {
  date?: string;
  currentArticleNumber?: string;
  articleNumbers: string[];
};

const Header = ({ date, currentArticleNumber, articleNumbers }: Props) => (
  <HeaderRoot>
    <Description>
      {date && <span>{date}</span>}
      <ArticleNumber>
        {currentArticleNumber && (
          <ArticleNumberText>Выпуск {currentArticleNumber}</ArticleNumberText>
        )}
        <Dropdown>
          {articleNumbers.map((n) => (
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

export default Header;
