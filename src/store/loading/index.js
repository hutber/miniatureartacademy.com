import { action } from 'easy-peasy'

const initalValues = {
  isLoading: false,
  initalLoadHasFinished: false,
}

export default {
  ...initalValues,
  stopLoading: action(state => {
    state.isLoading = false
  }),
  startLoading: action(state => {
    state.isLoading = true
  }),
  changeInitalLoadingState: action(state => {
    state.initalLoadHasFinished = true
  }),
}
