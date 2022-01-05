import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import { theme } from 'styles/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { QueryClientProvider, QueryClient } from 'react-query'

const client = new QueryClient()

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Mui-Boilerplate</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <meta name="theme-color" content="#06092B" />
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
        <CssBaseline />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
export default App
