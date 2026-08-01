const restartBtn = document.getElementById("restartBtn");

gsap.from(".endingCard",{

    scale:0.7,
    opacity:0,
    duration:1.5,
    ease:"back.out(1.8)"

});

confetti({

    particleCount:300,
    spread:180,
    origin:{y:0.6}

});

restartBtn.onclick=()=>{

    location.reload();

};