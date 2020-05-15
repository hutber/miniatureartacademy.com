export const POSTSRAW = `
posts {
    edges {
      node {
        title
        id
        link
        commentCount
        date
        author {
          id
          name
        }
        categories {
          edges {
            node {
              id
              name
            }
          }
        }
        featuredImage {
          id
          mediaItemUrl
        }
        tags {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
`
export const POSTS = `query {
  ${POSTSRAW}
}
`

export const ARTISTSRAW = `
  artists: categories(where: {
    termTaxonomId: [132]
  }) {
    edges {
      node {
        children {
          edges {
            node {
              id
              name
              databaseId
            }
          }
        }
      }
    }
  }
`

export const ARTISTS = `query {
  ${ARTISTSRAW}
}
`
export const CATEOGIRESRAW = `
    categories {
    edges {
      node {
        id
        name
      }
    }
  }
`
export const CATEOGIRES = `query {
  ${CATEOGIRESRAW}
}
`

export const TAGSRAW = `
  tags {
    edges {
      node {
        id
        name
      }
    }
  }
`
export const TAGS = `query {
  ${TAGSRAW}
}`

export const QUERYALL = `query{
  ${POSTSRAW}
  ${ARTISTSRAW}
  ${CATEOGIRESRAW}
  ${TAGSRAW}
}`
