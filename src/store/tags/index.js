import { thunk, action } from 'easy-peasy'

const initalValues = {
  tags: [],
}

export default {
  ...initalValues,
  setTags: action((state, payload) => {
    state.tags = payload
  }),
}
