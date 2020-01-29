import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { FormattedMessage, useIntl } from 'react-intl'
import clsx from 'clsx'

import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu'
import InputBase from '@material-ui/core/InputBase'

import TopRightNav from 'components/Nav/TopRightNav'

import useStyles from './styles'

export default function({ open, handleDrawerOpen }) {
  const navSearch = useStoreState(state => state.search.navSearch)
  const changeSearch = useStoreActions(state => state.search.changeSearch)
  const intl = useIntl()
  const classes = useStyles()

  const menuId = 'primary-search-account-menu'

  const search = e => {
    if (!e.length) {
      changeSearch(null)
      return
    }
    if (e.length >= 4) changeSearch(e)
  }

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar disableGutters className={classes.Toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Grid alignItems="center" alignContent="center" container>
          <Grid item xs={9}>
            <Box className={classes.search}>
              <Box className={classes.searchIcon}>
                <SearchIcon />
              </Box>
              <InputBase
                placeholder={intl.formatMessage({ id: 'nav.search.placeholder' })}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                defaultValue={navSearch}
                onChange={({ currentTarget: { value } }) => {
                  search(value)
                }}
              />
            </Box>
          </Grid>
          <TopRightNav classes={classes} menuId={menuId} />
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
