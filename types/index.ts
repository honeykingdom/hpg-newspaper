export type ArticleColor = "yellow" | "blue" | "white" | "red";
export type ArticleVariant = "default" | "neon";

export type ArticleType = {
  title?: string;
  subtitle: string;
  image?: string;
  imageHeight?: number;
  imageWidth?: number;
  content?: string;
  color?: ArticleColor;
  variant?: ArticleVariant;
};

export type HpgLayoutProps = {
  date: string;
  number: string;
  map: string;
  statistics: StatisticItem[];
  articles: ArticleType[];
  newspaperNumbers: string[];
  layout: string;
};

export type PlayerName =
  | "browjey"
  | "unclebjorn"
  | "mistafaker"
  | "lasqa"
  | "melharucos"
  | "segall";

export type StatisticItem = {
  name: PlayerName;
  time: string;
  level: string;
  points: string;
  partner: string;
};
