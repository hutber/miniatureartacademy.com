import React from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import { encodeHtml } from 'lib/names'
import { getQuery } from 'lib/fetch/fetchApi'
import { QUERYALL, CATEOGIRES } from 'queries/posts'
import TransformDataClass from 'lib/apollo/apollo.class'
import Autocomplete from '../AutoComplete'

export default function Search() {
  const { selectedTags, selectedCategories, selectedArtists, categories, isLoading } = useStoreState(store => ({
    categories: store.categories.categories,
    selectedCategories: store.categories.selectedCategories,
    tags: store.tags.tags,
    selectedTags: store.tags.selectedTags,
    selectedArtists: store.artists.selectedArtists,
    isLoading: store.loading.isLoading,
  }))

  const {
    setTags,
    setCategories,
    setPosts,
    stopLoading,
    startLoading,
    setArtists,
    setSelectedCategories,
  } = useStoreActions(actions => ({
    setTags: actions.tags.setTags,
    setCategories: actions.categories.setCategories,
    setPosts: actions.posts.setPosts,
    setSelectedCategories: actions.categories.setSelectedCategories,
    setArtists: actions.artists.setArtists,
    stopLoading: actions.loading.stopLoading,
    startLoading: actions.loading.startLoading,
  }))

  const flattenData = data => {
    return data.reduce((acc, cur) => {
      if (cur.children && cur.children.length === 0) return acc
      cur.children.forEach(childItem => {
        acc.push({
          ...childItem,
          parent: cur.name,
        })
      })
      acc.push(cur)
      return acc
    }, [])
  }
  const renderedCategories = flattenData(categories)
    .filter(item => item.parent)
    .sort((a, b) => a - b)
    .map(item => {
      item.name = encodeHtml(item.name)
      return item
    })

  return (
    <Autocomplete
      value={selectedCategories}
      setSelected={setSelectedCategories}
      options={renderedCategories}
      // disabled={isLoading}
      title="Categories"
      filterOptions={(allOptions, { inputValue }) => {
        return allOptions.filter(
          item => selectedCategories.findIndex(selectedItem => selectedItem.databaseId === item.databaseId) === -1
        )
        // return unselectedOptions.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()))
      }}
      // onChange={async (el, item) => {
      //     startLoading()
      //   const { categories: getCategories } = await getQuery(CATEOGIRES, {
      //     variables: { categoryIn: [...categories] },
      //   })
      //   const { data: artistData } = new TransformDataClass({ data: getArtists }).start()
      //   const filteredCats = getPosts.reduce((acc, cur) => {
      //     cur.categories.forEach(cat => {
      //       if (!acc[cat.databaseId]) acc[cat.databaseId] = cat
      //     })
      //     return acc
      //   }, {})
      //     setSelectedCategories(item)
      //     // setCategories(getCategories)
      //     stopLoading()
      // }}
    />
  )
}
