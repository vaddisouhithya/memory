/*==========================================
        LOADING SCREEN
==========================================*/

const loadingScreen = document.getElementById("loadingScreen");
const landingPage = document.getElementById("landingPage");

const progressBar = document.getElementById("progressBar");
const loadingText = document.getElementById("loadingText");

/* Loading Messages */

const messages = [

    "Preparing your surprise ❤️",

    "gathering my emotions",

    "Wrapping the gift 🎁",

    "Collecting beautiful memories 📸",

    "Adding lots of love 💖",

    "Almost Ready... ✨"

];

let progress = 0;
let msgIndex = 0;

/*==========================================
      Progress Animation
==========================================*/

const loadingInterval = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";

    if (progress % 18 === 0 && msgIndex < messages.length) {

        loadingText.innerHTML = messages[msgIndex];

        msgIndex++;

    }

    if (progress >= 100) {

        clearInterval(loadingInterval);

        finishLoading();

    }

}, 40);


/*==========================================
      Finish Loading
==========================================*/

function finishLoading() {

    loadingScreen.classList.add("loadingHide");

    setTimeout(() => {

        showScreen("landingPage");

        landingPage.classList.add("fadeIn");

    }, 1000);

}

/*==========================================
      Floating Sparkles
==========================================*/

function createSpark() {

    const spark = document.createElement("div");

    spark.className = "spark";

    spark.style.left = Math.random() * window.innerWidth + "px";

    spark.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    loadingScreen.appendChild(spark);

    setTimeout(() => {

        spark.remove();

    }, 7000);

}

setInterval(createSpark, 250);