const menuBtn = document.querySelector(".m-menu")
const menu = document.querySelector(".menu-sitebar")
const line = document.querySelector(".line")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")
menuBtn.addEventListener("click", function(){
    menu.classList.toggle("active")
    line.classList.toggle("active")
    line2.classList.toggle("active")
    line3.classList.toggle("active")
})
