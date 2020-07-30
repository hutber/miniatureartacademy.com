import { thunk, action } from 'easy-peasy'

const initalValues = {
  posts: [],
  searchText: '',
  searchResults: [],
}

export default {
  ...initalValues,
  setPosts: action((state, payload) => {
    state.posts = payload
  }),
  setSearchText: action((state, payload) => {
    state.searchText = payload
  }),
  setSearchPosts: action((state, payload) => {
    state.searchResults = payload
  }),
  resetSearchPosts: action(state => {
    state.searchText = ''
    state.searchResults = []
  }),
}
