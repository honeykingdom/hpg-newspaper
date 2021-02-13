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
    subtitle: "13.02.2077",
    content: `
      ## Good morning, Twitch City!

      А вот и первые конфликты! Ходите по улицам аккуратнее, ведь полиция по этому поводу не сделает ни хрена!

      Смогут ли вернуться в игру аутсайдеры? Сохранят ли лидеры преимущество? Из-за чего обострился конфликт между «Гринпис» и Медоедами? Всё это и многое другое в сегодняшнем выпуске.
    `,
  },
  {
    color: "yellow",
    title: "Патрэго наносит ответный удар",
    subtitle: "Вести с полей",
    image: "/images/10/patrego.jpg",
    imageHeight: 399,
    content: `
      Как могли заметить зрители **HPG**, карта разделилась на две половины: с одной стороны конфликтуют между собой группировки, связанные с животными — **Медоеды**, **Макацки** и **«Гринпис»**, эту часть карты уже прозвали **«Каменные джунгли»**, а с другой стороны делят территорию **Чильтяны**, **Таксисты** и **Мошнаторы**, пока что отложившие войну между собой.

      ---

      На данный момент мы можем наблюдать эскалацию конфликта в **«Каменных джунглях»**. Каждый участник считает себя не агрессором, а жертвой вероломного нападения. После приближения лидера **Макацки** к территориям мёдоедов их глава **UncleBjorn** сначала высказал первое и последнее предупреждение **Сегалу**, а после наступления **Гринписовцев** вовсе выбрал тактику **«Лучшая защита — это нападение»**. И если **Сегал** решил развернуться в сторону адских секторов, то **Ласкач** стал очевидным противником **Бьёрна**.

      ---

      Уже на следующий день он захватил разведанный **Лаской** сектор, чем спровоцировал **Главу «Гринписа»**: **«Ко мне вообще не подходи, Бьёрн, к моим секторам. &lt;...&gt; Получается, я разведал сектор, а Бьёрн его захватил. &lt;...&gt; У меня жопа сгорела пиздец от этого»**. Ответом **Ласки** стал брошенный в **Бьёрна** диверсант, из-за чего **Лидер Медоедов** должен был простоять на своём секторе ещё 1 ход, теряя затем тот самый гарантированный бонус, из-за которого он вообще сунулся на чужой разведанный сектор. Этим **Ласка** не ограничился, решив зайти ещё глубже в его часть карты. Однако тут его ожидало предназначение проходить **«Ведьмак 3»** из пресета **«Путешествие по мирам»**.

      ---

      Бьерн, узнав про диверсанта, был возмущен и ошарашен: **«Я даже не понял этого. Тоже буду душить. &lt;...&gt; Бред, я на последнем месте! &lt;...&gt; Странный мув, хейтерский»**. Тут же пришли и хейтеры, которые надонатили запрещёнку, из-за чего **Медоеду** пришлось удалить вод. Подобное поведение зрителей, разумеется, всецело осуждается.

      ---

      Что же ждет **Ласкунчика**: месть **Бьерна** или снисхождение? Придут ли на помощь **Макацки**? Вмешаются ли в конфликт другие участники? Будем следить за развитием событий и держать вас в курсе в следующих выпусках!
    `,
  },
  {
    color: "red",
    title: "МАСТЕР ГИПНОЗА",
    subtitle: "FakeNews",
    content: `
      Покорив один за другим секторы легкой и средней сложности, **BrowJey** катком поехал по сложным гексам, окрашивая их в кроваво-красный цвет. Как говорится, удача улыбается сильнейшим, и потому после душного пасьянса глава **Чильтянов** поборол **Deus Ex** и **A Hat in Time**, пополнив копилку своей банды парой лояльных районов.
      Однако мозг **Силяна** был занят проблемами внешней политики — весь **Твич-сити** с благоговением наблюдал за развитием первой за сезон войны. И хотя война далека от границ владений Чильтянов, она **выгодна** для всех, кроме участников боевых действий.

      ---

      Наш корреспондент, по воле случая оказавшийся в алкомаркете у самой границы конфликта в **«Каменных джунглях»**, сообщил, что видел **«человека в белом»**, представителя чильтянов, который гипнотизировал фанатичного гринписовца, чтобы тот начал пепестрелку.

      ---

      Набравшись смелости, журналист взял у него интервью. Из беседы стало ясно, что ход с эскалацией конфликта направлен на отвлечение внимания от господина **Бровяна**. Таким образом, мы узнали об особых паранормальных способностях представителей банды **BrowJey**, которые он, наверняка, лично развивает у своих подопечных. Все ли средства хороши на войне? Чем же обернется **Великий Северный Конфликт**?
    `,
  },
  {
    color: "yellow",
    title: "Чёрная полоса",
    subtitle: "О грустном",
    image: "/images/10/chernaya-polosa.jpg",
    imageHeight: 166,
    content: `
      **«После определённого подъёма всегда идёт спад»**, — так вам скажет любой трейдер. Это же скажет теперь и **Мэл**. Длинная череда неплохих игр и случайных встреч, которая привела к хорошим позициям в гонке за трофеями, окончилась, а за ней пошли длинные душные игры и ужасные исходы встреч.

      ---

      После относительно чиллового **Алавара**, его начали душить ужастики, анимешные жрпг и платформеры, например его последняя игра **Fly'N**, которая, кстати, выпадала **Юзе** в прошлом сезоне.
      Не только игры душили стримера, во время ролла случайных встреч ему выпал один из худших вариантов — **«Разоблачения Каппамена»**, из-за чего он потерял сектор, опыт и 6 очков влияния. Кроме того, ему выпала встреча на минус 5 игро-часов и ещё на потерю 4 очков влияния. На такой минорной ноте стример уехал на 3 дня на лекции по детской психологии специально для **чата**.

      ---

      Неделю другого участника **HPG Факера** также нельзя назвать удачной. Несмотря на уверенный старт в начале ивента и серьёзный отрыв от соперников, **Ивану** катастрофически не везло с играми. Между редкими легкими играми типа раскрасок и симуляторами **Факеру** часто доставались максимально неиграбельные или нервотреплющие игры. Особым же видом мазохизма для **Факера** стали аниме-игры, коих выпало уже пять за сезон. После многочасового прохождения **Super Dragon Ball Heroes: World Mission**, от которой тошнило даже олдов из олдов, **Факеру** выпала следующая ролевая японская игра **Atelier Ryza: Ever Darkness & the Secret Hideout**, отзыв **Факера** на которую говорит сам за себя: **«Какой отзыв, я бля даже не покупал очередной анимешный кал»**.
    `,
  },
  {
    color: "yellow",
    subtitle: "Ctrl+V",
    image: "/images/10/pasta.png",
    imageHeight: 252,
  },
  {
    color: "white",
    title: "Хранитель времени",
    subtitle: "EZ",
    image: "/images/10/sanya-segall.png",
    imageHeight: 218,
    content: `
      Неожиданно для всех **Segall** подрубил стрим днём, начав его с повторения законов, свойств и правил **Твич-сити**.

      ---

      К нему сразу же наведался **Бровян**, дабы узнать сложность его будущей игры, чтобы использовать способность Time Stop **Сегала** максимально выгодно. Но так как Сане выпал шутер **Heavy Fire: Shattered Spear**, напоминающий тир из детских игровых автоматов, часы он использовать пока не собирался. Сам же **Сегал**, несмотря на несерьёзность игры, предался вполне серьёзным рассуждениям: **«Вот война в реале выглядит по-другому, потому что когда стреляешь в своих, миссия заново не начинается»**.

      ---

      Спустя полтора часа шутер был окончен, а далее выпала знаменитая игра **Max Payne**. **Segall** обрадовался, олды всплакнули, и после небольших махинаций по починке такой старой игры Саня предался ностальгии: детским воспоминаниям про компьютерный клуб, **PS1**, свою первую компьютерную игру **NFS: Most Wanted**, мечте заиметь дорогой на то время диск **Max Payne** для **PS2**. Игра проходилась «на ура», и хоть к концу игры начала отдавать духотой, но с тактикой сейвскама **Лидер Макацк** прошел её. Правда, перед концом игры к Повелителю времени опять наведывался **Брови**, дабы попросить не использовать ультимейт, чтобы тот мог допройти игру, над которой потел весь день.

      ---

      Следующей игрой выпала дилогия **LEGO Marvel's Avengers**, уже вторая для **Сегала** из этой серии. **Саня** добил эту игру спокойно и без использования имбовых часов, чтобы далее с криком **«ZA WARUDO»** использовать их на боевых гонках **Carmageddon 2: Carpocalypse Now** аж 1998 года выпуска. Было тяжело, больно, хотелось плакать, но на этот раз **Большой Ф** посоветовал реролл по причине **«говно мамонта»**.

      ---

      К счастью для **Сегала**, следом выпали **Star Wars Jedi Knight: Jedi Academy** и новый напарник **Ричард Чач**, хоть тот потом и пропал из-за случайной встречи.
    `,
  },
  {
    color: "red",
    subtitle: "Ласковский рецепт убойного замеса",
    content: `
      «5 ложечек кофе, нескафе голд обязательно, не крема, не обычный, это говно всякое, оно даже не бодрит, и 4 ложки сахара. Потом сидишь 3 часа, и чувство будто тебя в жопу поимели».

      > Редакция предупреждает об опасности подобных веществ, и не рекомендует принимать их когда либо вне зависимости от возраста.
    `,
  },
  {
    color: "white",
    title: "Не везёт в колёсах — повезёт в игре",
    subtitle: "Подкруточка",
    image: "/images/10/ne-vezet-v-kolesah.jpg",
    imageHeight: 399,
    content: `
      Нашумевший спор по поводу игры **The Itch** завершился для **Ласки** рероллом игры, который привел к привычному для зрителей **Богдана жанру**, а именно к рогалику **Killer Chambers**.
**Лидер Гринписовцев** спокойно приступил к прохождению, но из-за длительности и сложности игры принял решение использовать медитацию **Настоятеля Жука** и остановить таймер. Мало того, что прохождение было очень эмоциональным и напряженным, так еще и запомнилось тем, что выпавшая случайная встреча **«Платный вход»** заставила стримера потерять очки влияния и единственного напарника. **Ласке** повезло лишь с тем, что он уже успел активировал остановку времени.
      ---

      На смену рогалику пришёл знаменитый **The Witcher 3: Wild Hunt**, выпавший на пресете **«Путешествие по мирам»** и всё-таки настигший **Вавилова** (ранее он был замечен на сайте колеса игр во времени прохождения **The Itch**). Среди игр в колесе также были знаменитые Cyberpunk 2077, Fallout 4, Mass Effect 3 и другие, поэтому зрители даже не определились, хороший ли это ролл. **«Наверняка все будут гореть с моего прохождения»**, - предупредил зрителей Богдан, на что они ответили: **«Сильно не загоняйся, хуже Папича всё равно не пройдёшь»**.

      ---

      На следующий день **Ласка** запустил впервые появившегося на **HPG третьего Ведьмака**, но с колесами опять не везло. На этот раз случайная встреча заставила его потерять влияние, избавиться от вещей и остаться в секторе на ещё один ход. Некоторые посчитают такое событие кармой за **Диверсанта**, направленного ранее на **Лидера Медоедов**, но не стоит расстраиваться, ведь после достаточно быстрого прохождения **Ведьмака** ему выпал еще один **ААА-проект**, а именно **Mass Effect 3**. 
    `,
  },
] as const;

const statistics: StatisticItem[] = [
  {
    name: "browjey",
    time: "30:36",
    level: "7",
    points: "51",
    partner: "Клоун Клёпа, Тайлер, Пьер Медовый, Док",
  },
  {
    name: "unclebjorn",
    time: "27:50",
    level: "6",
    points: "-5",
    partner: "Лея Зонтикова",
  },
  {
    name: "mistafaker",
    time: "07:06",
    level: "6",
    points: "38",
    partner: "Детектив Дред",
  },
  {
    name: "lasqa",
    time: "10:38",
    level: "8",
    points: "28",
    partner: "Себастьян Орсен",
  },
  {
    name: "melharucos",
    time: "24:11",
    level: "8",
    points: "29",
    partner: "Юрий Александрович",
  },
  {
    name: "segall",
    time: "28:52",
    level: "7",
    points: "-3",
    partner: "Отсутствует",
  },
];

type Props = {
  articleNumbers: string[];
};

const HpgNews = ({ articleNumbers }: Props) => (
  <HpgLayout
    date="13.02.2021"
    number="10"
    map="images/10/map.png"
    statistics={statistics}
    articleNumbers={articleNumbers}
  >
    <Article {...articles[0]} />

    <Heading>Главное</Heading>
    <Article {...articles[1]} />
    <Grid container>
      <Grid item>
        <Article {...articles[2]} imageWidth={384} />
        <Article {...articles[3]} imageWidth={384} />
      </Grid>
      <Grid item>
        <Article {...articles[4]} imageWidth={384} />
        <Article {...articles[5]} imageWidth={384} />
        <Article {...articles[6]} imageWidth={384} />
      </Grid>
    </Grid>
    <Article {...articles[7]} />
  </HpgLayout>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { articleNumbers: await getArticleNumbers() },
});

export default HpgNews;
