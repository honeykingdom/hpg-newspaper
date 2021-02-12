import ReactGA from "react-ga";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

if (process.browser) {
  ReactGA.initialize("G-J5S7V75HYZ");
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #fafafa;
    --color-black: #010101;
    --color-yellow: #ffee08;
    --color-blue: #02d7f2;
    --color-red: #fd0130;
    --color-gray: #dbdbdb;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #101010;
    color: var(--color-gray);
    font-family: Inter, sans-serif;
  }
`;

const theme = {};

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>HPG Newspaper</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch&family=Inter:wght@500;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
