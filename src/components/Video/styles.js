import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

export default makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cat: {
    background: '#d94810',
    color: '#FFF',
    borderRadius: 0,
    margin: 4,
    padding: '4px 3px',
  },
  link: {},
  tag: {
    background: '#929292',
    color: '#000',
    borderRadius: 7,
    margin: 4,
    padding: '4px 3px',
  },
  content: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  header: {
    '& img': {
      width: '100%',
    },
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '',
      right: 0,
      background: '#FFF',
      top: 0,
      width: 15,
    },
    '& span': {
      width: 1000,
      fontSize: 16,
    },
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  paper: {
    height: '100%',
    overflow: 'hidden',
  },
}))
