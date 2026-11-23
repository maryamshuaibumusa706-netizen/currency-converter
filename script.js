// Demo rates relative to 1 USD - replace with live API later
const rates = { USD: 1, NGN: 1500, EUR: 0.92, GBP: 0.79 };

function convert() {
  const amount = Number(document.getElementById("amount").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const err = document.getElementById("error-msg");
  const resultEl = document.getElementById("result");

  if (!amount || amount <= 0) {
    err.textContent = "Please enter a valid amount greater than 0.";
    return;
  }
  err.textContent = "";
  const inUSD = amount / rates[from];
  const converted = inUSD * rates[to];
  resultEl.textContent = `${amount.toLocaleString()} ${from} = ${converted.toLocaleString(undefined, { maximumFractionDigits: 2 })} ${to}`;
}

document.getElementById("convert-btn").addEventListener("click", convert);
document.getElementById("amount").addEventListener("input", convert);
document.getElementById("from").addEventListener("change", convert);
document.getElementById("to").addEventListener("change", convert);
document.getElementById("swap").addEventListener("click", () => {
  const from = document.getElementById("from");
  const to = document.getElementById("to");
  const temp = from.value;
  from.value = to.value;
  to.value = temp;
  convert();
});
convert();
