export const POSTS =  `query {
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
}
`

export const ARTISTS = `query {
  categories(where: {
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
}
`
export const CATEOGIRES = `query {
    categories {
    edges {
      node {
        id
        name
      }
    }
  }
}
`

export const TAGS = `query {
  tags {
    edges {
      node {
        id
        name
      }
    }
  }
}`
