let countLikes = document.getElementById('like-count')

let likeButton = document.getElementById('like-button')


let integer = 0;

likeButton.addEventListener('click', () => {
        integer += 1
        countLikes.innerHTML = `${integer} likes`;
    })
    //add comment
document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        handleToDo(event.target.newtask.value)
        form.reset()
    })

})

function handleToDo(todo) {

    let task = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', (event) =>
        event.target.parentNode.remove()

    )

    btn.textContent = "  X"

    task.textContent = `   ${todo}`

    task.appendChild(btn)

    document.querySelector('#tasks').appendChild(task)

}