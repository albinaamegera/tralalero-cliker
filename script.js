let coins = Number(localStorage.getItem("coins")) || 0;
const counter = document.getElementById("coin-counter");
const clickArea = document.getElementById("click-area");

function updateCounter() {
  counter.textContent = "Монеты: " + coins;
}

function spawnPopup(x, y, text) {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.textContent = "+" + text;

  const offsetX = (Math.random() - 0.5) * 50;
  const offsetY = (Math.random() - 0.5) * 30;

  popup.style.left = x + offsetX + "px";
  popup.style.top = y + offsetY + "px";

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 1000);
}

clickArea.addEventListener("click", (e) => {
  coins += 1;
  updateCounter();
  localStorage.setItem("coins", coins);

  spawnPopup(e.clientX, e.clientY, 1);
});

updateCounter();
