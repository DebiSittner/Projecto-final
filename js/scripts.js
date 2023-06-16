/*inicio de libreria aos*/
AOS.init();
let menu = document.getElementById("menu");
let menu_bar = document.getElementById("menu-bar")
menu_bar.addEventListener("click",function (){
    menu.classList.toggle("menu-toggle")
})
hambre = true

hambre = prompt("tenes hambre");

if (hambre == si){
    comida = prompt("decime que queres comer");
    alert("ahi te cocino"+comida);
} else{
    comida= alert("que bueno que ya comiste");
}

