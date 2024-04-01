const nav_bar = document.querySelector(".nav_bar");
const menu_icone = document.querySelector(".menu_icone");
const add_btn = document.querySelector("#add_btn");
const add_card = document.querySelector(".add_card");
const icon_close = document.querySelector("#icon_close");

menu_icone.addEventListener("click", ()=> {    
    nav_bar.classList.toggle("show");
})

add_btn.addEventListener("click", ()=> {
    add_card.classList.add("box");
})

icon_close.addEventListener("click", ()=> {
    add_card.classList.remove("box");
})