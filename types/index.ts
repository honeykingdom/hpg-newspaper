import { ArticleType } from "../components/Article";
import { StatisticItem } from "../components/HpgLayout";

export type HpgLayoutProps = {
  date: string;
  number: string;
  map: string;
  statistics: StatisticItem[];
  articles: ArticleType[];
  articleNumbers: string[];
};
