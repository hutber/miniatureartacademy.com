import React from 'react'
import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Link from '@material-ui/core/Link'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Chip from '@material-ui/core/Chip'

import { useStoreState } from 'easy-peasy'
import { encodeHtml } from '../../lib/names'

const useStyles = makeStyles(theme => ({
  card: {
    height: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  header: {
    '& img': {
      width: '100%',
    },
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '',
      right: 0,
      background: '#FFF',
      top: 0,
      width: 15,
    },
    '& span': {
      width: 1000,
      fontSize: 16,
    },
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  paper: {
    height: '100%',
    overflow: 'hidden',
  },
}))

export default function RecipeReviewCard({ img, name, date, cat, tags, position, link }) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          avatar={
            position && (
              <Avatar aria-label="recipe" className={classes.avatar}>
                {position}
              </Avatar>
            )
          }
          title={encodeHtml(name)}
          subheader={date}
        />
        <Link href={link}>
          <CardMedia className={classes.media} image={img} title={name} />
        </Link>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {cat &&
              cat.map(item => (
                <Link href={item.link}>
                  <Chip key={item.name} label={item.name} />
                </Link>
              ))}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {tags && tags.map(item => <Link href={item.link}><Chip key={item.name} label={item.name} /></Link>)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}
