import React, { FC } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "components";

import "@fontsource/inter/variable.css";
import myTheme from "styles/theme";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={myTheme}>
      <Navbar/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
