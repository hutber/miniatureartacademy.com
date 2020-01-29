import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import AutoComplete from '../shared/AutoComplete'
import Checkbox from '../shared/Checkbox'

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }))

export default function ListDividers({ posts = [], tags = [], categories = [] }) {
  // const classes = useStyles()
  const authors = posts.map(({ author }) => ({ label: author.name, value: author.id }))
  return (
    <>
      <AutoComplete data={authors} label="Author" placeholder="Select your Author(s)" />
      <Divider />
      <Checkbox data={tags} label="Tags" />
      <Divider />
      <Checkbox data={categories} label="Categories" />
      <Divider />
      <Button>Submit</Button>
    </>
  )
}
