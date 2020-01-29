import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import clsx from 'clsx'

import Box from '@material-ui/core/Box'
import { useTheme } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import MailIcon from '@material-ui/icons/Mail'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'

import { core, models } from 'config/nav'
import Link from 'components/shared/Link'

import useStyles from './styles'

export default function({ open, handleDrawerClose }) {
  const theme = useTheme()
  const classes = useStyles()
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <Box className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Box>
      <Divider />
      <List>
        {core.map(({ title, Icon, url }, index) => (
          <ListItem button key={`${title}${index}`}>
            <Link href={url}>
              <ListItemIcon>{Icon}</ListItemIcon>
              <ListItemText primary={title} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {models.map(({ title, Icon, url }, index) => (
          <ListItem button key={title}>
            <Link href={url}>
              <ListItemIcon>{Icon}</ListItemIcon>
              <ListItemText primary={title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
