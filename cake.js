/*=========================================
            CAKE PAGE
=========================================*/

(() => {

    const blowBtn = document.getElementById("blowBtn");
    const flames = document.querySelectorAll(".flame");
    const birthdayBlast = document.getElementById("birthdayBlast");

    if (!blowBtn) return;

    blowBtn.addEventListener("click", () => {

        /* Blow out flames */

        flames.forEach(flame => {

            flame.style.transition = "0.6s";
            flame.style.opacity = "0";
            flame.style.transform = "translateY(-20px) scale(0)";

        });

        /* Confetti */

        confetti({

            particleCount: 250,
            spread: 150,
            origin: { y: 0.6 }

        });

        /* Fireworks */

        setTimeout(() => {

            confetti({

                particleCount: 120,
                angle: 60,
                spread: 80,
                origin: { x: 0 }

            });

            confetti({

                particleCount: 120,
                angle: 120,
                spread: 80,
                origin: { x: 1 }

            });

        }, 400);

        /* Birthday Text */

        gsap.to(birthdayBlast, {

            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.7)"

        });

        /* Hide Button */

        gsap.to(blowBtn, {

            opacity: 0,
            y: 20,
            duration: 0.5

        });

        /* Go to Gallery */

        setTimeout(() => {

            showScreen("memoryPage");

        }, 5000);

    });

})();