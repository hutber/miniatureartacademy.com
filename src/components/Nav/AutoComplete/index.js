import React from 'react'
import { useStoreState } from 'easy-peasy'

import Autocomplete from 'components/shared/AutoComplete'
import { encodeHtml } from 'lib/names'
import TextField from '@material-ui/core/TextField'

const updateUrl = (type, items) => {
  const stuff = window.location.hash.length > 1 && window.location.hash.split('#')
  const url = new URL(`${window.location.href.split('#')[0]}${stuff ? stuff[1] : ''}`)
  const params = new URLSearchParams(url.search)

  if (items.length === 0) {
    params.delete(type)
    window.location.hash = decodeURIComponent(`?${params.toString()}`)
    if (window.location.href.split('=').length === 1)
      window.history.pushState('', document.title, window.location.pathname + window.location.search)
    return
  }

  params.set(type, `${items.map(a => a.name.replace(/ /g, '_').toLowerCase())}`)
  window.location.hash = decodeURIComponent(`?${params.toString()}`)
}

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
      onChange={(el, items) => {
        updateUrl(title.toLowerCase(), items)
        setSelected(items)
      }}
      renderInput={params => <TextField {...params} variant="outlined" label={title} fullWidth />}
    />
  )
}
