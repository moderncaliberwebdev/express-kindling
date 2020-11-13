const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// Set Handlebars as view engine
app.set('view engine', 'hbs')

//redirect naked to www domain
app.use(require('express-naked-redirect')())

//redirect http to https
app.use(require('express-http-to-https').redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));

// Set public folder
app.use(express.static(path.join(__dirname, './public')))

// Data Parsing
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log('Server is listening on port ', PORT)
})