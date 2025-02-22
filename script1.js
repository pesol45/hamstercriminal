let score = 0;
let clickValue = 1;
let passiveIncome = 0;

const hamster = document.getElementById("hamster");
const scoreDisplay = document.getElementById("score");
const clickValueDisplay = document.getElementById("click-value");
const passiveIncomeDisplay = document.getElementById("passive-income");
const upgradeClick = document.getElementById("upgrade-click");
const upgradePassive = document.getElementById("upgrade-passive");

hamster.addEventListener("click", () => {
    score += clickValue;
    scoreDisplay.textContent = score;
});

upgradeClick.addEventListener("click", () => {
    if (score >= 10) {
        score -= 10;
        clickValue++;
        scoreDisplay.textContent = score;
        clickValueDisplay.textContent = clickValue;
    }
});

upgradePassive.addEventListener("click", () => {
    if (score >= 50) {
        score -= 50;
        passiveIncome++;
        scoreDisplay.textContent = score;
        passiveIncomeDisplay.textContent = passiveIncome;
    }
});

setInterval(() => {
    score += passiveIncome;
    scoreDisplay.textContent = score;
}, 1000);
