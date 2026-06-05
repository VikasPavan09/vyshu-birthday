@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cinzel:wght@400;600;700&display=swap');

/* ===== BASE ===== */
*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:'Cinzel',serif;
background:black;
color:white;
overflow:hidden;
height:100vh;
}

/* ===== NETFLIX INTRO ===== */
.intro{
position:fixed;
top:0;
left:0;
width:100%;
height:100vh;
background:black;
display:flex;
justify-content:center;
align-items:center;
z-index:9999;
animation:fadeOutIntro 3s ease forwards;
animation-delay:2.5s;
}

.netflix-text{
font-family:'Bebas Neue',sans-serif;
font-size:5rem;
color:#e50914;
letter-spacing:8px;
animation:zoomNetflix 2s ease;
}

@keyframes zoomNetflix{
from{
transform:scale(0.5);
opacity:0;
}
to{
transform:scale(1);
opacity:1;
}
}

@keyframes fadeOutIntro{
to{
opacity:0;
visibility:hidden;
}
}

/* ===== SCREEN SYSTEM ===== */
.screen{
position:absolute;
top:0;
left:0;
width:100%;
height:100vh;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;

padding:30px;

transition:1s ease;
}

.hidden{
opacity:0;
pointer-events:none;
transform:scale(0.95);
}

/* Glass effect */
.screen::before{
content:"";
position:absolute;
width:85%;
height:80%;
background:rgba(255,255,255,0.05);
border:1px solid rgba(255,255,255,0.1);
backdrop-filter:blur(15px);
border-radius:25px;
z-index:-1;
box-shadow:0 0 50px rgba(255,80,150,0.15);
}

/* ===== HEADINGS ===== */
h1{
font-family:'Bebas Neue',sans-serif;
font-size:3.8rem;
letter-spacing:2px;
color:#ffd699;
text-shadow:0 0 20px rgba(255,214,153,0.3);
margin-bottom:20px;
}

/* ===== TEXT ===== */
p{
font-family:'Cinzel',serif;
font-size:1.2rem;
line-height:2;
max-width:800px;
}

/* ===== BUTTONS ===== */
button{
padding:15px 40px;
border:none;
border-radius:50px;
font-size:18px;
cursor:pointer;
margin-top:20px;
transition:0.3s ease;
}

/* NEXT */
.next{
background:#ffd699;
color:#111;
}

.next:hover{
transform:scale(1.05);
}

/* YES */
.yes{
background:#ff4f81;
color:white;
margin:10px;
box-shadow:0 0 20px rgba(255,79,129,0.4);
}

.yes:hover{
transform:scale(1.1);
box-shadow:0 0 40px rgba(255,79,129,0.8);
}

/* NO */
.no{
background:rgba(255,255,255,0.1);
color:white;
border:1px solid rgba(255,255,255,0.2);
margin:10px;
}

.no:hover{
background:rgba(255,255,255,0.2);
}

/* ===== PROPOSAL ZOOM ===== */
#proposal{
transform:scale(0.85);
opacity:0;
transition:1.2s ease;
}

#proposal.active{
transform:scale(1);
opacity:1;
}

/* ===== RESULT ===== */
.result{
margin-top:30px;
max-width:850px;
white-space:pre-line;
line-height:2;
font-size:18px;
animation:fadeUp 1s ease;
font-family:'Cinzel',serif;
}

@keyframes fadeUp{
from{
opacity:0;
transform:translateY(20px);
}
to{
opacity:1;
transform:translateY(0);
}
}

/* ===== MOBILE ===== */
@media(max-width:768px){

h1{
font-size:2.2rem;
}

p{
font-size:1rem;
}

.screen::before{
width:92%;
height:85%;
}

button{
font-size:16px;
padding:12px 28px;
}

.netflix-text{
font-size:3.5rem;
}
}
