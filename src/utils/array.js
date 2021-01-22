export const getUniqueArray = artists =>
  artists.map(({ nationality }) => nationality).filter((v, i, a) => a.indexOf(v) === i)
