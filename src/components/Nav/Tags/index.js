import React, { useState } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import AutoComplete from 'components/shared/AutoComplete'

export default function Search() {
  const { tags } = useStoreState(store => ({
    tags: store.tags.tags,
  }))
  const { setTags } = useStoreActions(actions => ({
    setTags: actions.tags.setTags,
  }))
  return <AutoComplete data={tags} label="Tags" placeholder="Select your Artists(s)" action={setTags} />
}
