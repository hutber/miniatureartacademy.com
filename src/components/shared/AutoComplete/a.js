import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import Input from '@material-ui/core/Input'
import { useTheme } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import Checkbox from '@material-ui/core/Checkbox'
import ListItemText from '@material-ui/core/ListItemText'
import NoSsr from '@material-ui/core/NoSsr'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

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
      width: '100%',
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  }
  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  }
  return (
    <div className={classes.root}>
      <NoSsr>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">Artists</InputLabel>
          <Select
            classes={classes}
            styles={selectStyles}
            inputId="react-select-multiple"
            placeholder={placeholder}
            value={multi}
            onChange={handleChangeMulti}
            isMulti
            id="artists"
            multiple
            input={<Input />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
            labelId="demo-mutiple-checkbox-label"
          >
            {data.map(({ name, value }) => {
              return (
                <MenuItem key={value} value={value}>
                  <Checkbox checked={multi && multi.indexOf(value) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
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
