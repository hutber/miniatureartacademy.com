export const POSTSRAW = `
    edges {
      node {
        title
        id
        link
        commentCount
        date
        author {
          node {
            id
            name
          }
        }
        categories(first: 300, where: {hierarchical: true}) {
          edges {
            node {
              id
              name
              link
              databaseId
            }
          }
        }
        featuredImage {
          node {
            id
            mediaItemUrl
          }
        }
        tags {
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
`
export const ALLPOSTS = `
  posts(where: {categoryIn: $categoryIn, tagIn: $tagIn, authorIn: $authorIn}, first: 60) {
    ${POSTSRAW}
  }
`
export const POSTS = `query ($tagIn: [ID], $categoryIn: [ID], $authorIn: [ID]) {
  posts(first: 100, where: {categoryIn: $categoryIn, tagIn: $tagIn, authorIn: $authorIn}, first: 56) {
    ${POSTSRAW}
  }
}`

export const ARTISTSRAW = `
  users(first: 100, where: {hasPublishedPosts: POST, nicenameNotIn: ["Baban", "root"]}) {
    edges {
      node {
        id
        databaseId
        name
      }
    }
  }

`

export const ARTISTS = `query {
  ${ARTISTSRAW}
}
`
export const CATEOGIRESRAW = `
  categories(first: 1000, where:{exclude:[132]}) {
    edges {
      node {
        id
        name
        link
        databaseId
        children {
          edges {
            node {
              name
              databaseId
              link
              posts {
                nodes {
                  author {
                    node {
                      name
                    }
                  }
                }
              }
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
  tags(first: 1000, where: {hideEmpty: true}) {
    edges {
      node {
        id
        name
        link
        databaseId
      }
    }
  }
`
export const TAGS = `query {
  ${TAGSRAW}
}`

export const SEARCH_POSTS = `query($search: String){
  posts(first: 100,where: {search: $search}){
    ${POSTSRAW}
  }
}`

export const QUERY_ARTISTS_CAT_TAGS = `query {
  ${ARTISTSRAW}
  ${CATEOGIRESRAW}
  ${TAGSRAW}
}`

export const QUERYALL = `query ($tagIn: [ID], $categoryIn: [ID], $authorIn: [ID]) {
  ${ALLPOSTS}
  ${ARTISTSRAW}
  ${CATEOGIRESRAW}
  ${TAGSRAW}
}`
