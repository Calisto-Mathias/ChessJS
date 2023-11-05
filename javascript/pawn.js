const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
function getPawns() {
  const wp = [];
  const bp = [];
  for (let j = 0; j < 8; j++) {
    const wPawn = document.querySelector(`#${letters[j]}${7} img`);
    const bPawn = document.querySelector(`#${letters[j]}${2} img`);
    wp.push(wPawn);
    bp.push(bPawn);
    wPawn.addEventListener("mouseenter", pawnHoverWhite);
    wPawn.addEventListener("mouseout", pawnDehoverWhite);

    bPawn.addEventListener("mouseenter", pawnHoverBlack);
    bPawn.addEventListener("mouseout", pawnDehoverBlack);
  }
}
function pawnHoverWhite(event) {
  const pawn = event.target;
  const position = pawn.parentNode.id.split("");
  const letter_pos = letters.indexOf(position[0]);

  const cell1 = document.querySelector(
    `#${position[0]}${Number(position[1]) - 1}`
  );
  const cell2 = document.querySelector(
    `#${position[0]}${Number(position[1]) - 2}`
  );
  let cell3 = null;
  let cell4 = null;

  if (letter_pos != 0) {
    cell3 = document.querySelector(
      `#${letters[letter_pos - 1]}${Number(position[1]) - 1}`
    );
  }
  if (letter_pos != 7) {
    cell4 = document.querySelector(
      `#${letters[letter_pos + 1]}${Number(position[1]) - 1}`
    );
  }

  //cell 3 and cell 4 can be filled in any condition whatsoever;

  if (cell3 != null) {
    if (
      cell3.children.length != 0 &&
      cell3.children[0].getAttribute("alt").split("")[0] === "b"
    ) {
      cell3.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
    }
  }
  if (cell4 != null) {
    if (
      cell4.children.length != 0 &&
      cell4.children[0].getAttribute("alt").split("")[0] === "b"
    ) {
      cell4.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
    }
  }
  if (cell1.children.length === 0) {
    cell1.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
    if (cell2.children.length === 0 && position[1] === "7") {
      cell2.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
    }
  }
}
function pawnDehoverWhite(event) {
  const pawn = event.target;
  const position = pawn.parentNode.id.split("");
  const cell1 = document.querySelector(
    `#${position[0]}${Number(position[1]) - 1}`
  );
  const cell2 = document.querySelector(
    `#${position[0]}${Number(position[1]) - 2}`
  );
  const cell3 = document.querySelector(
    `#${letters[letters.indexOf(position[0]) - 1]}${Number(position[1]) - 1}`
  );
  const cell4 = document.querySelector(
    `#${letters[letters.indexOf(position[0]) + 1]}${Number(position[1]) - 1}`
  );

  if (cell1 != null) {
    if (cell1.innerHTML.includes(`<div class="grey"></div>`)) {
      cell1.removeChild(cell1.lastChild);
    }
  }
  if (cell2 != null) {
    if (cell2.innerHTML.includes(`<div class="grey"></div>`)) {
      cell2.removeChild(cell2.lastChild);
    }
  }
  if (cell3 != null) {
    if (cell3.innerHTML.includes(`<div class="grey"></div>`)) {
      cell3.removeChild(cell3.lastChild);
    }
  }
  if (cell4 != null) {
    if (cell4.innerHTML.includes(`<div class="grey"></div>`)) {
      cell4.removeChild(cell4.lastChild);
    }
  }
}

function pawnHoverBlack(event) {
  const pawn = event.target;
  const position = pawn.parentNode.id.split("");
  const letter_pos = letters.indexOf(position[0]);

  const cell1 = document.querySelector(
    `#${position[0]}${Number(position[1]) + 1}`
  );
  const cell2 = document.querySelector(
    `#${position[0]}${Number(position[1]) + 2}`
  );
  let cell3 = null;
  let cell4 = null;

  if (letter_pos != 0) {
    cell3 = document.querySelector(
      `#${letters[letter_pos - 1]}${Number(position[1]) + 1}`
    );
  }
  if (letter_pos != 7) {
    cell4 = document.querySelector(
      `#${letters[letter_pos + 1]}${Number(position[1]) + 1}`
    );
  }

  //cell 3 and cell 4 can be filled in any condition whatsoever;
  if (cell3 != null) {
    if (
      cell3.children.length != 0 &&
      cell3.children[0].getAttribute("alt").split("")[0] === "w"
    ) {
      cell3.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
    }
  }
  if (cell4 != null) {
    if (
      cell4.children.length != 0 &&
      cell4.children[0].getAttribute("alt").split("")[0] === "w"
    ) {
      cell4.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
    }
  }

  if (cell1.children.length === 0) {
    cell1.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
    if (cell2.children.length === 0 && position[1] === "2") {
      cell2.insertAdjacentHTML("beforeend", `<div class="grey"></div>`);
    }
  }
}
function pawnDehoverBlack(event) {
  const pawn = event.target;
  const position = pawn.parentNode.id.split("");
  const letter_pos = letters.indexOf(position[0]);

  const cell1 = document.querySelector(
    `#${position[0]}${Number(position[1]) + 1}`
  );
  const cell2 = document.querySelector(
    `#${position[0]}${Number(position[1]) + 2}`
  );
  let cell3 = null;
  let cell4 = null;

  if (letter_pos != 0) {
    cell3 = document.querySelector(
      `#${letters[letter_pos - 1]}${Number(position[1]) + 1}`
    );
  }
  if (letter_pos != 7) {
    cell4 = document.querySelector(
      `#${letters[letter_pos + 1]}${Number(position[1]) + 1}`
    );
  }
  if (cell1 != null) {
    if (cell1.innerHTML.includes(`<div class="grey"></div>`)) {
      cell1.removeChild(cell1.lastChild);
    }
  }
  if (cell2 != null) {
    if (cell2.innerHTML.includes(`<div class="grey"></div>`)) {
      cell2.removeChild(cell2.lastChild);
    }
  }
  if (cell3 != null) {
    if (cell3.innerHTML.includes(`<div class="grey"></div>`)) {
      cell3.removeChild(cell3.lastChild);
    }
  }
  if (cell4 != null) {
    if (cell4.innerHTML.includes(`<div class="grey"></div>`)) {
      cell4.removeChild(cell4.lastChild);
    }
  }
}

export { getPawns };
