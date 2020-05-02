// Request-1
const headline = document.querySelector(".headline")

headline.addEventListener("click", () => {
    headline.textContent = "Have a Good Time!"
});

// Request-2
const menuButton = document.querySelector(".menu")
const sideMenu = document.querySelector(".side-nav")

menuButton.addEventListener("click", () => {
    sideMenu.style.visibility = "visible";
})

const closeMenu = document.querySelector(".close")

closeMenu.addEventListener("click", () => {
    sideMenu.style.visibility = "hidden";
})


//Request-3
const action = document.querySelector(".action")
const expandSection = document.querySelector(".section-expand")

action.addEventListener("click", () => {
    expandSection.style.display = "block";
})
