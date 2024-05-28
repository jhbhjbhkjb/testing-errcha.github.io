let balance = 0;
let multiTapLevel = 1;
let investLevel = 0;

const balanceElement = document.getElementById("balance");
const clickButton = document.getElementById("clickButton");
const upgradeButton = document.getElementById("upgradeButton");
const upgradeModal = document.getElementById("upgradeModal");
const modalContent = document.querySelector(".modal-content");
const closeButton = document.getElementsByClassName("close")[0];
const multiTapButton = document.getElementById("multiTap");
const investButton = document.getElementById("invest");

clickButton.addEventListener("click", () => {
    balance += multiTapLevel;
    updateBalance();
});

upgradeButton.addEventListener("click", () => {
    upgradeModal.classList.add("show");
    modalContent.classList.add("show");
});

closeButton.addEventListener("click", () => {
    upgradeModal.classList.remove("show");
    modalContent.classList.remove("show");
});

multiTapButton.addEventListener("click", () => {
    if (balance >= 100) {
        balance -= 100;
        multiTapLevel++;
        updateBalance();
    } else {
        alert("Not enough balance!");
    }
});

investButton.addEventListener("click", () => {
    if (balance >= 100) {
        balance -= 100;
        investLevel++;
        updateBalance();
    } else {
        alert("Not enough balance!");
    }
});

// Получаем все кнопки на странице
const allButtons = document.querySelectorAll('button');

// Добавляем обработчик событий для каждой кнопки
allButtons.forEach(button => {
    button.addEventListener('touchstart', function(event) {
        // Предотвращаем действие браузера по умолчанию
        event.preventDefault();
        // Симулируем клик на кнопке
        button.click();
    });
});

function updateBalance() {
    balanceElement.textContent = `$${balance}`;
}

function passiveIncome() {
    setInterval(() => {
        balance += investLevel * 10;
        updateBalance();
    }, 10000);
}

passiveIncome();
