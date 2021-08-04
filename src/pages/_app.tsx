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
  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side')
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles)
  //   }
  // }, [])

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Simple commerce</title>
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
