// javascript for the humgurger menu
var menu = document.getElementById("bx-menu");
var nav = document.querySelector("nav");

nav.style.maxHeight = "0px";

function handleClick() {
  if (nav.style.maxHeight == "0px") {
    nav.style.maxHeight = "200px";
    nav.style.display = "block";
  } else {
    nav.style.maxHeight = "0px";
    nav.style.display = "none";
  }
}
handleClick()

function handleAddToCart() {
    const products = {
        count: 0
    }
    const cartButtonTrigger = document.querySelectorAll('.add-to-cart')
    let countElement = document.getElementById('count')
    let count = Number(countElement.innerText);
    cartButtonTrigger.forEach((button) => {
        button.addEventListener('click', () => {
            count++
            countElement.innerText = count
        })
    })
}
handleAddToCart()