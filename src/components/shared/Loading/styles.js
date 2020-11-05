import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(theme => ({
  loading: {
    position: 'absolute',
    height: 10,
    width: '100%',
    left: 0,
    bottom: -10,
  },
  backdrop: {
    zIndex: 1,
  },
}))
