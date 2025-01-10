function getAverage(scores) {
let sum = 0;

for (const score of scores) {
sum += score;
}

return sum / scores.length;
}

function getGrade(score) {
if (score === 100) {
return "A++";
} else if (score >= 90) {
return "A";
} else if (score >= 80) {
return "B";
} else if (score >= 70) {
return "C";
} else if (score >= 60) {
return "D";
} else {
return "F";
}
}

function hasPassingGrade(score) {
return getGrade(score) !== "F";
}
function studentMsg(totalScores, studentScore) {
// Get the class average and the student's grade
const classAverage = getAverage(totalScores);
const studentGrade = getGrade(studentScore);

// Check if the student passed or failed
const resultMessage =
studentGrade !== "F" ? "You passed the course." : "You failed the course.";

// Return the message with the class average, student grade, and result
return (
"Class average: " +
classAverage +
". Your grade: " +
studentGrade +
". " +
resultMessage
);
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
