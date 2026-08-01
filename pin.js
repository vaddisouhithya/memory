/*=========================================
            PIN PAGE
=========================================*/

const pinDots = document.querySelectorAll("#pinDots span");
const pinButtons = document.querySelectorAll(".keypad button");
const deleteBtn = document.getElementById("deleteKey");
const okBtn = document.getElementById("okKey");
const pinError = document.getElementById("pinError");

let enteredPin = "";

// Replace with Ashuuuu's DOB
const correctPin = CONFIG.birthdayPin;

/*=========================================
        Update Dots
=========================================*/

function updateDots() {

    pinDots.forEach((dot, index) => {

        if (index < enteredPin.length) {

            dot.classList.add("active");

        } else {

            dot.classList.remove("active");

        }

    });

}

/*=========================================
        Number Keys
=========================================*/

pinButtons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        if (value === "⌫" || value === "❤️") return;

        if (enteredPin.length >= 8) return;

        enteredPin += value;

        updateDots();

    });

});

/*=========================================
        Delete
=========================================*/

deleteBtn.addEventListener("click", () => {

    enteredPin = enteredPin.slice(0, -1);

    updateDots();

});

/*=========================================
        Submit
=========================================*/

okBtn.addEventListener("click", () => {

    if (enteredPin.length !== 8) {

        pinError.innerHTML = "Please enter all 8 digits ❤️";

        return;

    }

    if (enteredPin === correctPin) {

        gsap.to(".pinCard", {

            scale: 1.1,

            duration: .4,

            yoyo: true,

            repeat: 1,

            onComplete: () => {

                showScreen("questionPage");
                noBtn.style.left = "390px";
noBtn.style.top = "50px";
noBtn.style.right = "auto";

            }

        });

    } else {

        pinError.innerHTML = "Wrong pin 🥺";

        enteredPin = "";

        updateDots();

        gsap.fromTo(".pinCard",

            { x: -15 },

            {

                x: 15,

                repeat: 5,

                yoyo: true,

                duration: .05,

                onComplete() {

                    gsap.set(".pinCard", { x: 0 });

                }

            }

        );

    }

});