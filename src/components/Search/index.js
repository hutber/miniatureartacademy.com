import React, { useEffect, useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

import Grid from '@material-ui/core/Grid'

import { QUERYALL } from 'queries/posts'
import { getQuery } from 'lib/fetch/fetchApi'

import TransformDataClass from 'lib/apollo/apollo.class'
import Award from '../Video'
import Spinner from 'components/shared/Loading/spinner'
import Nav from '../Nav'

export default function Search() {
  const [currentPosts, setCurrentPosts] = useState([])
  const { posts } = useStoreState(store => ({
    posts: store.posts.posts,
  }))

  const { searchResults } = useStoreState(store => ({
    searchResults: store.posts.searchResults,
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
    const {
      posts: getPosts,
      tags: getTags,
      categories: getCategories,
      artists: [{ children: getArtists }],
    } = await getQuery(QUERYALL)
    const { data: artistData } = new TransformDataClass({ data: getArtists }).start()

    setTags(getTags)
    setPosts(getPosts)
    setCategories(getCategories)
    setArtists(artistData)
    stopLoading()
  }

  useEffect(() => {
    fetchData()
  }, [])

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
        <Grid container spacing={2}>
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
