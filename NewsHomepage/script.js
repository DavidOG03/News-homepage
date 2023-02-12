const hamburger = document.querySelector("#menu")
const closeBtn = document.querySelector("#closeBtn")
const navBar = document.querySelector("#menuBar")
const mobImg = document.querySelector(".mobileImage")

hamburger.addEventListener("click", () => {
    navBar.classList.add("show")
    document.querySelector("body").style.overflow = "hidden"
    document.querySelector("body").style.transition = "all 0.5s ease-in-out"
    document.querySelector("body").style.background = "rgba(0,0,0,50%)"
    mobImg.style.filter = "brightness(50%)"
    mobImg.style.transition = "all 0.5s ease-in-out"
})

closeBtn.addEventListener("click", () =>{
    navBar.classList.remove("show")
    document.querySelector("body").style.overflowY = "scroll"
    document.querySelector("body").style.background = "rgba(0,0,0,0)"
    mobImg.style.filter = "brightness(100%)"
})