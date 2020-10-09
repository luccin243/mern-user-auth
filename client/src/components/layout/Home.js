import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import Welcome from '../../assets/welcome.svg'
import LinkPath from './../section/LinkPath'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  btnSection: { display: 'flex', alignItems: 'center', margin: 20 },
  btn: { margin: 5 },
}))

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img src={Welcome} alt='Luccin Dev' style={{ width: 240 }} />
        <Typography
          variant='h4'
          component='h1'
          style={{ fontFamily: 'monospace', textAlign: 'center' }}
        >
          Welcome to my App
        </Typography>
        <Typography
          variant='subtitle1'
          style={{ fontFamily: 'roboto', margin: 5, textAlign: 'center' }}
        >
          A simple user authentification buit with MERN by Luccin Masirika
        </Typography>
        <div className={classes.btnSection}>
          <Button variant='contained' color='primary' className={classes.btn}>
            <LinkPath path='/login' name='Login' />
          </Button>
          <Button variant='contained' color='secondary' className={classes.btn}>
            <LinkPath path='/register' name='Sign up' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
