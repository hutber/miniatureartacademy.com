import { action, createStore } from 'easy-peasy'

import loading from './loading'
import posts from './posts'
import categories from './categories'
import tags from './tags'

const store = createStore({
  loading,
  posts,
  categories,
  tags,
})

export default store
