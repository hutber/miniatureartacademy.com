import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#ff6620',
      title: '#545a5f',
      description: '#939aa0',
      hover: '#303437',
      icon: {
        color: '#788188',
      },
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiAutocomplete: {
      root: {
        color: 'white',
        cursor: 'pointer',
      },
      endAdornment: {
        color: '#b0bec5',
      },
      popupIndicator: {
        color: '#b0bec5',
      },
    },
    MuiFormLabel: {
      root: {
        color: '#FFF',
      },
    },
    MuiGrid: {
      spacing: {
        xs: {
          2: {
            padding: 0,
            margin: '0 -16px 0 -16px',
          },
        },
      },
      container: {
        background: '#FFF',
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: '#d7d7d7',
      },
    },
    MuiLink: {
      root: {
        cursor: 'pointer',
      },
    },
    MuiChip: {
      root: {
        height: 'auto',
      },
    },
    MuiTypography: {
      h6: {
        fontWeight: 400,
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: 'transparent',
        '&:hover': {
          borderColor: 'transparent',
        },
      },
    },
    MuiInput: {
      input: {
        background: 'white',
        padding: '7px 10px',
        borderColor: 'transparent',
        '&:hover': {
          borderColor: 'transparent',
        },
      },
    },
  },
})

export default theme
