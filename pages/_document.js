import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
        <meta property="og:title" content="SleakOps - Deploy and Automate your Infra" key="title" />
        <description>SleakOps relies on the best practices to automate all the repetitive tasks of your scalable applications. Run your apps on the Cloud without worrying about your DevOps support.</description>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}