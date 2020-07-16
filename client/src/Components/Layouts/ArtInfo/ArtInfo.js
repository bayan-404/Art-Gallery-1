import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import useStyles from './style'
import StarRoundedIcon from '@material-ui/icons/StarRounded'
import yellow from '@material-ui/core/colors/yellow'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'
import green from '@material-ui/core/colors/green'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import SecondHeader from '../../Common/SecondHeder/SecondHeader'

const ArtInfo = () => {
  const classes = useStyles()
  const [artUser, setArtUser] = useState(null)
  const [errorFound, setError] = useState(null)

  useEffect(() => {
    const id = window.location.pathname.slice(5, 10)
    if (artUser) {
      return
    }
    axios
      .get(`/api/art-user/${id}`)
      .then((result) => setArtUser(result.data))
      .catch((err) => console.log(err))
  }, [artUser])
  return (
    <Grid container className={classes.root} direction="column">
      <SecondHeader pageName="Details" />
      {artUser ? (
        <div>
          <div className={classes.root}>
            <img
              src={artUser[0].photo_url}
              alt={artUser[0].title}
              className={classes.img}
            />
          </div>
          <div>
            <Typography variant="h5" align="center">
              {artUser[0].title}
            </Typography>
            <Typography variant="h6" align="center">
              {artUser[0].name} (
              <StarRoundedIcon style={{ color: yellow[400] }} />{' '}
              {artUser[0].rate})
            </Typography>
          </div>
          <div
            className={classes.divs}
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-end',
              marginTop: 20,
            }}
          >
            <Typography variant="h6" align="right">
              الوصف
            </Typography>
            <Typography variant="body1" gutterBottom align="right">
              {artUser[0].description}
            </Typography>
          </div>
          <div className={classes.divs}>
            <Typography variant="body1" gutterBottom align="right">
              {artUser[0].size}
            </Typography>
            <Typography variant="h6" align="right">
              الحجم
            </Typography>
          </div>
          <div className={classes.divs}>
            <Typography variant="body1" gutterBottom align="right">
              {artUser[0].category}
            </Typography>
            <Typography variant="h6" align="right">
              الفئة
            </Typography>
          </div>
          <BottomNavigation className={classes.buttonDiv}>
            <Typography variant="h6" align="right">
              {artUser[0].price}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddShoppingCartIcon />}
            >
              أضف الى السله
            </Button>
          </BottomNavigation>
        </div>
      ) : (
        <div
          className={classes.root}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress style={{ color: green[400] }} />
        </div>
      )}
    </Grid>
  )
}

export default ArtInfo
