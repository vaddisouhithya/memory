const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

music.volume = 0.5;

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play().catch(err => console.log(err));

        musicBtn.innerHTML =
            '<i class="fa-solid fa-volume-high"></i>';

    } else {

        music.pause();

        musicBtn.innerHTML =
            '<i class="fa-solid fa-music"></i>';

    }

});