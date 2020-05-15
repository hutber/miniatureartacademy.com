import { convertArrayToObject, findRemovedItems, findAddedItems } from './materialTable.js'

describe('Utils | Material Table | convertArrayToObject', function() {
  const dataArray = [
    {
      name: 'Closed',
      organisersId: null,
      competitionSystemId: 1,
    },
  ]
  it('Convert Array to Object', () => {
    const expected = convertArrayToObject({ data: dataArray, name: 'name', val: 'competitionSystemId' })
    const object = {
      1: 'Closed',
    }
    expect(expected).toMatchObject(object)
  })
})

const newData = [
  { title: '40k', value: 1 },
  { title: 'Fantasy', value: 2 },
  { title: 'Space Hulk', value: 4 },
]
const oldData = [
  { title: '40k', value: 1 },
  { title: 'Fantasy', value: 2 },
  { title: 'Age of Sigma', value: 3 },
]

describe('Utils | Material Table | findRemovedItems ', function() {
  const expected = findRemovedItems(newData, oldData)
  const removedToMatch = [{ title: 'Age of Sigma', value: 3 }]

  it('should return return the removed value', function() {
    expect(expected).toMatchObject(removedToMatch)
  })

  const expectedTheSame = findRemovedItems(oldData, oldData)

  it('should return original item when we do not remove anything', function() {
    expect(expectedTheSame).toMatchObject([])
  })

  const expectedEmptyData = findRemovedItems(undefined, oldData)
  it('should return an empty array when no data supplied', function() {
    expect(expectedEmptyData).toMatchObject([])
  })
})

describe('Utils | Material Table | findAddedItems', function() {
  const expectedNewItems = findAddedItems(newData, oldData)
  const addedToMatch = [{ title: 'Space Hulk', value: 4 }]

  it('should return added value(s)', function() {
    expect(expectedNewItems).toMatchObject(addedToMatch)
  })
})
