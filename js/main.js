let card = document.querySelectorAll(".card");
let cards = Array.from(card);
let cards_container = document.querySelector(".cards_box");
let random_order = new Set();
let overlay = document.querySelector(".overlay");
let start = document.querySelector(".overlay button");
let name_field = document.querySelector(".upper .name");
let tries_field = document.querySelector(".upper .tries");
let two_cards = [];
let i = 0;
start.addEventListener("click", () => {
  let myname = prompt("what is your name: ");
  if (myname == "" || myname == null) {
    name_field.textContent = "name : undifiend";
  } else {
    name_field.textContent = "name : " + myname;
  }
  overlay.style.cssText = "display:none;";
  flipp_then_hide();
});
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    setTimeout(() => {
      check(card);
    }, 500);
  });
});
function check(card) {
  two_cards.push(card);
  if (two_cards.length == 2) {
    if (two_cards[0].dataset.tech === two_cards[1].dataset.tech) {
      two_cards.forEach((card) => {
        card.classList.add("matched");
      });
      two_cards = [];
    } else {
      two_cards[0].classList.remove("flipped");
      two_cards[1].classList.remove("flipped");
      two_cards = [];
      tries_field.textContent++;
    }
  }
}
function flipp_then_hide() {
  cards.forEach((e) => {
    e.classList.add("flipped");
    setTimeout(() => {
      e.classList.remove("flipped");
    }, 5000);
  });
}
function randomize() {
  random_order.size = 0;
  while (random_order.size != card.length) {
    random_order.add(Math.floor(Math.random() * card.length));
  }
  random_order.forEach((element) => {
    cards_container.appendChild(card[element]);
  });
}
randomize();
