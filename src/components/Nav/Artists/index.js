import React from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import FaceIcon from '@material-ui/icons/Face'

import Autocomplete from '../AutoComplete'

export default function Search() {
  const { artists, selectedArtists } = useStoreState(store => ({
    artists: store.artists.artists,
    setArtists: store.artists.setArtists,
  }))
  const { setSelectedArtists } = useStoreActions(actions => ({
    setSelectedArtists: actions.artists.setSelectedArtists,
  }))

  return (
    <Autocomplete title="Artists" options={artists} defaultValue={selectedArtists} setSelected={setSelectedArtists} />
  )
}
