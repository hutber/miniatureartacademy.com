import { action } from 'easy-peasy'

const initalValues = {
  tags: [],
  selectedTags: [],
}

export default {
  ...initalValues,
  setTags: action((state, payload) => {
    state.tags = payload
  }),
  setSelectedTags: action((state, payload) => {
    state.selectedTags = payload
  }),
}
