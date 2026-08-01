/*==================================================
            SCREEN MANAGER
==================================================*/

const screens = document.querySelectorAll(".screen");

/*
    Show only one screen.

    Example:

    showScreen("landingPage");

*/

function showScreen(id){

    document.querySelectorAll(".screen").forEach(screen=>{
        screen.classList.remove("active");
    });

    const target = document.getElementById(id);

    if(target){
        target.classList.add("active");
    }
}