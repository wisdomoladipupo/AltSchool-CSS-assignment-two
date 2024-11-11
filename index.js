const burger = document.getElementById("svg")
const navList = document.querySelector(".navList")

burger.addEventListener("click",() => {
    if(navList.style.display === "none" || navList.style.display === ""){
        navList.style.display = "block"
    } else{
        navList.style.display = "none"
    }
})