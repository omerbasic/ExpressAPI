window.addEventListener('load', start)

async function start(){
    const result = await fetch('/api/friends')
    const friends = await result.json()
    listFriends(friends)
    console.log(friends)
    addEventListeners()
    
}
async function listFriends(friends){
    const ul = document.querySelector('ul')

    for (const friend of friends){
        listFriend(friend, ul)
    }
}

function addEventListeners(){
    const button = document.querySelector(button)
    button.onclick = addFriend
}

async function addFriend(){
    console.log("success")
    event.preventDefault()

    event.target
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
