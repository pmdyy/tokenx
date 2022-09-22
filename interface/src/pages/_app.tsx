import * as React from 'react'
import 'components/DataGrid/styles.css'
import CssBaseline from '@mui/material/CssBaseline'
import Head from 'next/head'
import createEmotionCache from 'lib/createEmotionCache'
import dynamic from 'next/dynamic'
import theme from 'assets/theme'
import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import BaseLayout from 'layout/BaseLayout'
const ReduxProvider = dynamic(() => import('components/ReduxProvider'), { ssr: true })
const Web3Provider = dynamic(() => import('components/Web3Provider'), { ssr: true })

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const getLayout = (Component as any).getLayout || ((page) => <BaseLayout>{page}</BaseLayout>)
  return (
    <ReduxProvider>
      <Web3Provider>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </CacheProvider>
      </Web3Provider>
    </ReduxProvider>
  )
}
