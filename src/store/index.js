import { createStore } from 'easy-peasy'

import loading from './loading'
import posts from './posts'
import categories from './categories'
import artists from './artists'
import tags from './tags'

const store = createStore({
  loading,
  posts,
  categories,
  tags,
  artists,
})

export default store
