import { thunk, action } from 'easy-peasy'

const initalValues = {
  categories: [],
}

export default {
  ...initalValues,
  setCategories: action((state, payload) => {
    state.categories = payload
  }),
}
