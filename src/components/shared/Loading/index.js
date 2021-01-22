import React from 'react'
import { useStoreState } from 'easy-peasy'

import LinearProgress from '@material-ui/core/LinearProgress'

import styles from './styles'

export default () => {
  const classes = styles()
  const isLoading = useStoreState(state => state.loading.isLoading)
  return (
    <>
      {isLoading && (
        <div className={classes.loading}>
          <LinearProgress />
        </div>
      )}
    </>
  )
}
