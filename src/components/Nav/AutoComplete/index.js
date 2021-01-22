import React from 'react'
import { useStoreState } from 'easy-peasy'

import Autocomplete from 'components/shared/AutoComplete'
import { encodeHtml } from 'lib/names'
import TextField from '@material-ui/core/TextField'

export default function Search({ title, options, defaultValue, setSelected, ...rest }) {
  const { isLoading } = useStoreState(store => ({
    isLoading: store.loading.isLoading,
  }))

  return (
    <Autocomplete
      {...rest}
      disabled={isLoading}
      defaultValue={defaultValue}
      options={options.map(item => {
        item.name = encodeHtml(item.name)
        return item
      })}
      title={title}
      onChange={(el, item) => {
        setSelected(item)
      }}
      renderInput={params => <TextField {...params} variant="outlined" label={title} fullWidth />}
    />
  )
}
