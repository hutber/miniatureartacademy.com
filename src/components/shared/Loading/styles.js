import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(theme => ({
  loading: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    background: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
