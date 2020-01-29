import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(theme => ({
  adminNav: {
    '&.MuiList-root ': {
      width: '100%',
      overflow: 'hidden',
      '& a': {
        float: 'left',
      },
    },
  },
}))
