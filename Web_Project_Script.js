const showButton=document.querySelector(".showButton");
const hideButton=document.querySelector(".hideButton");
const menuButton=document.querySelector(".menuButton")
const leftMain=document.querySelector(".Left_Main");

function menuInteraction(){
    if (leftMain.classList.contains("show")){
        showButton.style.display = "none";
        hideButton.style.display= "block";
        leftMain.style.display= "flex";
        leftMain.classList.remove("show");
    }else{
        showButton.style.display = "block";
        hideButton.style.display= "none";
        leftMain.style.display= "none";
        leftMain.classList.add("show");
    }

}

menuButton.addEventListener("click",menuInteraction);