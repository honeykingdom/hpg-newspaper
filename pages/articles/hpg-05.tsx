import Grid from "../../components/Grid";
import type { GetStaticProps } from "next";
import Article from "../../components/Article";
import Heading from "../../components/Heading";
import HpgLayout from "../../components/HpgLayout";
import type { StatisticItem } from "../../components/HpgLayout";
import getArticleNumbers from "../../utils/getArticleNumbers";

const articles = [
  {
    variant: "neon",
    subtitle: "05.02.2077",
    content: `
      ## Good morning, Twitch City!

      Вот и подошёл к концу четвёртый день ивента, расстояние между некоторыми участниками стало минимальным, а кто-то даже успел исчерпать отведённые 30 игро-часов.

      Сможем ли мы наблюдать первые попытки захвата чужих секторов? Невероятная поддержка новичков, гонки со временем и многое другое в сегодняшнем специальном выпуске!
    `,
  },
  {
    color: "yellow",
    subtitle: "О вечном",
    content: `
      **Segall** поднимает экзистенциальные вопросы о бренности бытия и скоротечности жизни под классическую музыку.

      Он в тильте?
    `,
  },
  {
    color: "yellow",
    subtitle: "Сплит",
    content: `
      Были и другие забавные моменты: во время стрима **Бровяна**, **Алексея**, **Чиляна**, **Аркадия**, **Антона** кто-то украл у него **FPS**, на что **Андрюха** заявил финальному боссу:

      **«Да я тебя и без кадров разъебу, я сам тот еще кадр»**.
    `,
  },
  {
    color: "blue",
    subtitle: "Наш пострел везде поспел",
    image: "/images/05/nash-postrel.jpg",
    imageHeight: 250,
    content: `
      К сожалению, новый сезон **HPG** совпал для **Факера** с бурной работой в студии аналитики.

      ---

      Однако на третий день он вернулся домой и подрубил как ни в чём не бывало, пройдя аж **3 игры** за короткий стрим и став **первым**, кто ступил на **сектор выше среднего уровня сложности**. И позабавил чат, не сумев с первой попытки пройти уровень в **детской раскраске** 0+ лет, а также получил за неё гору пойнтов, вызвав зависть **Мэла** и **Юны**.

      ---

      Следующий же день ивента его стрим был не таким спокойным. Началось всё с лёгкой мошны чата из-за прохождения **DLC** к **DOOM Eternal**, что невнимательными читателями мануала было сочтено за нелегитимные действия **Мошнатора**. После короткой борьбы с возмущениями, **Факер** отстоял право на прохождение, но вскоре об этом пожалел: **«Ты проходил блядский Дум Этернал? А именно его ебучее ДЛС? Это просто ужас нахуй, вся игра блять из узких локаций со спауном 100 волн мобов, играть невозможно ууусука»**.

      ---

      Также хотелось бы отметить удивительную вовлечённость стримера в дела ивента - даже находясь в студии аналитики, он успевает вносить правки в **HPG**.

    `,
  },
  {
    variant: "neon",
    subtitle: "Паста дня",
    content: `
      А давно **Бровян** ебашит так жестко в **HPG**? Я чет в ахуе сижу. Тактика, мораль, умение мошнить - всё на неплохом уровне. Лан, смотрю пока дальше.

      Скрин с комментом кинешь в телеграм **browjey's secret channel**, плачу **25 рублей**, этот абзац удали.
    `,
  },
  {
    color: "blue",
    subtitle: "Намёк",
    content: `
      **Журналисты** вовсю делают ставки, сколько стримеров прочитает газету в этот раз и кому она понравится. Ставки принимаются любой валютой и сабками.
    `,
  },
  {
    color: "yellow",
    subtitle: "О грустном",
    content: `
      Ласка и Мэл не подрубили
    `,
  },
  {
    color: "blue",
    title: "Большое разочарование",
    subtitle: "Дилемы",
    image: "/images/05/bolshoe-razocharovanie.jpg",
    imageHeight: 251,
    content: `
      Новый день для **Бьёрна** начался с серьезной дилеммы.

      Его игра **Brutal Legend** содержит треки популярных исполнителей, что могло бы привести к страйку за **DMCA**. Мэл предложил донатерам **UncleBjorn** погчамповую идею - докинуть ещё **4к рублей** на прокрут оставшихся колёс, чтобы их любимый стример мог перейти на **GoodGame**, пройти игру там и спокойно вернуться к себе. Нужная сумма была собрана немедля.

      Спустя 6 часов насилия над собой и врагами, **UncleBjorn** заключил: **«То, что Brutal Legend оказалась ЭТИМ, а не каким-нибудь пиздатым слэшером, — полное разочарование. Лучше б я и дальше о ней только слышал»**.

      ---

      Как помнят олды, в первом сезоне HPG была похожая по механике игра **Overlord 2**, которая оказалась для **Бурна** Ахиллесовой пятой и причиной возврата на 0-100. В этот раз он был готовым к битве с такой **«стратегией говна»**.

      ---

      Однако далее с выпавшим **Симулятором Копателя** ему также не повезло: мало того, что пришлось уныло рыть землю, так ещё и **Бровян** вновь совершил диверсию, заставив Медведя свернуть игру словами: **«Алло, Бьёрн, прими мультитрансляцию»**. После этого она отказалась разворачиваться, из-за чего **Михаилу** пришлось её перезапускать. Желаем ему более качественных игр в дальнейшем.
    `,
  },
  {
    color: "yellow",
    title: "Speedrun Strats",
    subtitle: "Хайповоз-500",
    image: "/images/05/speedrun-strats.jpg",
    imageHeight: 246,
    content: `
      Для новичка HPG **BrowJey** четвёртый день ивента прошёл под одним флагом: весь день он спидранил **Monster Hunter: World** и кайфовал от поддержки зрителей.

      **Чиллян** и **Тильтян** поочередно передавали друг другу управление после каждой пройденной миссии. Шпионы других стримеров всеми силами мешали **Бровяну**: когда ему понадобилось отойти, чат заспамили сообщениями про таймер, из-за чего стример был вынужден второпях вернуться и попасться на отвлекающего **4Header**'a.

      К вечеру **Бровян** добил последнего **босса с клавиатурой** и мышкой после **11 часов** игры на **геймпаде**, причём занял **4-е место по спидрану** игры в мире.

      ---

      Также у **Брови** появились мысли об атаке на **Мала**: его настораживает слишком большое количество влияния у **лидера Таксистов** и заманчивые предметы в инвентаре.
      Стоит отметить наплыв большого потока подарочных сабов для **Чильтяна** (хайповоз-500).
      **Бровян** настолько не ожидал ТАКОЙ поддержки, что абсолютно искренне расчувствовался. От этого его начали поддерживать еще сильнее. К слову, среди поддержавших отметился и другой участник ивента **Melharucos**. Возможно, именно эта всеобщая поддержка и помогает ему оставаться в лидерах.
    `,
  },
  {
    color: "yellow",
    title: "BrowJey: через тернии к звёздам",
    subtitle: "Специальный выпуск",
    content: `
      Герой нашего **первого специального выпуска** об участниках HPG 3 - новичок ивента **Бровян**, также известный в рамках ивента как **глава Чильтянов**. Благодаря своему невероятному рвению на старте ивента, продуманным тактикам прохождения и резкому отрыву от остальных стримеров **Бровян** сразу же полюбился зрителям HPG.

      ---

      **«Та аудитория, которая у меня появилась на ХПГ, она максимально лояльна ко мне, что меня очень удивляет. Я-то ожидал наплыва токсиков, всяких таких людей, а в итоге - нет, я кайфую сижу»**.

      ---

      Подобное отношение зрителей легко объяснимо, ведь **Бровян** заряжает их своим настроением:
      **«Я пока супер кайфую с ХПГ, потому что даже не игры, а вся движуха, которая происходит вокруг - это очень круто, мне пиздец нравится. &lt;...&gt; Я, если не играю в ХПГ, то сижу в дискорде и каждый канал по очереди читаю, смотрю все эти новости, пасты... Мне нравится движуха вокруг. &lt;...&gt; ХПГ - лучший ивент, в котором я участвовал на Твиче, одназначно»**.

      ---

      Второй причиной его успеха можно назвать внушительный опыт **Бровяна**, ведь он, начиная с **2012** года, проходил сложные ретро-игры на спор на ретро-игровом круглосуточном канале, за что получил звание **Бога Хардкора**. На какое-то время **Брови** отказался от стриминговой карьеры в пользу работы в геймдеве. Позже Гитман и Нюк позвали его в **ТРГГ**, где он проходил не только сложные игры, но и практически неиграбельные.

      ---

      За последнее время **Бровян** сильно вырос и как стример, и как личность. Мы могли наблюдать это и на последней РГГ-хате, где по итогам голосования за лучшего стримера он занял первое место, чему был приятно удивлён.

      ---

      Мы со зрителями желаем **господину Бровяну** успехов на HPG и в его стримерской деятельности. С удовольствием будем наблюдать за каждым его шагом.
    `,
  },
] as const;

const statistics: StatisticItem[] = [
  {
    name: "browjey",
    time: "23:40",
    level: "3",
    points: "8",
    partner: "Ларри Бурильщик, Клоун Клёпа, Тайлер",
  },
  {
    name: "unclebjorn",
    time: "24:04",
    level: "3",
    points: "0",
    partner: "Отсутствует",
  },
  {
    name: "mistafaker",
    time: "16:39",
    level: "4",
    points: "8",
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
    time: "15:17",
    level: "5",
    points: "10",
    partner: "Вилса-3000",
  },
  {
    name: "segall",
    time: "29:52",
    level: "4",
    points: "1",
    partner: "Отсутствует",
  },
];

type Props = {
  articleNumbers: string[];
};

const HpgNews = ({ articleNumbers }: Props) => (
  <HpgLayout
    date="05.02.2021"
    number="5"
    map="/images/05/map.png"
    statistics={statistics}
    articleNumbers={articleNumbers}
  >
    <Article {...articles[0]} />

    <Heading>Главное</Heading>
    <Grid container>
      <Grid item>
        <Article {...articles[1]} imageWidth={384} />
        <Article {...articles[2]} imageWidth={384} />
        <Article {...articles[3]} imageWidth={384} />
        <Article {...articles[4]} imageWidth={384} />
        <Article {...articles[5]} imageWidth={384} />
        <Article {...articles[6]} imageWidth={384} />
      </Grid>
      <Grid item>
        <Article {...articles[7]} imageWidth={384} />
        <Article {...articles[8]} imageWidth={384} />
      </Grid>
    </Grid>

    <Heading>Спецвыпуск</Heading>
    <Article {...articles[9]} />
  </HpgLayout>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { articleNumbers: await getArticleNumbers() },
});

export default HpgNews;
