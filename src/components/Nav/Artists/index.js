import React from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import Autocomplete from '../AutoComplete'

export default function Search() {
  const { artists, selectedArtists } = useStoreState(store => ({
    artists: store.artists.artists,
    selectedArtists: store.artists.selectedArtists,
  }))
  const { setSelectedArtists } = useStoreActions(actions => ({
    setSelectedArtists: actions.artists.setSelectedArtists,
  }))
  return (
    <Autocomplete
      value={selectedArtists}
      title="Artists"
      filterOptions={(allOptions, { inputValue }) => {
        const unselectedOptions = allOptions.filter(
          item => selectedArtists.findIndex(selectedItem => selectedItem.databaseId === item.databaseId) === -1
        )
        return unselectedOptions.filter(item => {
          return item.name.toLowerCase().includes(inputValue.toLowerCase())
        })
      }}
      options={artists}
      // defaultValue={selectedArtists}
      setSelected={setSelectedArtists}
    />
  )
}
