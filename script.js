// script.js
const LAMBO_PRICE = 200000; // in USD

async function fetchBitcoinPrice() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await response.json();
    const btcPrice = data.bitcoin.usd;

    document.getElementById('btc-price').textContent = `$${btcPrice.toLocaleString(undefined, {maximumFractionDigits: 2})}`;
    document.getElementById('btc-needed').textContent = (LAMBO_PRICE / btcPrice).toFixed(2);
  } catch (error) {
    console.error("Error fetching Bitcoin price:", error);
    document.getElementById('btc-price').textContent = "Error fetching price";
    document.getElementById('btc-needed').textContent = "N/A";
  }
}

// Initial fetch + refresh every 10 seconds
fetchBitcoinPrice();
setInterval(fetchBitcoinPrice, 10000);
