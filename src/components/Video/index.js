import React from 'react'

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'

import { useStoreActions, useStoreState } from 'easy-peasy'
import { encodeHtml } from 'lib/names'

import styles from './styles'

export default function RecipeReviewCard({ img, name, date, cat, tags, position, link }) {
  const classes = styles()
  const { selectedCategories, categories: stateCat } = useStoreState(store => ({
    selectedCategories: store.categories.selectedCategories,
    categories: store.categories.categories,
  }))

  const { setSelectedCategories } = useStoreActions(actions => ({
    setSelectedCategories: actions.categories.setSelectedCategories,
  }))

  const setCat = async el => {
    el.preventDefault()
    const allCats = stateCat.reduce((a, b) => [...a, b, ...b.children], [])
    const [current] = allCats.filter(a => a.link === el.target.href)
    const mergedCats = [current, ...selectedCategories]

    if (current) setSelectedCategories(mergedCats)
  }

  const removeItems = ['Artists', 'Video']
  const categories = cat.filter(item => !removeItems.includes(item.name))

  return (
    <>
      <Card className={classes.card}>
        <Link href={link}>
          <CardMedia className={classes.media} image={img || 'https://placekitten.com/408/287'} title={name} />
        </Link>
        <CardContent className={classes.content}>
          <Typography variant="h6">{encodeHtml(name)}</Typography>
          <span>
            {categories &&
              categories.map(item => (
                <Link href={item.link} underline="none" key={item.link} onClick={setCat} className={classes.link}>
                  <Typography variant="body2" color="textSecondary" component="div">
                    <Chip key={item.name} label={item.name} className={classes.cat} />
                  </Typography>
                </Link>
              ))}
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
