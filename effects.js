/*=========================================
        FLOATING HEARTS
=========================================*/

const heartsContainer = document.getElementById("hearts");

function createHeart(){

    if(!heartsContainer) return;

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.className = "floatingHeart";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize =
        (18 + Math.random()*25) + "px";

    heart.style.animationDuration =
        (5 + Math.random()*5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,350);

window.addEventListener("load", () => {

    const endingPage = document.getElementById("endingPage");

    if (endingPage) {

        setInterval(() => {

            if (!endingPage.classList.contains("active")) return;

            confetti({
                particleCount: 120,
                spread: 120,
                origin: {
                    x: Math.random(),
                    y: Math.random() * 0.6
                }
            });

        }, 1800);

    }

});