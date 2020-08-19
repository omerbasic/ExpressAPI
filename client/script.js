window.addEventListener('load', start)

async function start(){
    const result = await fetch('/api/todos')
    const todos = await result.json()
    console.log(todos)
}

async function createTodo(event){
    event.preventDefault()

    event.target
}