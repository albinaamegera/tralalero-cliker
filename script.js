let coins = 0;
  let isMenuOpen = false;

  const coinCounter = document.getElementById("coin-counter");
  const menuBtn = document.getElementById("menu-btn");
  const menuModal = document.getElementById("menu-modal");
  const closeMenuBtn = document.getElementById("close-menu");
  const menuActionBtn = document.getElementById("menu-action-btn");
  const adBanner = document.getElementById("ad-banner");
  const topUI = document.getElementById("top-bar");

  function updateCoins(amount) {
    coins += amount;
    coinCounter.textContent = `Монеты: ${coins}`;
    showPopupEffect(`+${amount}`);
  }

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

  document.addEventListener("click", (e) => {
    if (isMenuOpen) return;

    const target = e.target;
    if (topUI.contains(target) || adBanner.contains(target) || menuModal.contains(target)) return;

    updateCoins(1);
  });

  menuBtn.addEventListener("click", () => {
    menuModal.classList.remove("hidden");
    isMenuOpen = true;
  });

  closeMenuBtn.addEventListener("click", () => {
    menuModal.classList.add("hidden");
    isMenuOpen = false;
  });

  menuActionBtn.addEventListener("click", () => {
    alert("Тестовая кнопка сработала!");
  });
