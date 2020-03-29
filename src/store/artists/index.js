import { thunk, action } from 'easy-peasy'

const initalValues = {
  artists: [],
}

export default {
  ...initalValues,
  setArtists: action((state, payload) => {
    state.artists = payload
  }),
}
