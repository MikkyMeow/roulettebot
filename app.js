const input = document.getElementById("number");
const button = document.getElementById("submit");
const list = document.getElementById("list");
const nextNumber = document.getElementById("nextNumber");
let num = Math.floor(Math.random() * 36) + 1;
nextNumber.innerHTML = num;
button.addEventListener("click", () => {
  generateLine();
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    generateLine();
  }
});

const redArr = [
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
];
const isBiggerSmaller = (first, second) =>
  (first <= 18 && second <= 18) || (first >= 19 && second >= 19);
const isEvenOdd = (first, second) => first % 2 === second % 2;
const isBlackRed = (first, second) =>
  (redArr.includes(first) && redArr.includes(second)) ||
  (!redArr.includes(first) && !redArr.includes(second));

const generateLine = () => {
  if (Number(input.value) > 0 && Number(input.value) <= 36) {
    const guessed = num;
    const entered = Number(input.value);
    const data = {
      guessed,
      entered,
      biggerSmaller: isBiggerSmaller(guessed, entered),
      evenOdd: isEvenOdd(guessed, entered),
      blackRed: isBlackRed(guessed, entered),
    };
    const li = document.createElement("li");
    for (let key in data) {
      const span = document.createElement("span");
      span.textContent = data[key];
      li.append(span);
    }
    input.value = "";
    list.append(li);
    num = Math.floor(Math.random() * 36) + 1;
    nextNumber.innerHTML = num;
  } else {
    input.value = "";
  }
};
