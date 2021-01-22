import { action } from 'easy-peasy'

const initalValues = {
  isLoading: false,
}

export default {
  ...initalValues,
  stopLoading: action(state => {
    state.isLoading = false
  }),
  startLoading: action(state => {
    state.isLoading = true
  }),
}
