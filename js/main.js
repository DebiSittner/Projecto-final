const contenido = document.getElementById("contenido");
let nombre = "bienvenido a programacion 2.0 ";
alert(nombre);
nombre = "Debora Sittner";
console.log("nombre:"+nombre);
let año = "2023";
console.log("año:"+año);
let edad = 67;
let edades = [12, 18, 67];
contenido.innerHTML=`<h4> ${edad} años junto a vos <h4>`;
if(edad >60){
    console.log("deberias estar jubilado");
}else if(edad>18){
    console.log("deberias estar trabajando");
}else if(edad<18){
    console.log("deberias estar estudiando")
}
for(let i = 1 ; i < 11; i ++){
    console.log(i)
};
console.log(edades.length);