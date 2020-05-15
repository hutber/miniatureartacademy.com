export const convertArrayToObject = ({ data, name, val }) =>
  data.reduce((acc, item) => {
    const newItem = {
      [item[val]]: item[name],
    }
    return {
      ...acc,
      ...newItem,
    }
  }, {})

export const convertObjectWithNamedPropertyThenToTitleValuePairs = (data, labelTitle, labelValue, field) =>
  data.map(({ [field]: item }) => ({ title: item[labelTitle], value: item[labelValue] }))

export const convertToTitleValuePairs = (lookup, labelTitle, labelValue) =>
  lookup.map(item => ({ title: item[labelTitle], value: item[labelValue] }))

export const findRemovedItems = (newData, oldData) => {
  return newData ? oldData.filter(i => !newData.some(j => j.value === i.value)) : []
}

export const findAddedItems = (newData, oldData) =>
  newData ? newData.filter(i => !oldData.some(j => j.value === i.value)) : []
