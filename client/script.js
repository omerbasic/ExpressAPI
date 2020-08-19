//Starts functionality on page reload

window.addEventListener('load', start)

//initial function, fetches information from server & NASA API

async function start(){
    const result = await fetch('/api/friends')
    const friends = await result.json()
    
    const nasaresult = await fetch('https://api.nasa.gov/planetary/apod?api_key=C36doer5eZSfOmVFy5p4sdaSNys6edZrTfaurYr6')
    const nasa = await nasaresult.json()

    addEventListeners()
    listFriends(friends)

    const p = document.querySelector('p')
    p.innerHTML = JSON.stringify(nasa)
}

//creates an instance for each friend fetched from server

function listFriends(friends){
    const ul = document.querySelector('ul')
    ul.innerHTML = ''
    for (const friend of friends){
        listFriend(friend, ul)
    }
}

// adds functionality to button

function addEventListeners(){
    const button = document.querySelector('button')
    button.onclick = addFriend
} 

//Gets value from input-fields, creates a friend-object with values, calls on functions to POST created friend & reloads page

async function addFriend(){
    const firstName = document.getElementById('1')
    const lastName = document.getElementById('2')
    const friend = {Firstname: firstName.value, Lastname: lastName.value}
    
    event.preventDefault()
    event.target
    
    start()
    makeRequest(friend)
}

//appends each friend found on server to a list

function listFriend(friend, ul){
    const li = document.createElement('li')
    li.innerHTML = JSON.stringify(friend)
    ul.append(li)
}

//POSTs created friend to server

async function makeRequest(friend) {
    const url = 'http://localhost:3000/api/friends'

    const response = await fetch(url, {
        headers: { "Content-Type": "application/json" }, 
        method: 'POST',
        body: JSON.stringify(friend)
    })
    
    const data= await response.json()
    console.log(data)
}

