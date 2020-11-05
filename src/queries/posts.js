export const POSTSRAW = `
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
        categories(where: {shouldOutputInFlatList: true}) {
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
          id
          mediaItemUrl
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
  posts(where: {categoryIn: $categoryIn, tagIn: $tagIn, authorIn: $authorIn}, first: 56) {
    ${POSTSRAW}
  }
}`

export const ARTISTSRAW = `
  users(where: {hasPublishedPosts: POST, nicenameNotIn: ["Baban", "root"]}) {
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
  posts(where: {search: $search}){
    ${POSTSRAW}
  }
}`

export const QUERYALL = `query ($tagIn: [ID], $categoryIn: [ID], $authorIn: [ID]) {
  ${ALLPOSTS}
  ${ARTISTSRAW}
  ${CATEOGIRESRAW}
  ${TAGSRAW}
}`
