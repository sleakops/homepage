import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import { theme } from "@chakra-ui/pro-theme";

import "@fontsource/inter/variable.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const myTheme = extendTheme(theme, {
    colors: { ...theme.colors },
    config: {
      ...theme.config,
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
  });

  return (
    <ChakraProvider theme={myTheme}>
      <Head>
        <title>SleakOps - Deploy and Automate your Infra</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
