import React from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import { encodeHtml } from 'lib/names'
import Autocomplete from '../AutoComplete'

export default function Search() {
  const { selectedCategories, categories } = useStoreState(store => ({
    categories: store.categories.categories,
    selectedCategories: store.categories.selectedCategories,
    isLoading: store.loading.isLoading,
  }))

  const { setSelectedCategories } = useStoreActions(actions => ({
    setSelectedCategories: actions.categories.setSelectedCategories,
  }))

  const flattenData = data => {
    return data.reduce((acc, cur) => {
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
        return allOptions
          .filter(
            item => selectedCategories.findIndex(selectedItem => selectedItem.databaseId === item.databaseId) === -1
          )
          .filter(i => i.name.toLowerCase().includes(inputValue.toLowerCase()))
      }}
    />
  )
}
