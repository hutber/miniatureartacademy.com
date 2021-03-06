import React from 'react'
import { useStoreState } from 'easy-peasy'

import CircularProgress from '@material-ui/core/CircularProgress'
import Backdrop from '@material-ui/core/Backdrop'

import styles from './styles'

export default () => {
  const classes = styles()
  const isLoading = useStoreState(state => state.loading.isLoading)
  return (
    <>
      {isLoading && (
        <>
          <Backdrop className={classes.backdrop} open={isLoading}>
            <CircularProgress />
          </Backdrop>
        </>
      )}
    </>
  )
}
