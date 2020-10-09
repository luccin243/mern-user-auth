import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  link: { color: 'white', textDecoration: 'none' }
}))

const LinkPath = ({ path, name }) => {
  const classes = useStyles()
  return <Link to={path} className={classes.link}>{name}</Link>
}

export default LinkPath
