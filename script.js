const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});








let textArea = document.querySelector(".textarea")
let inputPlaceholder = document.querySelector(".input_placeholder")
let button = document.querySelector(".button")
let comment = document.querySelector(".comment")
let loader = document.querySelector(".loader")



button.addEventListener("click", function () {
    loader.style.display = 'block'
    loader.style.display = 'flex'
    setTimeout(() => {
        let text = textArea.value;
        let text2 = inputPlaceholder.value
        localStorage.setItem('cool', text)
        localStorage.setItem('yes', text2)
        console.log("Готово")
        let getText = localStorage.getItem("cool")
        let getText2 = localStorage.getItem("yes")
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        p.className = 'p_comment'
        p2.className = 'p-comment'
        p.textContent = getText
        p2.textContent = getText2
        comment.appendChild(p2)
        comment.appendChild(p)
        if (textArea.value !== "") {
            textArea.value = ""
        }
        loader.style.display = 'none'
    }, 2000)
})






let newComment = [
    "круто показує погоду!",
    "баняк",
    "глек",
    "добавте ще щось на сайт",
    "андрій каструля",
    "холодно наразі",
    "ярик лох"
]

let commentNames = [
    "akerman1337",
    "katssuu",
    "Lord Zelensky",
    "spr1n1k",
    "Sanchez123",
    "Yaroslav Bakugan",
    "Burym Moshennik"
]

function showСomments() {
    let commentSpace = document.createElement('div')
    commentSpace.classList.add('comment-container');

    for (let i = 0; i < newComment.length; i++) {
        setTimeout(function () {
            let randomName = commentNames[Math.floor(Math.random() * commentNames.length)]
            let komentar = document.createElement('p')
            let komentarr = document.createElement('p')
            komentar.textContent = randomName
            komentarr.textContent = newComment[i]
            komentar.classList.add('comment-item')
            komentarr.classList.add('comment_item')
            commentSpace.appendChild(komentar)
            commentSpace.appendChild(komentarr)
        }, i * 20000)
    }
    let commentsBlock = document.querySelector('.second_part')
    commentsBlock.appendChild(commentSpace)
}

showСomments()