const express = require('express')

const app = express()

//todo resource

app.get('/api/todos', (req,res) => res.json('All todos'))
app.get('/api/todos/:id', (req,res) => res.json('Specific todos'))
app.post('/api/todos', (req,res) => res.json('Create todo'))
app.put('/api/todos/:id', (req,res) => res.json('Update todo'))
app.delete('/api/todos/:id', (req,res) => res.json('Delete todo'))

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', (req,res) => res.send('Mer om mig'))
app.listen(3000, () => console.log('Started'))