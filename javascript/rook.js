const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
function getRooks() {
  const wr1 = document.querySelector("#a8 img");
  const wr2 = document.querySelector("#h8 img");

  const br1 = document.querySelector("#a1 img");
  const br2 = document.querySelector("#h1 img");

  const wr = [wr1, wr2];
  const br = [br1, br2];

  wr1.addEventListener("mouseenter", rookHoverWhite);
  wr2.addEventListener("mouseenter", rookHoverWhite);
  wr1.addEventListener("mouseout", rookDehover);
  wr2.addEventListener("mouseout", rookDehover);

  br1.addEventListener("mouseenter", rookHoverBlack);
  br2.addEventListener("mouseenter", rookHoverBlack);
  br1.addEventListener("mouseout", rookDehover);
  br2.addEventListener("mouseout", rookDehover);
}

function rookHoverBlack(event) {
  const rook = event.target;
  const position = rook.parentNode.id.split("");

  // Section for printing possible column positions
  for (let i = Number(position[1]) - 1; i >= 1; i--) {
    const cell = document.querySelector(`#${position[0]}${i}`);
    if (cell.children.length != 0) {
      if (cell.children[0].getAttribute("alt").split("")[0] === "b") {
        break;
      }
      if (cell.children[0].getAttribute("alt").split("")[0] === "w") {
        cell.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
        break;
      }
    }
    cell.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
  }
  for (let i = Number(position[1]) + 1; i <= 8; i++) {
    const cell = document.querySelector(`#${position[0]}${i}`);
    if (cell.children.length != 0) {
      if (cell.children[0].getAttribute("alt").split("")[0] === "b") {
        break;
      }
      if (cell.children[0].getAttribute("alt").split("")[0] === "w") {
        cell.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
        break;
      }
    }
    cell.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
  }

  // Section for printing possible row positions
  for (let i = letters.indexOf(position[0]) - 1; i >= 0; i--) {
    const cell = document.querySelector(`#${letters[i]}${position[1]}`);
    if (cell.children.length != 0) {
      if (cell.children[0].getAttribute("alt").split("")[0] === "b") {
        break;
      }
      if (cell.children[0].getAttribute("alt").split("")[0] === "w") {
        cell.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
        break;
      }
    }
    cell.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
  }
  for (let i = letters.indexOf(position[0]) + 1; i < 8; i++) {
    const cell = document.querySelector(`#${letters[i]}${position[1]}`);
    if (cell.children.length != 0) {
      if (cell.children[0].getAttribute("alt").split("")[0] === "b") {
        break;
      }
      if (cell.children[0].getAttribute("alt").split("")[0] === "w") {
        cell.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
        break;
      }
    }
    cell.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
  }
}

function rookDehover(event) {
  // section to clear the red attribute of all the highlighted cells
  const rook = event.target;
  const position = rook.parentNode.id.split("");

  for (let i = Number(position[1]) - 1; i >= 1; i--) {
    const cell = document.querySelector(`#${position[0]}${i}`);
    if (cell.innerHTML.includes(`<div class="grey"></div>`)) {
      cell.removeChild(cell.lastChild);
    }
  }
  for (let i = Number(position[1]) + 1; i <= 8; i++) {
    const cell = document.querySelector(`#${position[0]}${i}`);
    if (cell.innerHTML.includes(`<div class="grey"></div>`)) {
      cell.removeChild(cell.lastChild);
    }
  }
  for (let i = letters.indexOf(position[0]) - 1; i >= 0; i--) {
    const cell = document.querySelector(`#${letters[i]}${position[1]}`);
    if (cell.innerHTML.includes(`<div class="grey"></div>`)) {
      cell.removeChild(cell.lastChild);
    }
  }
  for (let i = letters.indexOf(position[0]) + 1; i < 8; i++) {
    const cell = document.querySelector(`#${letters[i]}${position[1]}`);
    if (cell.innerHTML.includes(`<div class="grey"></div>`)) {
      cell.removeChild(cell.lastChild);
    }
  }
}

function rookHoverWhite(event) {
  const rook = event.target;
  const position = rook.parentNode.id.split("");

  // Section for printing possible column positions
  for (let i = Number(position[1]) - 1; i >= 1; i--) {
    const cell = document.querySelector(`#${position[0]}${i}`);
    if (cell.children.length != 0) {
      if (cell.children[0].getAttribute("alt").split("")[0] === "w") {
        break;
      }
      if (cell.children[0].getAttribute("alt").split("")[0] === "b") {
        cell.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
        break;
      }
    }
    cell.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
  }
  for (let i = Number(position[1]) + 1; i <= 8; i++) {
    const cell = document.querySelector(`#${position[0]}${i}`);
    if (cell.children.length != 0) {
      if (cell.children[0].getAttribute("alt").split("")[0] === "w") {
        break;
      }
      if (cell.children[0].getAttribute("alt").split("")[0] === "b") {
        cell.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
        break;
      }
    }
    cell.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
  }

  // Section for printing possible row positions
  for (let i = letters.indexOf(position[0]) - 1; i >= 0; i--) {
    const cell = document.querySelector(`#${letters[i]}${position[1]}`);
    if (cell.children.length != 0) {
      if (cell.children[0].getAttribute("alt").split("")[0] === "w") {
        break;
      }
      if (cell.children[0].getAttribute("alt").split("")[0] === "b") {
        cell.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
        break;
      }
    }
    cell.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
  }
  for (let i = letters.indexOf(position[0]) + 1; i < 8; i++) {
    const cell = document.querySelector(`#${letters[i]}${position[1]}`);
    if (cell.children.length != 0) {
      if (cell.children[0].getAttribute("alt").split("")[0] === "w") {
        break;
      }
      if (cell.children[0].getAttribute("alt").split("")[0] === "b") {
        cell.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
        break;
      }
    }
    cell.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
  }
}
export { getRooks };
