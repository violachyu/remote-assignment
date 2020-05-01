const headline = document.querySelector(".headline")

headline.addEventListener("click", () => {
    headline.textContent = "Have a Good Time!"
});

const action = document.querySelector(".action")
const expandSection = document.querySelector(".section-expand")

action.addEventListener("click", () => {
    expandSection.style.display = "block";
})