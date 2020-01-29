import React from 'react'
import { StoreProvider } from 'easy-peasy'

import Search from './Search'
import easyStore from './store'

function App() {
  return (
    <StoreProvider store={easyStore}>
      <div className="App">
        <Search />
      </div>
    </StoreProvider>
  )
}

export default App
