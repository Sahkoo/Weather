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