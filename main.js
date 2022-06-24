const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
    body.classList.add("dark");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    // js code to keep user selected mode even page refresh or file reopen
    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
});

// js code to toggle search box
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
});


//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", e => {
    let clickedElm = e.target;

    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
    }
});




//like section
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