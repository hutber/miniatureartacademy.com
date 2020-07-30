import React from 'react'
import { useStoreState } from 'easy-peasy'

import LinearProgress from '@material-ui/core/LinearProgress'

import styles from './styles'

export default () => {
  const classes = styles()
  const loading = useStoreState(state => state.loading.state)
  return (
    <>
      {loading && (
        <div className={classes.loading}>
          <LinearProgress />
        </div>
      )}
    </>
  )
}
