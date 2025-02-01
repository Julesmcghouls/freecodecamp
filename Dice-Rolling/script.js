// Get all elements
const buttons = document.querySelectorAll(".dice-buttons button");
const resultSpan = document.getElementById("result");
const diceFace = document.getElementById("dice-face");
const diceCountInput = document.getElementById("dice-count");
const historyList = document.getElementById("history-list");
const clearHistoryButton = document.getElementById("clear-history");

// Function to roll a die
function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Function to simulate rolling animation
function rollAnimation() {
  diceFace.style.opacity = "1";
  diceFace.classList.add("rolling");
  setTimeout(() => {
    diceFace.classList.remove("rolling");
  }, 500);
}

// Function to add a roll to the history
function addToHistory(rollDetails, total) {
  const historyItem = document.createElement("li");
  historyItem.textContent = `${rollDetails} = ${total}`;
  historyList.appendChild(historyItem);
}

// Add event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const dieType = button.getAttribute("data-die"); // Get the die type
    const diceCount = parseInt(diceCountInput.value); // Get the number of dice
    rollAnimation(); // Trigger the rolling animation

    // Wait for the animation to finish before displaying the result
    setTimeout(() => {
      let total = 0;
      let rolls = [];
      for (let i = 0; i < diceCount; i++) {
        const roll = rollDie(dieType);
        rolls.push(roll);
        total += roll;
      }

      // Display the result
      resultSpan.textContent = total;

      // Add the roll to the history
      const rollDetails = `${diceCount}d${dieType}: [${rolls.join(", ")}]`;
      addToHistory(rollDetails, total);
    }, 500); // Match the duration of the animation
  });
});

// Clear history
clearHistoryButton.addEventListener("click", () => {
  historyList.innerHTML = "";
});
