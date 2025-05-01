# 📈 Black-Scholes Call Option Calculator

## 🧭 Overview

This project is a **web-based financial calculator** that computes the theoretical price of a European call option using the **Black-Scholes Model**. It is tailored for users who want to better understand financial derivatives.

🎯 **Primary Goal:** Make complex financial formulas more accessible through interactive and user-friendly tools.

---

## 🌍 Languages & Libraries

- 🌐 **HTML5** – Structure of the page  
- 🎨 **CSS3** – Styling and layout  
- 🧠 **JavaScript** – Core logic for Black-Scholes calculations  
- 🔣 Localized labels and content in **French** for broader accessibility

---

## 💡 Features

- 🔄 **Currency selector** (€, $, £, ₹)  
- 📊 Input fields for:
  - Current Stock Price (S₀)
  - Strike Price (K)
  - Risk-Free Interest Rate (r)
  - Time to Maturity (T)
  - Volatility (σ)
- 🧮 Instant calculation of **Call Option Price**
- 📥 Result display area with styled output
- 🔗 Educational resource links for deeper understanding

---

## 🧱 Page Structure

### 🧢 Header
- Title: **Calculateur de l'Option d'Achat (Black-Scholes)**

### 📋 Form Inputs

| Label 🏷️                        | Field ID            | Tooltip 📌                                             |
|-------------------------------|---------------------|--------------------------------------------------------|
| Sélectionner la Devise         | `currency`          | Select currency symbol for display                    |
| Prix Actuel de l'Action (S₀)   | `current-price`     | The current stock price                               |
| Prix d'Exercice (K)            | `strike-price`      | The strike/exercise price                             |
| Taux d'Intérêt Sans Risque (r) | `interest-rate`     | Annual risk-free interest rate                        |
| Temps à Maturité (T)           | `time-to-maturity`  | Time until option expiry (in years)                   |
| Volatilité (σ)                 | `volatility`        | Annualized volatility (as decimal, e.g., 0.2 = 20%)   |

### 🖩 Calculation Button

- Label: `Calculer le Prix de l'Option`

### 💵 Result Display

- Title: `Prix de l'Option d'Achat`
- Value shown dynamically inside `<p id="option-price">`

---

## 📝 Footer

- 🔗 Source: [Clotilde Djuikem on LinkedIn](https://www.linkedin.com/posts/clotilde-djuikem-8186901a0_maths-et-la-finance-activity-7259097055157997569-19Ow?utm_source=share&utm_medium=member_desktop)
- 📢 Follow:  
  - [Clotilde Djuikem on LinkedIn](https://www.linkedin.com/in/clotilde-djuikem-8186901a0/)  
  - [Tioh Academy on YouTube](https://www.youtube.com/channel/UCCyYsZP2S1RZ5rI78ekBj-A)

---

## 🧠 How It Works (Concept Brief)

The Black-Scholes formula calculates the price of a **European Call Option** using:

