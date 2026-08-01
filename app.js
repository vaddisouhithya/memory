/*=========================================*
* APP.JS
*=========================================*/

const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

startBtn.addEventListener("click", () => {

    // Start background music
    if (bgMusic.paused) {
        bgMusic.volume = 0.5;
        bgMusic.play().catch(err => console.log(err));
    }

    // Update music button icon
    if (musicBtn) {
        musicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }

    // Animate landing page
    gsap.to("#landingPage .glass", {

        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",

        onComplete: () => {

            showScreen("envelopePage");

            gsap.from("#envelopePage .envelopeWrapper", {

                y: 250,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)"

            });

        }

    });

});