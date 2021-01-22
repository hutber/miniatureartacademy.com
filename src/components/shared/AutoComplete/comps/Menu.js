import Paper from '@material-ui/core/Paper'
import React from 'react'

export default function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  )
}
