import React from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import Autocomplete from '../AutoComplete'

export default function Search() {
  const { categories, selectedCategories } = useStoreState(store => ({
    categories: store.categories.categories,
    selectedCategories: store.categories.selectedCategories,
  }))
  console.info('categories', categories)
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
  const renderedCategories = flattenData(categories)
  .filter(item => item.parent)
  .sort((a, b) => a - b)
  console.info(renderedCategories)
  return (
    <Autocomplete
      title="Categories"
      options={renderedCategories}
      defaultValue={selectedCategories}
      setSelected={setSelectedCategories}
    />
  )
}
