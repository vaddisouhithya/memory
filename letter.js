(() => {

const text = `

Dear FRND❤️,

kalisi unna time chala thakuva kani life motham aa pics tho spend chese memorys unna.....
prathi moment ni aa time lo capture chesi manchi pani chesa...
ela nduku matladuthunano telusa miru nak asalu time evvadam ledu ala anni mothaniki kadu thine tappudu patha 
e madya em inna na valle kada aani vachi nen matladuthune miru inka duram maithunaru
i feelings motham chepi sad chesanemo sorry by the.... 
Thanks for being with me for some time....
I'd be completely lost without our trio! 🥹✨💖


🎂 Happy Friendship Day ❤️

With lots of love,
sonuu❤️

`;

const typing = document.getElementById("typingText");
const finalBtn = document.getElementById("finalBtn");

let i = 0;

function typeWriter(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);
        i++;

        setTimeout(typeWriter, 25);

    } else {

        gsap.to(finalBtn, {
            opacity: 1,
            duration: 1
        });

    }

}

function startLetter(){

    showScreen("letterPage");

    typing.innerHTML = "";
    i = 0;

    setTimeout(typeWriter, 500);

}


finalBtn.onclick = () => {
    showScreen("endingPage");
    showScreen("endingPage");

gsap.from("#endingTitle",{

    y:-80,
    opacity:0,
    duration:1.5

});
};
window.startLetter = startLetter;
})();