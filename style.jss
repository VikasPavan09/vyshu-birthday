@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:'Poppins',sans-serif;
    background:linear-gradient(135deg,#0a0a0a,#1a0f17,#0a0a0a);
    color:#fff;
    overflow:hidden;
    height:100vh;
    position:relative;
}

/* Animated Background */

body::before{
    content:"";
    position:absolute;
    inset:0;
    background:
    radial-gradient(circle at 20% 30%,rgba(255,120,180,.15),transparent 30%),
    radial-gradient(circle at 80% 20%,rgba(255,220,120,.12),transparent 30%),
    radial-gradient(circle at 50% 80%,rgba(255,255,255,.05),transparent 30%);
    animation:bgMove 12s infinite alternate;
    pointer-events:none;
}

@keyframes bgMove{
    from{
        transform:scale(1);
    }
    to{
        transform:scale(1.15);
    }
}

/* Screens */

.screen{
    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:30px;
    transition:1s;
}

.hidden{
    opacity:0;
    pointer-events:none;
    transform:scale(.95);
}

/* Card */

.screen::after{
    content:"";
    position:absolute;
    width:85%;
    max-width:900px;
    height:80%;
    background:rgba(255,255,255,.05);
    border:1px solid rgba(255,255,255,.1);
    border-radius:30px;
    backdrop-filter:blur(15px);
    z-index:-1;
    box-shadow:
    0 0 40px rgba(255,100,150,.15),
    0 0 100px rgba(255,200,120,.08);
}

/* Titles */

h1{
    font-family:'Cinzel',serif;
    font-size:4rem;
    margin-bottom:25px;
    color:#ffd699;
    text-shadow:0 0 20px rgba(255,214,153,.3);
}

/* Text */

p{
    max-width:850px;
    font-size:1.2rem;
    line-height:2;
    color:#f2f2f2;
}

/* Buttons */

button{
    padding:16px 42px;
    border:none;
    border-radius:50px;
    font-size:18px;
    font-weight:600;
    cursor:pointer;
    transition:.4s;
}

.next{
    background:#ffd699;
    color:#111;
}

.next:hover{
    transform:translateY(-4px);
}

.yes{
    background:#ff4f81;
    color:#fff;
    box-shadow:0 0 20px rgba(255,79,129,.4);
}

.yes:hover{
    transform:scale(1.05);
    box-shadow:0 0 35px rgba(255,79,129,.8);
}

.no{
    background:rgba(255,255,255,.1);
    color:white;
    border:1px solid rgba(255,255,255,.2);
}

.no:hover{
    background:rgba(255,255,255,.2);
}

.buttons{
    display:flex;
    gap:20px;
    margin-top:30px;
    flex-wrap:wrap;
    justify-content:center;
}

/* Result */

.result{
    margin-top:35px;
    max-width:900px;
    background:rgba(255,255,255,.05);
    padding:25px;
    border-radius:20px;
    line-height:2;
    font-size:18px;
    animation:fadeUp 1s ease;
}

@keyframes fadeUp{
    from{
        opacity:0;
        transform:translateY(25px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}

/* Falling Icons */

.falling{
    position:absolute;
    top:-50px;
    font-size:28px;
    pointer-events:none;
    animation:fall linear infinite;
}

@keyframes fall{
    0%{
        transform:translateY(-50px) rotate(0deg);
        opacity:0;
    }

    10%{
        opacity:1;
    }

    100%{
        transform:translateY(110vh) rotate(360deg);
        opacity:.8;
    }
}

/* Mobile */

@media(max-width:768px){

    h1{
        font-size:2.4rem;
    }

    p{
        font-size:1rem;
    }

    .screen::after{
        width:92%;
        height:85%;
    }

    button{
        font-size:16px;
        padding:14px 28px;
    }
}
