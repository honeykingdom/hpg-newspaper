import { useEffect } from "react";
import ReactGA from "react-ga";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

if (process.browser) {
  ReactGA.initialize("G-J5S7V75HYZ");
}

const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #fafafa;
    --color-black: #010101;
    --color-yellow: #ffee08;
    --color-blue: #02d7f2;
    --color-red: #fd0130;
    --color-gray: #dbdbdb;

    --font-primary: Inter, sans-serif;
    --font-secondary: "Chakra Petch", sans-serif;

    --padding-mobile: 16px;
    --padding-desktop: 24px;

    --subtitle-hr-width: 48px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #101010;
    color: var(--color-gray);
    font-family: var(--font-primary);
  }
`;

const theme = {};

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.browser) {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <>
      <Head>
        <title>HPG Newspaper</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
