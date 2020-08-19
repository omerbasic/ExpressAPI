window.addEventListener('load', start)

async function start(){
    const result = await fetch('/api/friends')
    const friends = await result.json()
    
    const nasaresult = await fetch('https://api.nasa.gov/planetary/apod?api_key=C36doer5eZSfOmVFy5p4sdaSNys6edZrTfaurYr6')
    const nasa = await nasaresult.json()

  

    console.log(nasa)

    addEventListeners()
    listFriends(friends)

    const p = document.querySelector('p')

    p.innerHTML = JSON.stringify(nasa)

    
    console.log(friends)
    
    
}
function listFriends(friends){
    const ul = document.querySelector('ul')
    ul.innerHTML = ''
    console.log("succ")
    for (const friend of friends){
        listFriend(friend, ul)
    }
}

function addEventListeners(){
    const button = document.querySelector('button')
    button.onclick = addFriend
    


} 

async function addFriend(){
    

    const firstName = document.getElementById('1')
    const lastName = document.getElementById('2')
    const friend = {Firstname: firstName.value, Lastname: lastName.value}
    console.log(friend)
    console.log("success")
    event.preventDefault()
    event.target
    
    start()
    
    makeRequest(friend)
}

function listFriend(friend, ul){
    const li = document.createElement('li')
    li.innerHTML = JSON.stringify(friend)
    ul.append(li)
}
async function createTodo(event){
    event.preventDefault()

    event.target
}




    

async function makeRequest(friend) {
    const url = 'http://localhost:3000/api/friends'

    const response = await fetch(url, {
        headers: { "Content-Type": "application/json" }, 
        method: 'POST',
        body: JSON.stringify(friend)
    })
    console.log(response)
    const data= await response.json()
    console.log(data)
}

