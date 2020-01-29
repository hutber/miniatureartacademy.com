import React from 'react'
import clsx from 'clsx'

import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'

import TopNav from 'components/Nav/Top'
import SideNav from 'components/Nav/SideNav'
import useStyles from './styles'

export default function MiniDrawer(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <TopNav open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideNav open={open} handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <Box className={classes.toolbar} />
        {props.children}
      </main>
    </Box>
  )
}
