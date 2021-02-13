import Grid from "../../components/Grid";
import Article from "../../components/Article";
import Heading from "../../components/Heading";
import HpgLayout from "../../components/HpgLayout";
import getHpgStaticProps from "../../utils/getHpgStaticProps";
import type { HpgLayoutProps } from "../../types";

const HpgNews = ({ articles, ...rest }: HpgLayoutProps) => (
  <HpgLayout {...rest}>
    <Heading>Главное</Heading>
    <Article {...articles[0]} />
    <Grid container>
      <Grid item>
        <Article {...articles[1]} />
        <Article {...articles[2]} />
      </Grid>
      <Grid item>
        <Article {...articles[3]} />
        <Article {...articles[4]} />
      </Grid>
    </Grid>
  </HpgLayout>
);

export const getStaticProps = getHpgStaticProps("./text/03.md");

export default HpgNews;
