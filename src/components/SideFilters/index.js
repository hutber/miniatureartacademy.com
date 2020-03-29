import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import {useStoreActions, useStoreState} from 'easy-peasy'
import AutoComplete from '../shared/AutoComplete'
import Checkbox from '../shared/Checkbox'

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }))

export default function ListDividers() {
  const { tags, categories, artists } = useStoreState(store => ({
    tags: store.tags.tags,
    artists: store.artists.artists,
    categories: store.categories.categories,
    loading: store.loading.state,
  }))
  const { setTags, setCategories, setArtists } = useStoreActions(actions => ({
    setTags: actions.tags.setTags,
    setCategories: actions.categories.setCategories,
    setArtists: actions.artists.setArtists,
  }))
  // const classes = useStyles()
  const authors = artists.map(({ name, databaseId }) => {
    return { name, value: databaseId }
  })
  return (
    <>
      <AutoComplete data={authors} label="Artists" placeholder="Select your Artists(s)" action={setArtists} />
      <AutoComplete data={tags} label="Tags" placeholder="Select your Artists(s)" action={setTags} />
      <AutoComplete data={categories} label="Categories" placeholder="Select your Artists(s)" action={setCategories} />
      <Button>Submit</Button>
    </>
  )
}
