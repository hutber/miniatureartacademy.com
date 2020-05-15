export const POSTSRAW = `
posts(where: {categoryIn: "132"},first: 20) {
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
              link
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
              link
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
  }, first: 1000) {
    edges {
      node {
        children {
          edges {
            node {
              id
              name
              databaseId
              link
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
  categories(first: 1000) {
    edges {
      node {
        id
        name
        link
        children {
          edges {
            node {
              id
              name
              databaseId
              link
            }
          }
        }
      }
    }
  }
`
export const CATEOGIRES = `query {
  ${CATEOGIRESRAW}
}
`

export const TAGSRAW = `
  tags(first: 1000) {
    edges {
      node {
        id
        name
        link
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
