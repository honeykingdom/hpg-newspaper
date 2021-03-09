import { createGlobalStyle, ThemeProvider } from "styled-components";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

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
    <DefaultSeo {...SEO} />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export const reportWebVitals = ({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) => {
  window.gtag("event", name, {
    event_category:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
};

export default App;
