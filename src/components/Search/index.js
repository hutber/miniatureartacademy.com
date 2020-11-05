import React, { useEffect, useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

import Grid from '@material-ui/core/Grid'

import { QUERYALL } from 'queries/posts'
import { getQuery } from 'lib/fetch/fetchApi'

import Spinner from 'components/shared/Loading/spinner'
import Award from '../Video'
import Nav from '../Nav'

import styles from './styles'

export default function Search() {
  const classes = styles()
  const [currentPosts, setCurrentPosts] = useState([])
  const { posts } = useStoreState(store => ({
    posts: store.posts.posts,
  }))

  const { selectedTags, selectedCategories, searchResults, selectedArtists } = useStoreState(store => ({
    searchResults: store.posts.searchResults,
    tags: store.tags.tags,
    selectedTags: store.tags.selectedTags,
    artists: store.artists.artists,
    categories: store.categories.categories,
    selectedCategories: store.categories.selectedCategories,
    selectedArtists: store.artists.selectedArtists,
  }))

  const { setTags, setCategories, setPosts, stopLoading, startLoading, setArtists } = useStoreActions(actions => ({
    setTags: actions.tags.setTags,
    setCategories: actions.categories.setCategories,
    setPosts: actions.posts.setPosts,
    setArtists: actions.artists.setArtists,
    stopLoading: actions.loading.stopLoading,
    startLoading: actions.loading.startLoading,
  }))

  async function fetchData() {
    startLoading()
    const tagIn = selectedTags.map(a => a.databaseId)
    const categoriesIds = selectedCategories.map(a => a.databaseId)
    const artistsIds = selectedArtists.map(a => a.databaseId)

    const variables = {
      authorIn: artistsIds,
      tagIn,
      categoryIn: categoriesIds,
    }
    const { posts: getPosts, tags: getTags, categories: getCategories, users } = await getQuery(QUERYALL, { variables })

    setTags(getTags)
    setPosts(getPosts)
    setCategories(getCategories)
    setArtists(users)
    stopLoading()
  }

  useEffect(() => {
    fetchData() // eslint-disable-next-line
  }, [selectedCategories, selectedArtists, selectedTags])

  useEffect(() => {
    if (searchResults.length > 0) {
      setCurrentPosts(searchResults)
    } else {
      setCurrentPosts(posts)
    }
  }, [posts, searchResults])

  return (
    <>
      <Spinner />
      <Nav fetchData={fetchData} />
      {posts && (
        <Grid container spacing={2} className={classes.search}>
          {currentPosts.map(item => (
            <Grid item key={item.title} xl={2} lg={3} md={4} sm={6} xs={12}>
              <Award
                key={item.title}
                img={item.featuredImage ? item.featuredImage.mediaItemUrl : false}
                date={item.data}
                cat={item.categories}
                tags={item.tags}
                name={item.title}
                link={item.link}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}
