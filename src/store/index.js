import { action, createStore } from 'easy-peasy'

const store = createStore({
  posts: {
    posts: [],
    setPosts: action((state, payload) => {
      state.posts = payload
    }),
  },
  categories: {
    categories: [],
    setCategories: action((state, payload) => {
      state.categories = payload
    }),
  },
  tags: {
    tags: [],
    setTags: action((state, payload) => {
      state.tags = payload
    }),
  },
})

export default store
