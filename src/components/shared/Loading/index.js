import React, { useState } from 'react'
import { useStoreState } from 'easy-peasy'

import CircularProgress from '@material-ui/core/CircularProgress'

export default () => {
  const loading = useStoreState(state => state.loading.state)
  return <>{loading && <CircularProgress />}</>
}
