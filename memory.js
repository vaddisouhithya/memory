const memories = [

{
image:"photo1.jpeg",
title:"Unforgettable ❤️ ",
text:"Every moment with you is a beautiful memory that I treasure forever."
},

{
image:"photo2.jpeg",
title:"Your Smile 😊",
text:"Your smile brightens day of my life."
},

{
image:"photo3.jpeg",
title:"Best Moments 💕",
text:"I wish every day could be as wonderful as the moments we've shared."
},

{
image:"photo4.jpeg",
title:"Forever Together 🌸",
text:"Distance, time, and everything else fade when I think of you.But still i will miss your presence every time."
},

{
image:"photo5.jpeg",
title:"My Favorite Persons ❤️",
text:"You make ordinary moments feel extraordinary."
},

{
image:"photo6.jpeg",
title:"Happy Friendship Day❤️ ",
text:"May this day bring you endless happiness, laughter, success, and love. You deserve the very best."
}

];

let currentMemory = 0;

const img = document.getElementById("memoryImage");
const title = document.getElementById("memoryTitle");
const text = document.getElementById("memoryText");

const prevBtn = document.getElementById("prevMemoryBtn");
const nextBtn = document.getElementById("nextMemoryBtn");
const count = document.getElementById("memoryCount");

function loadMemory(){

    img.src = memories[currentMemory].image;
    title.textContent = memories[currentMemory].title;
    text.textContent = memories[currentMemory].text;

    count.textContent =
        `${currentMemory+1} / ${memories.length}`;

    prevBtn.disabled = currentMemory === 0;
}

nextBtn.onclick=()=>{

    if(currentMemory < memories.length-1){

        currentMemory++;

        loadMemory();

    }
    else{

        showScreen("letterPage");
        gsap.from(".letterCard",{
    scale:0.8,
    opacity:0,
    duration:1,
    ease:"back.out(1.7)"
});
        startLetter();

    }

};

prevBtn.onclick=()=>{

    if(currentMemory>0){

        currentMemory--;

        loadMemory();

    }

};

loadMemory();
