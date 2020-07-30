import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import Chip from '@material-ui/core/Chip'

import { encodeHtml } from '../../lib/names'

import styles from './styles'

export default function RecipeReviewCard({ img, name, date, cat, tags, position, link }) {
  const classes = styles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const removeItems = ['Artists', 'Video']
  const categories = cat.filter(item => !removeItems.includes(item.name))

  return (
    <>
      <Card className={classes.card}>
        <Link href={link}>
          <CardMedia className={classes.media} image={img} title={name} />
        </Link>
        <CardContent className={classes.content}>
          <Typography variant="h6">{encodeHtml(name)}</Typography>
          <span>
            <Typography variant="body2" color="textSecondary" component="div">
              {categories &&
                categories.map(item => (
                  <Link href={item.link} underline="none" key={item.link}>
                    <Chip key={item.name} label={item.name} className={classes.cat} />
                  </Link>
                ))}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div">
              {tags &&
                tags.map(item => (
                  <Link href={item.link} underline="none" key={item.link}>
                    <Chip key={item.name} label={item.name} className={classes.tag} />
                  </Link>
                ))}
            </Typography>
          </span>
        </CardContent>
      </Card>
    </>
  )
}
