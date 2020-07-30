import React from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import Autocomplete from '../AutoComplete'

export default function Search() {
  const { tags, selectedTags } = useStoreState(store => ({
    tags: store.tags.tags,
    selectedTags: store.tags.selectedTags,
  }))
  const { setSelectedTags } = useStoreActions(actions => ({
    setSelectedTags: actions.tags.setSelectedTags,
  }))

  return <Autocomplete title="Tags" options={tags} defaultValue={selectedTags} setSelected={setSelectedTags} />
}
