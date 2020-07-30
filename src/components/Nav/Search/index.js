import React, { useState } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { getQuery } from '../../../lib/fetch/fetchApi'
import { SEARCH_POSTS } from '../../../queries/posts'

import styles from './styles'

export default function Search() {
  const classes = styles()
  const { searchText } = useStoreState(store => ({
    searchText: store.posts.searchText,
  }))
  const { setSearchPosts, setSearchText, toggleLoading, resetSearchPosts } = useStoreActions(actions => ({
    setSearchPosts: actions.posts.setSearchPosts,
    setSearchText: actions.posts.setSearchText,
    toggleLoading: actions.loading.toggleLoading,
    resetSearchPosts: actions.posts.resetSearchPosts,
  }))

  const clearFilters = () => {
    resetSearchPosts()
  }

  const handleChange = async event => {
    const searchValue = event.target.value
    setSearchText(searchValue)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    toggleLoading()
    const variables = {
      search: searchText,
    }
    const { posts: getPosts } = await getQuery(SEARCH_POSTS, {
      variables,
    })
    toggleLoading()
    setSearchPosts(getPosts)
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Button className={classes.clearFilters} onClick={clearFilters}>
        Clear Filters
      </Button>
      <TextField placeholder="Search..." value={searchText} onChange={handleChange} />
    </form>
  )
}
