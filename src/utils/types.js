export const convertInt = input => {
  return Number.isInteger(Number.parseInt(input)) && !/[a-zA-Z]/.test(input) ? Number.parseInt(input) : input
}

export const checkIntObject = input =>
  Object.entries(input).reduce((acc, [key, val]) => {
    return {
      ...acc,
      ...{ [key]: val ? convertInt(val) : val },
    }
  }, {})
