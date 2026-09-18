// Menu: each dish has its own emoji, so the picture always matches the name
// (no external image links that can break or show the wrong food).
const menu = [
  { name: "Pizza",        emoji: "🍕", note: "A classic that never fails" },
  { name: "Sushi",        emoji: "🍣", note: "Light and fresh" },
  { name: "Burger",       emoji: "🍔", note: "For a really hungry day" },
  { name: "Ramen",        emoji: "🍜", note: "Warm and filling" },
  { name: "Tacos",        emoji: "🌮", note: "Crunchy and spicy" },
  { name: "Salad",        emoji: "🥗", note: "Something green today" },
  { name: "Dumplings",    emoji: "🥟", note: "Pelmeni or gyoza, your call" },
  { name: "Curry",        emoji: "🍛", note: "Rice with a kick" },
  { name: "Pasta",        emoji: "🍝", note: "Carbonara or bolognese" },
  { name: "Shawarma",     emoji: "🥙", note: "Quick lunch on the go" },
  { name: "Pancakes",     emoji: "🥞", note: "Bliny count as lunch" },
  { name: "Soup",         emoji: "🍲", note: "Borscht, anyone?" },
];

const emojiEl = document.getElementById("dishEmoji");
const nameEl  = document.getElementById("dishName");
const noteEl  = document.getElementById("dishNote");
const button  = document.getElementById("pickBtn");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lastIndex = -1;

// Random index, never the same dish twice in a row
function randomIndex() {
  let i;
  do {
    i = Math.floor(Math.random() * menu.length);
  } while (menu.length > 1 && i === lastIndex);
  return i;
}

function show(dish) {
  emojiEl.textContent = dish.emoji;
  emojiEl.setAttribute("aria-label", dish.name);
}

function pickLunch() {
  const finalIndex = randomIndex();
  lastIndex = finalIndex;
  const dish = menu[finalIndex];

  if (reduceMotion) {
    land(dish);
    return;
  }

  // Short "slot machine" roll before landing on the pick
  button.disabled = true;
  emojiEl.classList.remove("landed");
  emojiEl.classList.add("rolling");
  nameEl.textContent = "Choosing…";
  noteEl.innerHTML = "&nbsp;";

  let ticks = 0;
  const roll = setInterval(() => {
    show(menu[Math.floor(Math.random() * menu.length)]);
    if (++ticks >= 12) {
      clearInterval(roll);
      land(dish);
    }
  }, 70);
}

function land(dish) {
  show(dish);
  emojiEl.classList.remove("rolling");
  void emojiEl.offsetWidth; // restart the pop animation
  emojiEl.classList.add("landed");
  nameEl.textContent = `Today: ${dish.name}!`;
  noteEl.textContent = dish.note;
  button.disabled = false;
}

button.addEventListener("click", pickLunch);
