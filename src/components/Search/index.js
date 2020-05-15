import React, { useEffect, useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

import Grid from '@material-ui/core/Grid'

import { QUERYALL } from '../../queries/posts'
import { getQuery } from '../../lib/fetch/fetchApi'

import Award from '../Award'
import Nav from '../Nav'

import Loading from '../shared/Loading'
import TransformDataClass from '../../lib/apollo/apollo.class'

export default function Search() {
  const { posts, loading } = useStoreState(store => ({
    posts: store.posts.posts,
    loading: store.loading.state,
  }))
  const { setTags, setCategories, setPosts, toggleLoading, setArtists } = useStoreActions(actions => ({
    setTags: actions.tags.setTags,
    setCategories: actions.categories.setCategories,
    setPosts: actions.posts.setPosts,
    setArtists: actions.artists.setArtists,
    toggleLoading: actions.loading.toggleLoading,
  }))

  async function fetchData() {
    toggleLoading()
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
    toggleLoading()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Nav />
      <Loading />
      {!loading && (
        <Grid container spacing={1}>
          {posts &&
            posts.map(item => (
              <Grid item key={item.title} md={4} sm={6} xs={12}>
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
