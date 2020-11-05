import React from 'react'

import { Grid } from '@material-ui/core'

import Arists from './Artists'
import Search from './Search'
import Tags from './Tags'
import Categories from './Categories'

import styles from './styles'

export default function({ fetchData }) {
  const classes = styles()

  return (
    <Grid className={classes.navContainer} container spacing={0}>
      <Grid item xs={12} sm={3}>
        <Arists />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Categories />
      </Grid>
      <Grid item xs={12} sm={2}>
        <Tags />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Search fetchData={fetchData} />
      </Grid>
    </Grid>
  )
}
