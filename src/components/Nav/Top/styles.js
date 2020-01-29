import { fade, makeStyles } from '@material-ui/core/styles'
import { drawerWidth } from '../../shared/Layout/styles'

export default makeStyles(theme => ({
  appBar: {
    color: theme.palette.primary.title,
    backgroundColor: theme.palette.background.default,
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  Toolbar: {
    height: 64,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.icon.color,
  },
  inputRoot: {
    color: 'inhert',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 520,
      '&:focus': {
        width: 700,
      },
    },
  },
  sectionDesktop: {
    display: 'none',
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
    '& p ': {
      marginRight: 5,
    },
    '& .MuiButtonBase-root': {
      borderRadius: 0,
    },
  },
}))
