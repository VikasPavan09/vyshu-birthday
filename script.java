// Google Sheet URL
const URL =
"https://script.google.com/macros/s/AKfycbwDtTRowNMfCzK1A3jBr6EGgBNGU4csdfslIZZ3QsCjUZwoD3a-D_3loQ1BAi_Jbd6iuw/exec";

// Save answer to Google Sheet
function save(answer){
fetch(URL,{
method:"POST",
body:JSON.stringify({answer:answer})
});
}

// 🎬 SCREEN FLOW
function showMemory(){
document.getElementById("birthday").classList.add("hidden");
document.getElementById("memory").classList.remove("hidden");
}

function showProposal(){
document.getElementById("memory").classList.add("hidden");

let proposal = document.getElementById("proposal");
proposal.classList.remove("hidden");
proposal.classList.add("active");
}

// ❤️ YES ACTION
function yes(){

save("YES ❤️");

document.getElementById("result").innerHTML = `
Nijam cheppali ante ni love ki nen right person or kadhu ane vishyam nak thelidhu.

But I promise I will stay with you forever.

LOVE YOU VYSHUU ❤️
`;

document.querySelector(".yes").style.display = "none";
document.querySelector(".no").style.display = "none";
}

// 🌹 NO ACTION
function no(){

save("NO 🌹");

document.getElementById("result").innerHTML = `
Pedhaga cheppaniki inkem ledhu...

But you will always be special to me.
`;

document.querySelector(".yes").style.display = "none";
document.querySelector(".no").style.display = "none";
}
