import React, { useEffect } from 'react'

import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import Arists from './Artists'
import Search from './Search'
import Tags from './Tags'
import Categories from './Categories'

import styles from './styles'

export default function() {
  const classes = styles()

  return (
    <Grid className={classes.navContainer} container>
      <Grid item sm={1}>
        <Arists />
      </Grid>
      <Grid item sm={4}>
        <Search />
      </Grid>
      <Grid item sm={2}>
        <Tags />
      </Grid>
      <Grid item sm={2}>
        <Categories />
      </Grid>
      <Grid item sm={1}>
        <Button>Clear Filters</Button>
      </Grid>
    </Grid>
  )
}
