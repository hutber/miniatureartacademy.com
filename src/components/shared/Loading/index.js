import React, { useState } from 'react'
import { useStoreState } from 'easy-peasy'

import CircularProgress from '@material-ui/core/CircularProgress'

import styles from './styles'

export default () => {
  const classes = styles()
  const loading = useStoreState(state => state.loading.state)
  return (
    <>
      {loading && (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      )}
    </>
  )
}
