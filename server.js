const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('Hello Wurld!'))
app.get('/about', (req,res) => res.send('Mer om mig'))
app.listen(3000, () => console.log('Started'))