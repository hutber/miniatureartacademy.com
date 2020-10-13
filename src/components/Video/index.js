import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import Chip from '@material-ui/core/Chip'

import { useStoreActions, useStoreState } from 'easy-peasy'
import TransformDataClass from 'lib/apollo/apollo.class'
import Autocomplete from 'components/Nav/AutoComplete'
import { getQuery } from 'lib/fetch/fetchApi'
import { CATEOGIRES } from 'queries/posts'
import { encodeHtml } from '../../lib/names'

import styles from './styles'

export default function RecipeReviewCard({ img, name, date, cat, tags, position, link }) {
  const classes = styles()
  const [expanded, setExpanded] = React.useState(false)
  const { selectedCategories, categories: stateCat } = useStoreState(store => ({
    selectedCategories: store.categories.selectedCategories,
    categories: store.categories.categories,
  }))

  const { setSelectedCategories, stopLoading, startLoading } = useStoreActions(actions => ({
    setSelectedCategories: actions.categories.setSelectedCategories,
    stopLoading: actions.loading.stopLoading,
    startLoading: actions.loading.startLoading,
  }))

  const setCat = async el => {
    el.preventDefault()
    const allCats = stateCat.reduce((a, b) => [...a, b, ...b.children], [])
    const [current] = allCats.filter(a => a.link === el.target.href)
    const mergedCats = [current, ...selectedCategories]
    // if (current.children) delete current.children

    // startLoading()
    if (current) setSelectedCategories(mergedCats)
    // const { categories: getCategories } = await getQuery(CATEOGIRES, {
    //   variables: { categoryIn: [...categories] },
    // })
    // const { data: artistData } = new TransformDataClass({ data: getArtists }).start()
    // // setCategories(getCategories)
    // stopLoading()
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
