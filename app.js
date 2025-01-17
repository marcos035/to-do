const formAddTodo = document.querySelector('.form-add-todo')
const addTodo = document.querySelector('.todos-container')
const inputSearch = document.querySelector('.form-search input')

formAddTodo.addEventListener('submit', event =>{
    event.preventDefault()

    const inputValue = event.target.add.value.trim()
    
    if(inputValue.length){

        addTodo.innerHTML+= 
        ` <li class="list-group-item d-flex justify-content-between align-items-center">
             <span>${inputValue}</span>
             <i class="far fa-trash-alt delete"></i>
           </li>`

        }
        event.target.reset()
})

addTodo.addEventListener('click', event =>{
    const clickedElement = event.target
    const deleteItem =Array.from(clickedElement.classList).includes('delete')
    if(deleteItem){

      clickedElement.parentElement.remove()
    }
})

inputSearch.addEventListener('input',event =>{
    const inputValue= event.target.value.trim().toLowerCase()
 Array.from(addTodo.children)
  .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
  .forEach(todo=>{
      todo.classList.remove('d-flex')
      todo.classList.add( 'hidden')
    })
    
 Array.from(addTodo.children)
  .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
  .forEach(todo=>{
    todo.classList.remove('hidden')
    todo.classList.add('d-flex')
  })
})
