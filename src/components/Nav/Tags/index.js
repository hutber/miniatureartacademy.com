import React from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import Autocomplete from 'components/shared/AutoComplete'

export default function Search() {
  const { tags, selectedTags } = useStoreState(store => ({
    tags: store.tags.tags,
    selectedTags: store.tags.selectedTags,
  }))
  const { setSelectedTags } = useStoreActions(actions => ({
    setSelectedTags: actions.tags.setSelectedTags,
  }))
  return (
    <Autocomplete
      defaultValue={selectedTags}
      options={tags}
      title="Tags"
      onChange={(el, item) => {
        setSelectedTags(item)
      }}
    />
  )
}
