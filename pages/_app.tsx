import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/pro-theme";
import "@fontsource/inter/variable.css";

// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// }

const MyApp = ({ Component, pageProps }: AppProps) => {
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors },
    },
    theme
  );
  return (
    <ChakraProvider theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
