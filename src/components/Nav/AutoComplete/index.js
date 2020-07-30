import React from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import Autocomplete from 'components/shared/AutoComplete'
import { getQuery } from 'lib/fetch/fetchApi'
import { encodeHtml } from 'lib/names'
import { POSTS, QUERYALL } from 'queries/posts'
import TransformDataClass from '../../../lib/apollo/apollo.class'

export default function Search({ title, options, defaultValue, setSelected, ...rest }) {
  const { selectedTags, selectedCategories, selectedArtists } = useStoreState(store => ({
    tags: store.tags.tags,
    selectedTags: store.tags.selectedTags,
    selectedCategories: store.categories.selectedCategories,
    selectedArtists: store.artists.selectedArtists,
  }))
  const { setTags, setCategories, setPosts, toggleLoading, setArtists } = useStoreActions(actions => ({
    setTags: actions.tags.setTags,
    setCategories: actions.categories.setCategories,
    setPosts: actions.posts.setPosts,
    setArtists: actions.artists.setArtists,
    toggleLoading: actions.loading.toggleLoading,
  }))

  return (
    <Autocomplete
      defaultValue={defaultValue}
      options={options.map(item => {
        item.name = encodeHtml(item.name)
        return item
      })}
      title={title}
      onChange={async (el, item) => {
        setSelected(item)
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
        console.info(filteredCats)
        console.info(getCategories)
        console.info(categories)
        setTags(getTags)
        setPosts(getPosts)
        setCategories(getCategories)
        setArtists(artistData)
        toggleLoading()
      }}
      {...rest}
    />
  )
}
