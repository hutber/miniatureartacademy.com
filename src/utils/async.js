import { useMutation } from '../lib/apollo/apollo.serverless'

export const awaitSeverlessArray = async (data, MUTATION, key) => {
  const allPromises = await data.map(item => {
    const dataInsert = key
      ? {
          [key]: item,
        }
      : { ...item }
    return useMutation({
      mutation: MUTATION,
      variables: dataInsert,
    })
  })
  return Promise.all(allPromises)
}
