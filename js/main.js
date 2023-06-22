let menu_btn = document.querySelector(".menu_btn");
let menu = document.querySelector(".menu");
menu_btn.onclick = () => {
    menu.classList.toggle("active");
}