const express = require('express')

//define database state
let idIndex = 100
const todos = [{
    id: 0,
    title: 'Rasta Hunden',
    date: '2020-08-18'
}]

const { json } = require('body-parser')

const app = express()


//ascertain parsing of body as JSON
app.use(express.json())

app.use(express.static('client'))
/* 
app.get('/', (req, res) => {
    res.send()
})



app.get('/client/index.html', (req, res) => res.json('halp')) */

//Todo stuff

app.get('/api/todos', (req, res) => res.json(todos))
app.get('/api/todos/:id', (req, res) => res.json('Specific todo, id:' + req.params.id))

app.post('/api/todos', (req, res) =>{
    if (!req.body.title || !req.body.date){
        res.status(400).json({message: 'Data sent as body is not correct'})
    }
    else{
        
        const todo = {id: idIndex++, ...req.body }
    
        todos.push(todo)
        res.status(201).json(todo)
        
    }


})
app.put('/api/todos/:id', (req, res) => res.json('Update todo'))
app.delete('/api/todos/:id', (req, res) => res.json('Delete todo'))

//middleware 404
app.use((req, res) => {
    res.status(404).json({message: 'The resource you are requesting is not available'})
})


//start
app.listen(3000, () => console.log('3000'))