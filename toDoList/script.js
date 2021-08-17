const form = document.getElementById('form')
const input = document.getElementById('to-do')
const list = document.querySelector('.list')


const todos = JSON.parse(localStorage.getItem('todos'))
console.log(todos)

if (todos) {
    todos.forEach(todo => {
        addTodos(todo)
    })
}

form.addEventListener('submit', (e) => {

    e.preventDefault()
    addTodos()
})

function addTodos(todo) {

    todoText = input.value
    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const item_ = document.createElement('li')
        if (todo && todo.completed == true) {
            item_.classList.add('done')
            console.log('safd')
        }

        item_.addEventListener('dblclick', () => {
            item_.classList.toggle('done')
        })

        item_.innerText = todoText

        const clear = document.getElementById('clear')
        clear.addEventListener('click', () => {
            if (item_.classList.contains('done')) {
                item_.remove()
                updateL()

            }
        }
        )

        const empty = document.getElementById('empty')

        empty.addEventListener('click', () => {
            item_.remove()
            updateL()
        })

        list.appendChild(item_)
        input.value = ''

    }
    const save = document.getElementById('save')
    save.addEventListener('click', updateL)

}

function updateL() {
    const todos = []
    const items = document.querySelectorAll('.list li')

    if (items) {
        items.forEach((item) => {
            todos.push({ text: item.innerText, completed: item.classList.contains('done') })
        })
    }

    localStorage.setItem('todos', JSON.stringify(todos))

}