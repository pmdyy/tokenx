import * as React from 'react'
import 'components/DataGrid/styles.css'
import CssBaseline from '@mui/material/CssBaseline'
import Head from 'next/head'
import createEmotionCache from 'lib/createEmotionCache'
import dynamic from 'next/dynamic'
import store from 'state'
import theme from 'assets/theme'
import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
const Web3Provider = dynamic(() => import('components/Web3Provider'), { ssr: true })

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <Provider store={store}>
      <Web3Provider>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </Web3Provider>
    </Provider>
  )
}
