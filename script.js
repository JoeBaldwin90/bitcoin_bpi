// Current bitcoin price API endpoint
const url = "https://api.coindesk.com/v1/bpi/currentprice.json"

// Elements
const priceEl = document.querySelector("h1")
const navLinks = document.querySelectorAll("nav a")

let currency = "GBP"

const checkPrice = function () {
  // Fetch
  fetch(url)
    .then(response => response.json())
    .then(data => {
      priceEl.innerHTML = data.bpi[currency].rate_float.toFixed(1)
    })
}

// Pull latest BPI data on page load
checkPrice()

// On click, change the BPI currency based on the link's data-currency
navLinks.forEach(link => {
  // Add event listener for each link
  link.addEventListener("click", function () {
    // Get data attribute for clicked link
    currency = this.getAttribute("data-currency")

    // Remove all previously selected states
    navLinks.forEach(link => link.classList.remove("selected"))
    // Add selected class for this link
    this.classList.add("selected")

    // Check price for new currency
    checkPrice()
  })
})
