import { thunk, action } from 'easy-peasy'

const initalValues = {
  posts: [],
}

export default {
  ...initalValues,
  setPosts: action((state, payload) => {
    state.posts = payload
  }),
}
