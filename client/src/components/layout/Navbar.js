import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import LinkPath from './../section/LinkPath'

const useStyles = makeStyles(theme => ({
  navBar: { display: 'flex', alignItems: 'center', justifyContent: 'center' }
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar className={classes.navBar}>
          <Typography variant='h6' component='h1'>
            <LinkPath path='/' name='MERN USER AUTH' />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
