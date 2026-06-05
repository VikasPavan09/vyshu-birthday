// Google Sheet URL
const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbwDtTRowNMfCzK1A3jBr6EGgBNGU4csdfslIZZ3QsCjUZwoD3a-D_3loQ1BAi_Jbd6iuw/exec";

// Falling icons by stage
let currentIcons = ["🎂","🎈","🎉","✨"];

// Save answer to Google Sheet
function saveAnswer(answer){

fetch(SCRIPT_URL,{
    method:"POST",
    body:JSON.stringify({
        answer:answer
    })
})
.then(() => console.log("Answer Saved"))
.catch(err => console.log(err));

}

// Birthday → Memory
function goMemory(){

document.getElementById("birthday").classList.add("hidden");
document.getElementById("memory").classList.remove("hidden");

currentIcons = ["❤️","💕","💖","✨"];

}

// Memory → Proposal
function goProposal(){

document.getElementById("memory").classList.add("hidden");
document.getElementById("proposal").classList.remove("hidden");

currentIcons = ["🌹","❤️","💍","✨"];

}

// YES
function showYes(){

saveAnswer("YES ❤️");

document.getElementById("result").innerHTML = `

Nijam cheppali ante ni love ki nen right person or kadhu ane vishyam nak thelidhu. Becoz ni la loyal ga care ga chusukune ammai ni bahusa inkekkada chudan emo.

Side keeping unchukune e generation lo nuv eppudu ni character ni pakkana pettaledhu unnadhi unnatlu cheppav a roju wrong hopes ivvaledhu.

Ippudu nannu accept chesav ante i feel thankful and I promise ninnu a situation lo odhipettanu.

Fights between us are common but love on you is forever and ever.

LOVE YOU VYSHUUUUUU 🙃

❤️ Happy Birthday Vyshuuu ❤️

— Vikas
`;

document.querySelector(".buttons").style.display = "none";

currentIcons = ["❤️","💕","💖","💘","✨"];

}

// NO
function showNo(){

saveAnswer("NO 🌹");

document.getElementById("result").innerHTML = `

Pedhaga cheppaniki inkem ledhu but you are best part of my life ala ani ikkade odhilesi ponu.

Last 0.01% kuda ayipoye daaka try chestunta.

Becoz i don't wanna loose you.

— Vikas
`;

document.querySelector(".buttons").style.display = "none";

currentIcons = ["🌹","⭐","✨"];

}

// Falling Icons Animation
function createIcon(){

let icon = document.createElement("div");

icon.className = "falling";

icon.innerHTML =
currentIcons[
Math.floor(Math.random()*currentIcons.length)
];

icon.style.left =
Math.random()*100 + "vw";

icon.style.animationDuration =
(5 + Math.random()*8) + "s";

document.body.appendChild(icon);

setTimeout(() => {
icon.remove();
},13000);

}

setInterval(createIcon,500);

// Initial particles
for(let i=0;i<15;i++){
setTimeout(createIcon,i*200);
}
