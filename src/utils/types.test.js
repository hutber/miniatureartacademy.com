import { checkIntObject } from './types'

describe('Utils | Types | checkIntObject', () => {
  const testData = {
    name: 'Mr Jamie Hutber',
    address: 'Flat 19, Butterfly Court',
    address2: 'Bathurst Square',
    city: 'London',
    country: 'United Kingdom',
    numbers: 1,
    postCode: 'N15 4FA',
    competitionSystemId: '1',
    jamie: null,
  }
  const expected = checkIntObject(testData)
  const toMatch = {
    name: 'Mr Jamie Hutber',
    address: 'Flat 19, Butterfly Court',
    address2: 'Bathurst Square',
    city: 'London',
    numbers: 1,
    country: 'United Kingdom',
    postCode: 'N15 4FA',
    competitionSystemId: 1,
    jamie: null,
  }

  it('has changed the object', () => {
    expect(testData).not.toBe(toMatch)
  })
  it('return an object with values', () => {
    expect(Object.keys(expected)).toHaveLength(9)
  })
  it('converts string int to Number', () => {
    expect(expected.competitionSystemId).toEqual(expect.any(Number))
  })
})
