import React, { useMemo, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import {
  createMuiTheme,
  CssBaseline,
  responsiveFontSizes,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core'

import { apiRootQueryConfig } from 'hooks/useApiRoot'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    color: yellow;
  }
`

export const Providers: React.FC = ({ children }) => {
  const queryCache = useMemo(() => new QueryCache(), [])

  useEffect(() => {
    queryCache.prefetchQuery(apiRootQueryConfig)
  }, [queryCache])

  const muiTheme = useMemo(() => {
    const theme = createMuiTheme({
      typography: {
        fontFamily: 'Montserrat, sans-serif',
      },
    })
    return responsiveFontSizes(theme)
  }, [])

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <ThemeProvider theme={muiTheme}>
        <ReactQueryCacheProvider queryCache={queryCache}>
          {children}
        </ReactQueryCacheProvider>
      </ThemeProvider>
    </StylesProvider>
  )
}
