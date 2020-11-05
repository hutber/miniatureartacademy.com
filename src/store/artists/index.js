import { action } from 'easy-peasy'

const initalValues = {
  artists: [],
  selectedArtists: [],
}

export default {
  ...initalValues,
  setArtists: action((state, payload) => {
    state.artists = payload
  }),
  setSelectedArtists: action((state, payload) => {
    state.selectedArtists = payload
  }),
}
