import React, { useEffect, useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

import Grid from '@material-ui/core/Grid'

// import fetchApi from './lib/fetch/fetchApi'
// import transformDataClass from './lib/apollo/apollo.class'

import Award from './components/Award'
import Filters from './components/Filters'
import SideFilters from './components/SideFilters'

export default function Search() {
  const [loading, changeLoading] = useState(true)
  const { tags, posts, categories } = useStoreState(store => ({
    tags: store.tags.tags,
    categories: store.tags.categories,
    posts: store.posts.posts,
  }))
  const { setTags, setCategories, setPosts } = useStoreActions(actions => ({
    setTags: actions.tags.setTags,
    setCategories: actions.categories.setCategories,
    setPosts: actions.posts.setPosts,
  }))
  // const getData = {
  //   url: 'graphql',
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: {
  //     query: POSTS,
  //   },
  // }

  useEffect(() => {
    async function fetchData() {
      // const { data: queryData } = await fetchApi(getData)
      // const data = new transformDataClass(queryData).start()
      const data = {
        posts: [
          {
            title: 'el video de sofia',
            id: 'cG9zdDo2NTk=',
            link: 'http://miniatureartacademy.com/2019/11/18/el-video-de-sofia/',
            commentCount: null,
            date: '2019-11-18T20:31:27',
            author: { id: 'dXNlcjo0', name: 'banshee' },
            categories: [{ id: 'Y2F0ZWdvcnk6MTE1', name: 'Painting Academy' }],
            featuredImage: {
              id: 'YXR0YWNobWVudDo2NjE=',
              mediaItemUrl: 'http://miniatureartacademy.com/wp-content/uploads/2019/11/PA_Marc_Her_PT2.jpg',
            },
            tags: [
              { id: 'cG9zdF90YWc6MTI3', name: 'bust' },
              { id: 'cG9zdF90YWc6MTI2', name: 'female' },
              { id: 'cG9zdF90YWc6MTI5', name: 'FeR' },
              { id: 'cG9zdF90YWc6MTI1', name: 'her' },
              { id: 'cG9zdF90YWc6MTI4', name: 'masclans' },
            ],
          },
          {
            title: 'Painting Academy &#8211; Back to the Roots: Invocatio PT1',
            id: 'cG9zdDo2MzQ=',
            link: 'http://miniatureartacademy.com/2019/11/17/painting-academy-back-to-the-roots-invocatio-pt1/',
            commentCount: null,
            date: '2019-11-17T13:44:23',
            author: { id: 'dXNlcjox', name: 'root' },
            categories: [
              { id: 'Y2F0ZWdvcnk6MTE0', name: 'Back To The Roots' },
              { id: 'Y2F0ZWdvcnk6MTE1', name: 'Painting Academy' },
              { id: 'Y2F0ZWdvcnk6MTEz', name: 'Scale75' },
            ],
            featuredImage: {
              id: 'YXR0YWNobWVudDo2MzU=',
              mediaItemUrl: 'http://miniatureartacademy.com/wp-content/uploads/2019/11/PA_BTRINVOCATIO_PT1.jpg',
            },
            tags: [
              { id: 'cG9zdF90YWc6MTE5', name: '75mm' },
              { id: 'cG9zdF90YWc6MTIw', name: 'box art' },
              { id: 'cG9zdF90YWc6MTE2', name: 'Invocatio' },
            ],
          },
          {
            title: 'Painting Academy &#8211; Fyreslayer PT3',
            id: 'cG9zdDo1OTM=',
            link: 'http://miniatureartacademy.com/2019/11/14/painting-academy-fyreslayer-pt3/',
            commentCount: null,
            date: '2019-11-14T21:33:21',
            author: { id: 'dXNlcjox', name: 'root' },
            categories: [{ id: 'Y2F0ZWdvcnk6MQ==', name: 'English' }],
            featuredImage: {
              id: 'YXR0YWNobWVudDo1OTQ=',
              mediaItemUrl:
                'http://miniatureartacademy.com/wp-content/uploads/2019/11/https___i.ytimg_.com_vi_kn1MstJrI-0_maxresdefault.jpg',
            },
            tags: [],
          },
          {
            title: 'Sculpting Academy &#8211; How to: Make an Ear',
            id: 'cG9zdDo1NzA=',
            link: 'http://miniatureartacademy.com/2019/11/12/sculpting-academy-how-to-make-an-ear/',
            commentCount: null,
            date: '2019-11-12T09:04:26',
            author: { id: 'dXNlcjox', name: 'root' },
            categories: [{ id: 'Y2F0ZWdvcnk6MQ==', name: 'English' }],
            featuredImage: {
              id: 'YXR0YWNobWVudDo1NzI=',
              mediaItemUrl:
                'http://miniatureartacademy.com/wp-content/uploads/2019/11/https___i.ytimg_.com_vi_d30XEO6DLu4_maxresdefault.jpg',
            },
            tags: [],
          },
          {
            title: 'Sculpting Academy &#8211; Conversion: Sihlas Fenn becomes an Ork PT1',
            id: 'cG9zdDozOTc=',
            link:
              'http://miniatureartacademy.com/2019/11/08/sculpting-academy-conversion-sihlas-fenn-becomes-an-ork-pt1/',
            commentCount: null,
            date: '2019-11-08T23:21:46',
            author: { id: 'dXNlcjox', name: 'root' },
            categories: [{ id: 'Y2F0ZWdvcnk6MQ==', name: 'English' }],
            featuredImage: null,
            tags: [],
          },
        ],
        categories: [
          { id: 'Y2F0ZWdvcnk6MTE0', name: 'Back To The Roots' },
          { id: 'Y2F0ZWdvcnk6MQ==', name: 'English' },
          { id: 'Y2F0ZWdvcnk6MTE1', name: 'Painting Academy' },
          { id: 'Y2F0ZWdvcnk6MTEz', name: 'Scale75' },
        ],
        tags: [
          { id: 'cG9zdF90YWc6MTE5', name: '75mm' },
          { id: 'cG9zdF90YWc6MTIw', name: 'box art' },
          { id: 'cG9zdF90YWc6MTI3', name: 'bust' },
          { id: 'cG9zdF90YWc6MTI2', name: 'female' },
          { id: 'cG9zdF90YWc6MTI5', name: 'FeR' },
          { id: 'cG9zdF90YWc6MTI1', name: 'her' },
          { id: 'cG9zdF90YWc6MTE2', name: 'Invocatio' },
          { id: 'cG9zdF90YWc6MTI4', name: 'masclans' },
        ],
      }
      setTags(data.tags)
      setPosts(data.posts)
      setCategories(data.categories)
      changeLoading(false)
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
          {loading && <h1>Loading</h1>}
          {!loading && (
            <Grid container spacing={1}>
              {posts &&
                posts.map(item => (
                  <Grid item sm={4} xs={12}>
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
