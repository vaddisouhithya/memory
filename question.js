/*=========================================
            QUESTION PAGE
=========================================*/
console.log("question.js loaded");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const sadMessage = document.getElementById("sadMessage");
const questionArea = document.querySelector(".questionButtons");

const questionMessages = [
    "🥺 Please don't leave me...",
    "😭 Noooo... choose YES!",
    "❤️ I made this only for you!",
    "🥹 Catch me if you can!",
    "💕 Pretty please...",
    "😘 The YES button is waiting!"
];

/*=========================================
            MOVE NO BUTTON
=========================================*/

function moveNoButton() {

    console.log("NO button moved!");

    const maxX = questionArea.clientWidth - noBtn.offsetWidth;
    const maxY = questionArea.clientHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    sadMessage.textContent =
        questionMessages[Math.floor(Math.random() * messages.length)];
}

/*=========================================
            RUN AWAY
=========================================*/

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("click", (e) => {

    e.preventDefault();

    moveNoButton();

});

/*=========================================
                YES
=========================================*/

yesBtn.addEventListener("click", () => {

    confetti({

        particleCount: 250,

        spread: 120,

        origin: { y: 0.6 }

    });

    showScreen("cakePage");

});