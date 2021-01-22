import React, { useEffect, useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

import Grid from '@material-ui/core/Grid'

import { QUERY_ARTISTS_CAT_TAGS, QUERYALL } from 'queries/posts'
import { getQuery } from 'lib/fetch/fetchApi'

import Spinner from 'components/shared/Loading/spinner'
import Award from '../Video'
import Nav from '../Nav'

import styles from './styles'

const getCatgeoriesFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.hash.split('#')[1])
  const removeUnderscore = item => item.replace(/_/g, ' ').toLowerCase()
  const getParams = name => {
    const startCat = urlParams.get(name)
    if (!startCat) return null
    return startCat.split(',').map(a => removeUnderscore(a))
  }
  return {
    categories: getParams('categories'),
    tags: getParams('tags'),
    artists: getParams('artists'),
  }
}

let initalPageLoad = true

export default function Search() {
  const classes = styles()
  const [currentPosts, setCurrentPosts] = useState([])
  const [urlSelected, setUrlSelected] = useState(false)
  const { posts } = useStoreState(store => ({
    posts: store.posts.posts,
  }))

  const { selectedTags, selectedCategories, searchResults, selectedArtists } = useStoreState(store => ({
    searchResults: store.posts.searchResults,
    tags: store.tags.tags,
    selectedTags: store.tags.selectedTags,
    artists: store.artists.artists,
    selectedCategories: store.categories.selectedCategories,
    selectedArtists: store.artists.selectedArtists,
  }))

  const {
    setTags,
    setCategories,
    setPosts,
    setSelectedCategories,
    stopLoading,
    setSelectedTags,
    startLoading,
    setArtists,
    setSelectedArtists,
  } = useStoreActions(actions => ({
    setTags: actions.tags.setTags,
    setCategories: actions.categories.setCategories,
    setPosts: actions.posts.setPosts,
    setArtists: actions.artists.setArtists,
    stopLoading: actions.loading.stopLoading,
    startLoading: actions.loading.startLoading,
    setSelectedTags: actions.tags.setSelectedTags,
    setSelectedArtists: actions.artists.setSelectedArtists,
    setSelectedCategories: actions.categories.setSelectedCategories,
  }))

  async function fetchData(firstLoad = false) {
    startLoading()
    let URLTags = []
    let URLCategories = []
    let URLartists = []

    if (firstLoad) {
      const { tags: getTagsFilter, categories: getCategoriesFilter, users: userFilter } = await getQuery(
        QUERY_ARTISTS_CAT_TAGS
      )
      const urlItems = getCatgeoriesFromUrl()
      URLTags =
        urlItems.tags && firstLoad
          ? getTagsFilter.filter(a => urlItems.tags.findIndex(b => b === a.name.toLowerCase()) > -1)
          : []
      URLCategories = urlItems.categories
        ? getCategoriesFilter.filter(a => urlItems.categories.findIndex(b => b === a.name.toLowerCase()) > -1)
        : []
      URLartists = urlItems.artists
        ? userFilter.filter(a => urlItems.artists.findIndex(b => b === a.name.toLowerCase()) > -1)
        : []
    }

    const tagIn = [...selectedTags, ...URLTags].map(a => a.databaseId)
    const categoriesIds = [...selectedCategories, ...URLCategories].map(a => a.databaseId)
    const artistsIds = [...selectedArtists, ...URLartists].map(a => a.databaseId)

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

    if (firstLoad && window.location.hash !== '') {
      setSelectedArtists(URLartists)
      setSelectedTags(URLTags)
      setSelectedCategories(URLCategories)
      setUrlSelected(true)
    }

    stopLoading()
  }

  useEffect(() => {
    fetchData(initalPageLoad)
    initalPageLoad = false // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (!urlSelected) {
      setUrlSelected(false)
    } else {
      fetchData()
    } // eslint-disable-next-line
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
                img={item.featuredImage ? item.featuredImage.node.mediaItemUrl : false}
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
