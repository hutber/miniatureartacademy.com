import { action } from 'easy-peasy'

const initalValues = {
  categories: [],
  selectedCategories: [],
}

export default {
  ...initalValues,
  setCategories: action((state, payload) => {
    state.categories = payload
  }),
  setSelectedCategories: action((state, payload) => {
    state.selectedCategories = payload
  }),
}
