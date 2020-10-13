import React, { useState } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import Autocomplete from 'components/shared/AutoComplete'
import { getQuery } from 'lib/fetch/fetchApi'
import { encodeHtml } from 'lib/names'
import { QUERYALL } from 'queries/posts'
import TextField from '@material-ui/core/TextField'
import TransformDataClass from '../../../lib/apollo/apollo.class'

export default function Search({ title, options, defaultValue, setSelected, ...rest }) {
  const { selectedTags, selectedCategories, selectedArtists, isLoading } = useStoreState(store => ({
    tags: store.tags.tags,
    selectedTags: store.tags.selectedTags,
    selectedCategories: store.categories.selectedCategories,
    selectedArtists: store.artists.selectedArtists,
    isLoading: store.loading.isLoading,
  }))
  const { setTags, setCategories, setPosts, toggleLoading, setArtists } = useStoreActions(actions => ({
    setTags: actions.tags.setTags,
    setCategories: actions.categories.setCategories,
    setSelectedCategories: actions.categories.setSelectedCategories,
    setPosts: actions.posts.setPosts,
    setArtists: actions.artists.setArtists,
    toggleLoading: actions.loading.toggleLoading,
  }))
  let timer
  let inputRef
  return (
    <Autocomplete
      disabled={isLoading}
      defaultValue={defaultValue}
      options={options.map(item => {
        item.name = encodeHtml(item.name)
        return item
      })}
      title={title}
      onChange={async (el, item) => {
        // clearTimeout(timer)
        setSelected(item)
        // const doThings = async () => {
        toggleLoading()
        const databaseIds = item.map(a => a.databaseId)
        const tagIn = title === 'Tags' ? databaseIds : selectedTags
        const categories = title === 'Categories' ? databaseIds : selectedCategories
        const artists = title === 'Artists' ? databaseIds : selectedArtists
        const variables = { tagIn, categoryIn: [...categories, ...artists] }
        const {
          posts: getPosts,
          tags: getTags,
          categories: getCategories,
          artists: [{ children: getArtists }],
        } = await getQuery(QUERYALL, {
          variables,
        })
        const { data: artistData } = new TransformDataClass({ data: getArtists }).start()
        const filteredCats = getPosts.reduce((acc, cur) => {
          cur.categories.forEach(cat => {
            if (!acc[cat.databaseId]) acc[cat.databaseId] = cat
          })
          return acc
        }, {})

        setSelected(item)
        setTags(getTags)
        setPosts(getPosts)
        if (title !== 'Categories') setCategories(getCategories)
        // if (title !== 'Artists') setArtists(artistData)
        toggleLoading()
        inputRef.focus()
        // }
        // timer = setTimeout(doThings, 1000)
      }}
      renderInput={params => (
        <TextField
          {...params}
          inputRef={input => {
            if (!inputRef && input) inputRef = input
          }}
          variant="outlined"
          label={title}
          fullWidth
        />
      )}
      {...rest}
    />
  )
}
