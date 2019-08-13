// Current bitcoin price API endpoint
const url = "https://api.coindesk.com/v1/bpi/currentprice.json"

// Elements
const priceEl = document.querySelector("h1")

const checkPrice = function () {
  // Fetch
  fetch(url)
    .then(response => response.json())
    .then(data => {
      priceEl.innerHTML = data.bpi.USD.rate_float.toFixed(1)
    })
}

// Pull latest BPI data on page load
checkPrice()
