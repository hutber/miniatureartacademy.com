import React, { useState } from 'react'

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FaceIcon from '@material-ui/icons/Face'

import { useStoreState } from 'easy-peasy'
import styles from './styles'

export default function Search() {
  const classes = styles()
  const [selected, setSelected] = useState('')
  const { artists } = useStoreState(store => ({
    artists: store.artists.artists,
  }))

  return (
    <>
      <FaceIcon />
      <Select
        value={selected}
        onChange={({ target: { value } }) => {
          setSelected(value)
        }}
      >
        {artists && artists.map(item => <MenuItem value={item.databaseId}>{item.name}</MenuItem>)}
      </Select>
    </>
  )
}
