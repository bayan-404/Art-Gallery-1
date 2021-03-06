import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import grey from '@material-ui/core/colors/grey'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: 190,
    maxHeight: 300,
    border: '1px solid',
    borderColor: grey[400],
    borderRadius: 10,
  },
})

const ArtCard = (props) => {
  const classes = useStyles()
  const { title, imageUrl, price, cardKey } = props

  return (
    <Card className={classes.root} key={cardKey}>
      <Link
        to={{ pathname: `/art/${cardKey}` }}
        style={{ textDecoration: 'none',color:'black' }}
      >
        <CardActionArea>
          <CardMedia
            align='right'
            component="img"
            alt={title}
            height="210"
            image={imageUrl}
            title={title}
          />
          <CardContent>
            <Typography
              align='right'
              gutterBottom
              variant="subtitle1"
              component="h2"
              align='right'
            >
              {title}
            </Typography>
            <Typography
              align='right'
              variant="body2"
              color="textSecondary"
              component="p"
              align='right'
            >
              {price + '$'}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default ArtCard
