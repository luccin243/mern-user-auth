const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const users = require('./routes/api/users')

const app = express()

// BodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize())

// Passport Config
require('./config/passport')(passport)
// Routes
app.use('api/users', users)

// Process.env.port is Heroku's port
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server up and run on port ${port} !`))
