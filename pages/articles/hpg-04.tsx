import Grid from "../../components/Grid";
import Article from "../../components/Article";
import Heading from "../../components/Heading";
import HpgLayout from "../../components/HpgLayout";
import getHpgStaticProps from "../../utils/getHpgStaticProps";
import type { HpgLayoutProps } from "../../types";

const HpgNews = ({ articles, ...rest }: HpgLayoutProps) => (
  <HpgLayout {...rest}>
    <Article {...articles[0]} />
    <Heading>Главное</Heading>
    <Article {...articles[1]} />
    <Grid container>
      <Grid item>
        <Article {...articles[2]} />
      </Grid>
      <Grid item>
        <Article {...articles[3]} />
        <Article {...articles[4]} />
        <Article {...articles[5]} />
      </Grid>
    </Grid>
    <Article {...articles[6]} />
  </HpgLayout>
);

export const getStaticProps = getHpgStaticProps("./text/04.md");

export default HpgNews;
