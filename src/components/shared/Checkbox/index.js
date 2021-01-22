import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import {useStoreActions, useStoreState} from 'easy-peasy'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}))

export default function CheckboxesGroup({ data, label = 'Checkbox' }) {
  const { tags, posts, categories } = useStoreState(store => ({
    tags: store.tags.tags,
    categories: store.tags.categories,
    posts: store.posts.posts,
  }))
  const { setTags, setCategories, setPosts } = useStoreActions(actions => ({
    setTags: actions.tags.setTags,
    setCategories: actions.categories.setCategories,
    setPosts: actions.posts.setPosts,
  }))
  const classes = useStyles()
  const checkBoxItems = data.map(item => ({ ...item, checked: false }))
  const [state, setState] = React.useState(checkBoxItems)

  const handleChange = id => event => {
    const newData = state.map(item => {
      if (item.id === id) {
        item.checked = !item.checked
      }
      return item
    })
    setState(newData)
  }

  useEffect(() => {
    setState(checkBoxItems)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{label}</FormLabel>
        <FormGroup>
          {state.map(({ name, id, checked }) => (
            <FormControlLabel
              key={id}
              control={<Checkbox checked={checked} onChange={handleChange(id)} value={id} />}
              label={name}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  )
}
