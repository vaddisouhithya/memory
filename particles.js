/* ==========================================
      FLOATING HEARTS
========================================== */

const landing = document.getElementById("landingPage");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.animationDuration=(6+Math.random()*5)+"s";

    landing.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,300);

/* ==========================================
      STARS
========================================== */

for(let i=0;i<60;i++){

    const star=document.createElement("div");

    star.className="star";

    star.innerHTML="✦";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.fontSize=(8+Math.random()*10)+"px";

    star.style.animationDelay=Math.random()*2+"s";

    landing.appendChild(star);

}

/* ==========================================
      CURSOR GLOW
========================================== */

const glow=document.createElement("div");

glow.id="cursorGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});