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
