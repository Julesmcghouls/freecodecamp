console.log("JavaScript is running!");

// Select the cat nose element
const catNose = document.querySelector(".cat-nose");

if (catNose) {
console.log("Cat nose element found:", catNose);

// Add click event listener
catNose.addEventListener("click", function () {
console.log("Cat nose clicked!");
alert("The cat's nose was clicked!");
catNose.style.borderBottomColor = "blue";
});
} else {
console.error("Cat nose element NOT found!");
}
