import React from 'react'
import { StoreProvider } from 'easy-peasy'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from 'components/shared/themes'
import Search from './components/Search'
import easyStore from './store'

function App() {
  return (
    <StoreProvider store={easyStore}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Search />
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App
