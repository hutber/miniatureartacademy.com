import { thunk, action } from 'easy-peasy'

const initalValues = {
  isLoading: false,
}

export default {
  ...initalValues,
  toggleLoading: action(state => {
    state.isLoading = !state.isLoading
  }),
  stopLoading: action(state => {
    state.isLoading = false
  }),
  startLoading: action(state => {
    state.isLoading = true
  }),
}
