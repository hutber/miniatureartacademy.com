import React, { useEffect, useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

import Grid from '@material-ui/core/Grid'

import { CATEOGIRES, POSTS, TAGS, ARTISTS } from '../../queries/posts'
import { getQuery } from '../../lib/fetch/fetchApi'

import Award from '../Award'
import Filters from '../Filters'
import SideFilters from '../SideFilters'

import Loading from '../shared/Loading'
import TransformDataClass, { cleanNodes } from '../../lib/apollo/apollo.class'

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
    const { posts: getPosts } = await getQuery(POSTS)
    // const { posts: getPosts } = new TransformDataClass({
    //   posts: {
    //     edges: [
    //       {
    //         node: {
    //           title: 'el video de sofia',
    //           id: 'cG9zdDo2NTk=',
    //           link: 'http://miniatureartacademy.com/2019/11/18/el-video-de-sofia/',
    //           commentCount: null,
    //           date: '2019-11-18T20:31:27',
    //           author: { id: 'dXNlcjo0', name: 'banshee' },
    //           categories: { edges: [{ node: { id: 'Y2F0ZWdvcnk6MTE1', name: 'Painting Academy' } }] },
    //           featuredImage: {
    //             id: 'YXR0YWNobWVudDo2NjE=',
    //             mediaItemUrl: 'http://miniatureartacademy.com/wp-content/uploads/2019/11/PA_Marc_Her_PT2.jpg',
    //           },
    //           tags: {
    //             edges: [
    //               { node: { id: 'cG9zdF90YWc6MTI3', name: 'bust' } },
    //               { node: { id: 'cG9zdF90YWc6MTI2', name: 'female' } },
    //               { node: { id: 'cG9zdF90YWc6MTI5', name: 'FeR' } },
    //               { node: { id: 'cG9zdF90YWc6MTI1', name: 'her' } },
    //               { node: { id: 'cG9zdF90YWc6MTI4', name: 'masclans' } },
    //             ],
    //           },
    //         },
    //       },
    //       {
    //         node: {
    //           title: 'Painting Academy &#8211; Back to the Roots: Invocatio PT1',
    //           id: 'cG9zdDo2MzQ=',
    //           link: 'http://miniatureartacademy.com/2019/11/17/painting-academy-back-to-the-roots-invocatio-pt1/',
    //           commentCount: null,
    //           date: '2019-11-17T13:44:23',
    //           author: { id: 'dXNlcjox', name: 'root' },
    //           categories: {
    //             edges: [
    //               { node: { id: 'Y2F0ZWdvcnk6MTE0', name: 'Back To The Roots' } },
    //               { node: { id: 'Y2F0ZWdvcnk6MTE1', name: 'Painting Academy' } },
    //               { node: { id: 'Y2F0ZWdvcnk6MTEz', name: 'Scale75' } },
    //             ],
    //           },
    //           featuredImage: {
    //             id: 'YXR0YWNobWVudDo2MzU=',
    //             mediaItemUrl: 'http://miniatureartacademy.com/wp-content/uploads/2019/11/PA_BTRINVOCATIO_PT1.jpg',
    //           },
    //           tags: {
    //             edges: [
    //               { node: { id: 'cG9zdF90YWc6MTE5', name: '75mm' } },
    //               { node: { id: 'cG9zdF90YWc6MTIw', name: 'box art' } },
    //               { node: { id: 'cG9zdF90YWc6MTE2', name: 'Invocatio' } },
    //             ],
    //           },
    //         },
    //       },
    //       {
    //         node: {
    //           title: 'Painting Academy &#8211; Fyreslayer PT3',
    //           id: 'cG9zdDo1OTM=',
    //           link: 'http://miniatureartacademy.com/2019/11/14/painting-academy-fyreslayer-pt3/',
    //           commentCount: null,
    //           date: '2019-11-14T21:33:21',
    //           author: { id: 'dXNlcjox', name: 'root' },
    //           categories: { edges: [{ node: { id: 'Y2F0ZWdvcnk6MQ==', name: 'English' } }] },
    //           featuredImage: {
    //             id: 'YXR0YWNobWVudDo1OTQ=',
    //             mediaItemUrl:
    //               'http://miniatureartacademy.com/wp-content/uploads/2019/11/https___i.ytimg_.com_vi_kn1MstJrI-0_maxresdefault.jpg',
    //           },
    //           tags: { edges: [] },
    //         },
    //       },
    //       {
    //         node: {
    //           title: 'Sculpting Academy &#8211; How to: Make an Ear',
    //           id: 'cG9zdDo1NzA=',
    //           link: 'http://miniatureartacademy.com/2019/11/12/sculpting-academy-how-to-make-an-ear/',
    //           commentCount: null,
    //           date: '2019-11-12T09:04:26',
    //           author: { id: 'dXNlcjox', name: 'root' },
    //           categories: { edges: [{ node: { id: 'Y2F0ZWdvcnk6MQ==', name: 'English' } }] },
    //           featuredImage: {
    //             id: 'YXR0YWNobWVudDo1NzI=',
    //             mediaItemUrl:
    //               'http://miniatureartacademy.com/wp-content/uploads/2019/11/https___i.ytimg_.com_vi_d30XEO6DLu4_maxresdefault.jpg',
    //           },
    //           tags: { edges: [] },
    //         },
    //       },
    //       {
    //         node: {
    //           title: 'Sculpting Academy &#8211; Conversion: Sihlas Fenn becomes an Ork PT1',
    //           id: 'cG9zdDozOTc=',
    //           link:
    //             'http://miniatureartacademy.com/2019/11/08/sculpting-academy-conversion-sihlas-fenn-becomes-an-ork-pt1/',
    //           commentCount: null,
    //           date: '2019-11-08T23:21:46',
    //           author: { id: 'dXNlcjox', name: 'root' },
    //           categories: { edges: [{ node: { id: 'Y2F0ZWdvcnk6MQ==', name: 'English' } }] },
    //           featuredImage: null,
    //           tags: { edges: [] },
    //         },
    //       },
    //     ],
    //   },
    // }).start()
    // const { tags: getTags } = await getQuery(TAGS)
    const { tags: getTags } = new TransformDataClass({
      tags: {
        edges: [
          { node: { id: 'cG9zdF90YWc6MTE5', name: '75mm' } },
          { node: { id: 'cG9zdF90YWc6MTIw', name: 'box art' } },
          { node: { id: 'cG9zdF90YWc6MTI3', name: 'bust' } },
          { node: { id: 'cG9zdF90YWc6MTI2', name: 'female' } },
          { node: { id: 'cG9zdF90YWc6MTI5', name: 'FeR' } },
          { node: { id: 'cG9zdF90YWc6MTI1', name: 'her' } },
          { node: { id: 'cG9zdF90YWc6MTE2', name: 'Invocatio' } },
          { node: { id: 'cG9zdF90YWc6MTI4', name: 'masclans' } },
        ],
      },
    }).start()
    const { categories: rawArtists } = await getQuery(ARTISTS)
    // const { categories: rawArtists } = new TransformDataClass({
    //   categories: {
    //     edges: [
    //       {
    //         node: {
    //           children: { edges: [{ node: { id: 'Y2F0ZWdvcnk6MTMw', name: 'Marc' + ' Masclans', databaseId: 130 } }] },
    //         },
    //       },
    //     ],
    //   },
    // }).start()
    // const { categories: getCategories } = await getQuery(CATEOGIRES)
    const { categories: getCategories } = new TransformDataClass({
      categories: {
        edges: [
          {
            node: {
              children: { edges: [{ node: { id: 'Y2F0ZWdvcnk6MTMw', name: 'Marc Masclans', databaseId: 130 } }] },
            },
          },
        ],
      },
    }).start()
    setTags(getTags)
    setPosts(getPosts)
    setCategories(getCategories)
    const [
      {
        children: { edges },
      },
    ] = rawArtists
    setArtists(cleanNodes(edges))
    toggleLoading()
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Filters />
      <Grid container spacing={1}>
        <Grid item sm={2}>
          <SideFilters />
        </Grid>
        <Grid item sm={10}>
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
