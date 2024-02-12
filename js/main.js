const subhanAllah = document.getElementById("subhanAllah");
const alhamdulilah = document.getElementById("alhamdulilah");
const allahuakber = document.getElementById("allahuakber");

const countsubhanAllah = document.getElementById("countsubhanAllah");
const countalhamdulilah = document.getElementById("countalhamdulilah");
const countallahuakber = document.getElementById("countallahuakber");

const subhanAllahIncriment = document.getElementById("subhanAllahIncriment");
const alhamdulilahIncriment = document.getElementById("alhamdulilahIncriment");
const allahuakberIncriment = document.getElementById("allahuakberIncriment");

const subhanAllahDecriment = document.getElementById("subhanAllahDecriment");
const alhamdulilahDecriment = document.getElementById("alhamdulilahDecriment");
const allahuakberDecriment = document.getElementById("allahuakberDecriment");

const resetBtn = document.getElementById("resetBtn");


let subhanAllahValue = 0;
let alhamdulilahValue = 0;
let allahuakberValue = 0;

subhanAllahIncriment.addEventListener("click", function(){
    if(subhanAllahValue == 33){
        return countsubhanAllah.innerText = "Complete ❤️";
    }
    subhanAllahValue += 1
    countsubhanAllah.innerText = subhanAllahValue;
})

subhanAllahDecriment.addEventListener("click", function(){
    if(subhanAllahValue == 0){
        return alert("Don't Show negative value")
    }
    subhanAllahValue -= 1;
    countsubhanAllah.innerText = subhanAllahValue;
})
// alhamdulilah 
alhamdulilahIncriment.addEventListener("click", function(){
    if(alhamdulilahValue == 33){
        return countalhamdulilah.innerText = "Complete ❤️";
    }
    alhamdulilahValue += 1
    countalhamdulilah.innerText = alhamdulilahValue;
})

alhamdulilahDecriment.addEventListener("click", function(){
    if(alhamdulilahValue == 0){
        return alert("Don't Show negative value")
    }
    alhamdulilahValue -= 1;
    countalhamdulilah.innerText = alhamdulilahValue;
})

// allauakber 
allahuakberIncriment.addEventListener("click", function(){
    if(allahuakberValue == 34){
        return countallahuakber.innerText = "Complete ❤️";
    }
    allahuakberValue += 1
    countallahuakber.innerText = allahuakberValue;
})

allahuakberDecriment.addEventListener("click", function(){
    if(allahuakberValue == 0){
        return alert("Don't Show negative value")
    }
    allahuakberValue -= 1;
    countallahuakber.innerText = allahuakberValue;
})

// reset btn
resetBtn.addEventListener("click", function(){
   countsubhanAllah.innerText = subhanAllahValue = 0;
   countalhamdulilah.innerText = alhamdulilahValue = 0;
   countallahuakber.innerText = allahuakberValue = 0;
})