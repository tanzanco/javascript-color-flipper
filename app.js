const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
// let rando = Math.floor(Math.random() * 4 );
// console.log(rando)

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length );
}