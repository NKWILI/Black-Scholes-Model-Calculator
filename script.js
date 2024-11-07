document.getElementById('calculate-btn').addEventListener('click', function() {
    // Get the input values
    const S = parseFloat(document.getElementById('current-price').value); // Current stock price
    const K = parseFloat(document.getElementById('strike-price').value); // Strike price
    const r = parseFloat(document.getElementById('interest-rate').value); // Risk-free interest rate
    const T = parseFloat(document.getElementById('time-to-maturity').value); // Time to maturity (in years)
    const sigma = parseFloat(document.getElementById('volatility').value); // Volatility
    
    // Ensure inputs are valid numbers
    if (isNaN(S) || isNaN(K) || isNaN(r) || isNaN(T) || isNaN(sigma) || T <= 0 || sigma <= 0) {
      alert("Veuillez entrer des valeurs valides.");
      return;
    }
  
    // Black-Scholes formula for a call option price
    const d1 = (Math.log(S / K) + (r + (sigma * sigma) / 2) * T) / (sigma * Math.sqrt(T));
    const d2 = d1 - sigma * Math.sqrt(T);
    
    const N_d1 = cumulativeNormalDistribution(d1); // Cumulative normal distribution for d1
    const N_d2 = cumulativeNormalDistribution(d2); // Cumulative normal distribution for d2
    
    const callPrice = S * N_d1 - K * Math.exp(-r * T) * N_d2;
    
    // Show the result
    const currencySymbol = document.getElementById('currency').value; // Get the selected currency
    document.getElementById('option-price').textContent = callPrice.toFixed(2) + " " + currencySymbol;
  });
  
// Cumulative Normal Distribution (CDF)
function cumulativeNormalDistribution(x) {
    const L = 0.0, K = 0.0, a1 = 0.319381530, a2 = -0.356563782, a3 = 1.781477937, a4 = -1.821255978, a5 = 1.330274429;
    const c2 = 0.2316419, d1 = 0.3989422804014337;
    
    const t = 1.0 / (1.0 + c2 * Math.abs(x));
    const b = d1 * Math.exp(-x * x / 2.0);
    
    return 1.0 - b * (a1 * t + a2 * t * t + a3 * t * t * t + a4 * t * t * t * t + a5 * t * t * t * t * t);
}
