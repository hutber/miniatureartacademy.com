export const POSTS = `query {
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
    categories {
    edges {
      node {
        id
        name
      }
    }
  }
  tags {
    edges {
      node {
        id
        name
      }
    }
  }
}`
