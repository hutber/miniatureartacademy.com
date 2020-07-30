import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import { findRemovedItems } from 'utils/materialTable'

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export default function({
  onChange,
  defaultValue,
  options,
  title,
  ...rest
  // columnDef: { lookup = [], title, labelTitle, labelValue, field },
}) {
  const classes = useStyles()
  // const options = defaultValue ? findRemovedItems(defaultValue, lookup) : lookup

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        options={options}
        filterSelectedOptions
        defaultValue={defaultValue || []}
        onChange={onChange}
        groupBy={option => {
          return option.parent
        }}
        disableCloseOnSelect
        getOptionLabel={option => option.name}
        renderInput={params => <TextField {...params} variant="outlined" label={title} fullWidth />}
        {...rest}
      />
    </div>
  )
}
