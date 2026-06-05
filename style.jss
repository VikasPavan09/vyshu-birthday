*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Poppins,sans-serif;
}

body{
background:
radial-gradient(circle at top,#1a0f17,#050505);
color:white;
overflow:hidden;
height:100vh;
}

/* SCREEN SYSTEM */
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

transition:0.8s ease;
opacity:1;
transform:scale(1);
}

/* HIDE SCREEN */
.hidden{
opacity:0;
pointer-events:none;
transform:scale(0.95);
}

/* GLASS EFFECT BACK CARD */
.screen::before{
content:"";
position:absolute;
width:85%;
height:80%;
background:rgba(255,255,255,0.05);
backdrop-filter:blur(15px);
border:1px solid rgba(255,255,255,0.1);
border-radius:25px;
z-index:-1;
box-shadow:
0 0 40px rgba(255,100,150,0.15),
0 0 100px rgba(255,200,120,0.08);
}

/* HEADINGS */
h1{
font-size:3.2rem;
color:#ffd699;
text-shadow:0 0 20px rgba(255,214,153,0.3);
margin-bottom:20px;
}

/* TEXT */
p{
max-width:800px;
font-size:1.2rem;
line-height:2;
color:#f2f2f2;
}

/* BUTTONS */
button{
padding:15px 40px;
border:none;
border-radius:50px;
font-size:18px;
cursor:pointer;
margin-top:20px;
transition:0.3s;
}

/* CONTINUE BUTTON */
.next{
background:#ffd699;
color:#111;
}

.next:hover{
transform:scale(1.05);
}

/* YES BUTTON */
.yes{
background:#ff4f81;
color:white;
margin:10px;
box-shadow:0 0 20px rgba(255,79,129,0.4);
}

.yes:hover{
transform:scale(1.07);
box-shadow:0 0 35px rgba(255,79,129,0.8);
}

/* NO BUTTON */
.no{
background:rgba(255,255,255,0.1);
color:white;
border:1px solid rgba(255,255,255,0.2);
margin:10px;
}

.no:hover{
background:rgba(255,255,255,0.2);
}

/* RESULT TEXT */
.result{
margin-top:30px;
max-width:850px;
white-space:pre-line;
line-height:2;
font-size:18px;
animation:fadeUp 1s ease;
}

/* FADE ANIMATION */
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

/* MOBILE */
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
}
