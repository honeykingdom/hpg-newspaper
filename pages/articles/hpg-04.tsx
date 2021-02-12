import type { GetStaticProps } from "next";
import Grid from "../../components/Grid";
import Article from "../../components/Article";
import Heading from "../../components/Heading";
import HpgLayout from "../../components/HpgLayout";
import type { StatisticItem } from "../../components/HpgLayout";
import getArticleNumbers from "../../utils/getArticleNumbers";

const articles = [
  {
    variant: "neon",
    subtitle: "04.02.2077",
    content: `
      ## Good morning, Twitch City!

      Прошло всего три дня ивента, а некоторые участники уже почти исчерпали свой лимит по времени...

      Какие вопросы стоят наиболее остро на повестке дня?
      Многоходовочки ветеранов ХПГ, загадки Бьёрна и многое другое в сегодняшнем выпуске!
    `,
  },
  {
    color: "blue",
    title: "Пройти любой ценой",
    subtitle: "Победитель ХПГ",
    image: "/images/04/projti-lyboy-tsenoy.jpg",
    imageHeight: 380,
    content: `
      День для **BrowJey** начался с легкой мошны по поводу прохождения **Garden City**, ибо после основных уровней открылись новые. **Бьёрн** и **Мэл** подтвердили, что игра все-таки пройдена, хотя на миг и проснулся **Силян**, готовый пройти и дополнительные уровни. Следующей выпала долгая игра **Monster Hunter: World**.

      Нежелание **Брови** играть в нее было сильным, также как и нежелание терять стрик прохождений без дропов. Последней надеждой были колеса, но и тут Фортуна не улыбнулась: случайные встречи принесли потерю аж 4 очков влияния. После мозгового штурма, дело в свои руки взял Чиллян и совершил **«Бровянский гамбит»**.

      Со словами: **«Поебать на игро-часы»**, он решает проходить **Monster Hunter: World**.

      ---

      Однако **Бровян** в этот день не только превозмогал, но и нашел способ помешать прогрессу других стримеров. Для этого он вероломно **ворвался** в голосовой канал **Melharucos** и начал задавать вопросы по своей игре.

      Мэл был вынужден свернуть игру, не осознавая, что проглотил наживку.
      Когда **главарь Таксистов** вернулся к прохождению **Grapple**, он обнаружил, что игра сломалась и прогресс откатился назад. **«Ну охуеть теперь!»** - прокомментировал ситуацию **Мэл**.

      Что это было: непреднамеренное вмешательство или хитрый план **коварного Тильтяна**?
    `,
  },
  {
    color: "yellow",
    title: "Вторая волна АУЧИ-2020",
    subtitle: "Медицина",
    image: "/images/04/vtoraja-volna.jpg",
    imageHeight: 247,
    content: `
      **Lasqa** устроил целое шоу прыжков пиксельных человечков по платформам под **Drum & BASS**.
      При этом он скандировал странные лозунги **«СЗО СЗОС»**, возможно, это симптомы уже известного нам вируса **АУЧИ-2020**.

      ---

      **Мэл** уже сталкивался с этой напастью, издавая нечленораздельные звуки **«А У ЧИ»**, которые для зараженных явно имеют скрытый смысл.

      ---

      Несмотря на то, что игра не являлась головоломкой, **лидеру Гринписовцев**
      всё же потребовалось прибегать к различным хитростям для поднятия боевого духа.
      После рейв-долбёжки в ход пошло Аншлаг-Радио, а после игры ему пришлось применить секретный приём **«Ёбнем»**.

      ---

      В этот день и **Ласкачу** пришлось мошнить, поскольку он не желал отпускать следующую игру **Color sudoku** всего с одним уровнем и табличкой об успешном прохождении.

      На совещании с **Факером** **Ласка** парировал, что **Бьёрн** рерольнул простейшую 2048 лишь из-за отсутствия плашки об окончании игры. **MistaFaker** настаивал на реролле и предложил **Ласкачу** ждать пробуждения стримеров завтра. Скрепя сердце **Ласка** реролльнул.

      При этом, несмотря на большой стрик без дропов, **Ласка** так и не смог сильно продвинуться вперёд из-за неудачных случайных встреч.
    `,
  },
  {
    color: "yellow",
    subtitle: "Инсайды",
    image: "/images/04/insaidy.jpg",
    imageHeight: 97,
  },
  {
    color: "blue",
    title: "Загадки Медоеда",
    subtitle: "Загадки",
    image: "/images/04/zagadki-medoeda.jpg",
    imageHeight: 248,
    content: `
      Не самым насыщенным стал третий день ивента для **Бьёрна**. Дропнув одну игру и пройдя другую, он решил развеять скуку и позвонил **Бровяну**. Лидер Медоедов загадал ему **три загадки**, и, пускай не без подсказки, Бровян смог дать на них верные ответы. Неожиданностью стала четвёртая, **незапланированная** загадка. «Что лежит в моём карманце?» - спросил **Бьёрн** смутившегося **Бровяна**, который так и не смог дать ответ на последний вопрос. Да и мы так никогда и не узнаем, что лежит в кармане **Медоеда**, ведь после этого, он сразу же оффнул... К слову, отвлечь **Бровяна** так и не получилось, ведь во время звонка Бьёрна вместо прохождения игры с ХПГ он **расслаблялся** в CS:GO.
    `,
  },
  {
    color: "yellow",
    subtitle: "О грустном",
    content: `
      Segall не подрубил
    `,
  },
  {
    color: "blue",
    title: "Дубинский: Первая кровь",
    subtitle: "Криминал",
    image: "/images/04/dubinskiy-pervaya-krovj.jpg",
    imageHeight: 418,
    content: `
      Стрим для **Мэла**, казалось бы, начинался как обычно, но, взглянув на карту, он озвучил роковую фразу: «Я иду в сторону **Сани**, но я не хочу идти в сторону **Сани**. У него и так проблемы серьёзные. &lt;...&gt; Мы свернём в сторону **Факера**, ударим ему в спину».

      ---

      Крепчайший союз с **Факером** дал первую трещину. На этом агрессия со стороны **Мэла** не прекратилась. Под предлогом того, что хочет принести извинения, **Вован Дубинский** **РАЗБУДИЛ Ивана**, а потом пообещал ещё и кинуть в него диверсанта. Но и после такой наглости он не успокоился, а решил достать **Факера** ещё и на работе, на глазах у тысяч людей...

      ---

      Под горячую руку также чуть не попал **Бровян**, который пришёл спросить о своей игре. Сначала **Мэл** всеми силами пытался мошнить, но потом смягчился и всё-таки поддержал его. Возможно, короткий выплеск агрессии лишь сыграл **Мэлу** на руку, ведь затем он успешно прошел свои игры под Радио Дачу и неплохо прокачал характеристики. Однозначно, удачный день для **Мэла**.
    `,
  },
] as const;

const statistics: StatisticItem[] = [
  {
    name: "browjey",
    time: "16:26",
    level: "3",
    points: "9",
    partner: "Ларри Бурильщик, Клоун Клёпа",
  },
  {
    name: "unclebjorn",
    time: "19:30",
    level: "2",
    points: "0",
    partner: "Отсутствует",
  },
  {
    name: "mistafaker",
    time: "16:39",
    level: "4",
    points: "4",
    partner: "Настоятель Жук",
  },
  {
    name: "lasqa",
    time: "18:07",
    level: "3",
    points: "1",
    partner: "Юрий Александрович",
  },
  {
    name: "melharucos",
    time: "14:55",
    level: "5",
    points: "10",
    partner: "Вилса-3000",
  },
  {
    name: "segall",
    time: "23:04",
    level: "3",
    points: "1",
    partner: "Энтони Логвинберг",
  },
];

type Props = {
  articleNumbers: string[];
};

const HpgNews = ({ articleNumbers }: Props) => (
  <HpgLayout
    date="04.02.2021"
    number="4"
    map="/images/04/map.png"
    statistics={statistics}
    articleNumbers={articleNumbers}
  >
    <Article {...articles[0]} />

    <Heading>Главное</Heading>
    <Article {...articles[1]} />
    <Grid container>
      <Grid item>
        <Article {...articles[2]} imageWidth={384} />
      </Grid>
      <Grid item>
        <Article {...articles[3]} imageWidth={384} />
        <Article {...articles[4]} imageWidth={384} />
        <Article {...articles[5]} imageWidth={384} />
      </Grid>
    </Grid>
    <Article {...articles[6]} />
  </HpgLayout>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { articleNumbers: await getArticleNumbers() },
});

export default HpgNews;
