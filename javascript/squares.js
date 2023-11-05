const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const b = document.querySelectorAll(".column");
for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    const square = document.querySelector(
      `#container .column:nth-of-type(${i}) .square:nth-of-type(${j})`
    );
    square.setAttribute("id", `${letters[i - 1]}${j}`);
  }
}
