import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import type { AppProps } from "next/app";

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

const App = ({ Component, pageProps }: AppProps) => (
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

export default App;
