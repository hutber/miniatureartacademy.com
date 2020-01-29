import React from 'react'
import { FormattedMessage } from 'react-intl'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SendIcon from '@material-ui/icons/Send'

import Link from 'components/shared/Link'

import { adminNavTopRight } from 'config/urls'
import useStyles from './styles'

export default ({ classes: { sectionDesktop }, menuId }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Grid item xs={3} justify="flex-end" className={sectionDesktop}>
      <IconButton
        onClick={handleClick}
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        color="inherit"
      >
        <Typography variant="body2">
          <FormattedMessage id="nav.account.placeholder" />
        </Typography>
        <AccountCircle />
      </IconButton>
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        {adminNavTopRight.map(item => (
          <MenuItem key={item.url}>
            <Link href={item.url}>
              <ListItemIcon>
                <SendIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  )
}
