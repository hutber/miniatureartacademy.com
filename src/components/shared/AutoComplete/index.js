import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { useTheme } from '@material-ui/core/styles'
import NoSsr from '@material-ui/core/NoSsr'

import useStyles from './styles'
import NoOptionsMessage from './comps/NoOptionsMessage'
import Control from './comps/Control'
import Option from './comps/Option'
import Placeholder from './comps/Placeholder'
import SingleValue from './comps/SingleValue'
import ValueContainer from './comps/ValueContainer'
import MultiValue from './comps/MultiValue'
import Menu from './comps/Menu'

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
}

export default function AutoComplete({ data, label = 'Select', placeholder = 'Select Me' }) {
  const classes = useStyles()
  const theme = useTheme()
  const [multi, setMulti] = React.useState(null)

  const handleChangeMulti = value => {
    setMulti(value)
  }

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  }

  return (
    <div className={classes.root}>
      <NoSsr>
        <Select
          classes={classes}
          styles={selectStyles}
          inputId="react-select-multiple"
          TextFieldProps={{
            label,
            InputLabelProps: {
              htmlFor: 'react-select-multiple',
              shrink: true,
            },
          }}
          placeholder={placeholder}
          options={data}
          components={components}
          value={multi}
          onChange={handleChangeMulti}
          isMulti
        />
      </NoSsr>
    </div>
  )
}

Menu.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.element.isRequired,
  /**
   * Props to be passed to the menu wrapper.
   */
  innerProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired,
}
