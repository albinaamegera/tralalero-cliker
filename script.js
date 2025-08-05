document.addEventListener("DOMContentLoaded", () => {
  let coins = 0;
  let isMenuOpen = false;

  const coinCounter = document.getElementById("coin-counter");
  const menuBtn = document.getElementById("menu-btn");
  const menuModal = document.getElementById("menu-modal");
  const closeMenuBtn = document.getElementById("close-menu");
  const adBanner = document.getElementById("ad-banner");
  const topUI = document.getElementById("top-bar");

  // Обновление счётчика монет
  function updateCoins(amount) {
    coins += amount;
    coinCounter.textContent = coins;
    showPopupEffect(`+${amount}`);
  }

  // Popup-эффект
  function showPopupEffect(text) {
    const popup = document.createElement("div");
    popup.className = "popup-text";
    popup.textContent = text;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2 - 50;
    const offsetX = Math.random() * 100 - 50;
    const offsetY = Math.random() * 30 - 15;

    popup.style.left = `${centerX + offsetX}px`;
    popup.style.top = `${centerY + offsetY}px`;

    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 800);
  }

  // Обработка кликов по экрану
  document.addEventListener("click", (e) => {
    if (isMenuOpen) return;

    const target = e.target;
    if (topUI.contains(target) || adBanner.contains(target) || menuModal.contains(target)) return;

    updateCoins(1);
  });

  // Кнопка меню — открытие
  menuBtn.addEventListener("click", () => {
    menuModal.classList.remove("hidden");
    isMenuOpen = true;
  });

  // Кнопка закрытия меню
  closeMenuBtn.addEventListener("click", () => {
    menuModal.classList.add("hidden");
    isMenuOpen = false;
  });
});
