import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { adminNavItems } from 'config/urls'
import Link from '../../shared/Link'
import useStyles from './styles'

export default function SimpleTabs({ path }) {
  const classes = useStyles()
  return (
    <List dense disablePadding className={classes.adminNav}>
      {adminNavItems.map(({ name, url }, index) => (
        <Link href={url} key={`${name}${index}`}>
          <ListItem button selected={path.toLowerCase() === url.toLowerCase()}>
            <ListItemText primary={name} />
          </ListItem>
        </Link>
      ))}
    </List>
  )
}
