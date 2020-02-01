import { thunk, action } from 'easy-peasy'

const initalValues = {
  state: false,
}

export default {
  ...initalValues,
  toggleLoading: action(state => {
    state.state = !state.state
  }),
  stopLoading: action(state => {
    state.state = false
  }),
  startLoading: action(state => {
    state.state = true
  }),
}
