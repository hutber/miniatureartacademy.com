import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
      display: 'none',
    },
  },
}))

export default function({
  onChange,
  defaultValue,
  options,
  title,
  disabled,
  ...rest
  // columnDef: { lookup = [], title, labelTitle, labelValue, field },
}) {
  const classes = useStyles()
  // const options = defaultValue ? findRemovedItems(defaultValue, lookup) : lookup
  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        // disabled={disabled}
        // disablePortal={disabled}
        // selectOnFocus
        options={options}
        filterSelectedOptions={true}
        defaultValue={defaultValue || []}
        onChange={onChange}
        groupBy={option => {
          return option.parent
        }}
        // disableCloseOnSelect
        getOptionLabel={option => option.name}
        {...rest}
      />
    </div>
  )
}
