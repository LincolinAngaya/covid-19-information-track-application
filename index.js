//declare variables
let
let countLikes = document.getElementById('like-count')

let likeButton = document.getElementById('like-button')


let integer = 0;

likeButton.addEventListener('click', () => {
        integer += 1
        countLikes.innerHTML = `${integer} likes`;
    })
    //add comment
document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('#comment_form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        handlePost(event.target['comment_input'].value)
        form.reset()
    })

})

function handlePost(post) {

    let postt = document.createElement('comment_review')
    let btn = document.createElement('buton')
    btn.addEventListener('click', (event) =>
        event.target.parentNode.remove()

    )

    postt.textContent = `   ${post}`

    document.querySelector('#comments_list').appendChild(postt)

}