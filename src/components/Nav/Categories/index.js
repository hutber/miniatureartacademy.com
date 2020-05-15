import React from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import Autocomplete from 'components/shared/AutoComplete'

export default function Search() {
  const { categories, selectedCategories } = useStoreState(store => ({
    categories: store.categories.categories,
    selectedCategories: store.categories.selectedCategories,
  }))
  const { setSelectedCategories } = useStoreActions(actions => ({
    setSelectedCategories: actions.categories.setSelectedCategories,
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
  return (
    <Autocomplete
      defaultValue={selectedCategories}
      options={flattenData(categories)
        .filter(item => item.parent)
        .sort((a, b) => a - b)}
      title="Categories"
      onChange={(el, item) => {
        setSelectedCategories(item)
      }}
    />
  )
}
