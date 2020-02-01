import React, { useEffect, useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

import Grid from '@material-ui/core/Grid'

import { CATEOGIRES, POSTS, TAGS } from '../../queries/posts'
import { getQuery } from '../../lib/fetch/fetchApi'

import Award from '../Award'
import Filters from '../Filters'
import SideFilters from '../SideFilters'

import Loading from '../shared/Loading'

export default function Search() {
  const { tags, posts, categories, loading } = useStoreState(store => ({
    tags: store.tags.tags,
    categories: store.tags.categories,
    posts: store.posts.posts,
    loading: store.loading.state,
  }))
  const { setTags, setCategories, setPosts, toggleLoading } = useStoreActions(actions => ({
    setTags: actions.tags.setTags,
    setCategories: actions.categories.setCategories,
    setPosts: actions.posts.setPosts,
    toggleLoading: actions.loading.toggleLoading,
  }))

  useEffect(() => {
    async function fetchData() {
      toggleLoading()
      const { posts: getPosts } = await getQuery(POSTS)
      const { tags: getTags } = await getQuery(TAGS)
      const { categories: getCategories } = await getQuery(CATEOGIRES)
      setTags(getTags)
      setPosts(getPosts)
      setCategories(getCategories)
      toggleLoading()
    }
    fetchData()
  }, [])

  return (
    <>
      <Filters />
      <Grid container spacing={1}>
        <Grid item sm={2}>
          <SideFilters posts={posts} tags={tags} categories={categories} />
        </Grid>
        <Grid item sm={10}>
          <Loading />
          {!loading && (
            <Grid container spacing={1}>
              {posts &&
                posts.map(item => (
                  <Grid item key={item.title} sm={4} xs={12}>
                    <Award
                      key={item.title}
                      img={item.featuredImage ? item.featuredImage.mediaItemUrl : false}
                      date={item.data}
                      cat={item.categories}
                      tags={item.tags}
                      name={item.title}
                    />
                  </Grid>
                ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  )
}
