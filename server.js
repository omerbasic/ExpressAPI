const express = require('express')

//define database state
let idIndex = 1
const friends = [{
    id: 0,
    Firstname: 'Ensar',
    Lastname: 'Omerbasic'
}]

const { json } = require('body-parser')

const app = express()


//ascertain parsing of body as JSON
app.use(express.json())

//files taken from /client
app.use(express.static('client'))
/* 
app.get('/', (req, res) => {
    res.send()
})



app.get('/client/index.html', (req, res) => res.json('halp')) */

//Todo stuff

app.get('/api/friends', (req, res) => res.json(friends))
app.get('/api/friends/:id', (req, res) => res.json('Specific friend, id:' + req.params.id))

app.post('/api/friends', (req, res) =>{
    if (!req.body.Firstname || !req.body.Lastname){
        res.status(400).json({message: 'Data sent as body is not correct'})
    }
    else{
        
        const friend = {id: idIndex++, ...req.body }
    
        friends.push(friend)
        res.status(201).json(friend)
        
    }


})
/* app.put('/api/todos/:id', (req, res) => res.json('Update todo'))
app.delete('/api/todos/:id', (req, res) => res.json('Delete todo')) */

//middleware 404
app.use((req, res) => {
    res.status(404).json({message: 'The resource you are requesting is not available'})
})


//start
app.listen(3000, () => console.log('3000'))