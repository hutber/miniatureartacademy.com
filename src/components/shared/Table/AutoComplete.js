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

export default function CheckboxesTags({
  onRowDataChange,
  value,
  rowData,
  columnDef: { lookup = [], title, labelTitle, labelValue, field },
}) {
  const classes = useStyles()
  const options = value ? findRemovedItems(value, lookup) : lookup
  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        options={options}
        defaultValue={value || []}
        onChange={(el, item) => {
          onRowDataChange({
            ...rowData,
            [field]: item,
          })
        }}
        disableCloseOnSelect
        getOptionLabel={option => option.title}
        style={{ width: 300 }}
        renderInput={params => <TextField {...params} variant="outlined" label={title} fullWidth />}
      />
    </div>
  )
}
