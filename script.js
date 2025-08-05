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
  const offsetY = (Math.random() - 0.5) * 20;

  popup.style.left = x + offsetX + "px";
  popup.style.top = y + offsetY - 80 + "px"; // сдвиг вверх

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 1000);
}

clickArea.addEventListener("click", (e) => {
  if (isMenuOpen) return;

  coins += 1;
  updateCounter();
  localStorage.setItem("coins", coins);

  spawnPopup(e.clientX, e.clientY, 1);
});

updateCounter();

const menuBtn = document.getElementById("menu-btn");
const menuModal = document.getElementById("menu-modal");
const closeMenuBtn = document.getElementById("close-menu");
const menuActionBtn = document.getElementById("menu-action-btn");

let isMenuOpen = false;

menuBtn.addEventListener("click", () => {
  menuModal.classList.remove("hidden");
  isMenuOpen = true;
});

closeMenuBtn.addEventListener("click", () => {
  menuModal.classList.add("hidden");
  isMenuOpen = false;
});

menuActionBtn.addEventListener("click", () => {
  // Случайное действие для демонстрации
  const actions = [
    () => alert("Бонус монет скоро появится!"),
    () => document.body.style.backgroundColor = "#f0f8ff",
    () => document.getElementById("coin-counter").style.color = "gold",
    () => alert("Ты нашёл секрет!"),
  ];
  const rand = Math.floor(Math.random() * actions.length);
  actions[rand]();
});

