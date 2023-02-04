export { createMenu };

import escargots from "./escargots.jpeg";
import soupe from "./soupe.jpg";
import coq from "./coq.jpg";
import creme from "./creme.png";
import tarte from "./tarte.jpg";
import magret from "./magret.jpg";
import sole from "./sole.jpeg";

const menuList = [
  {
    name: "Escargots de Bourgogne",
    text: "Snails in garlic butter sauce, a popular traditional French dish.",
    image: escargots,
    price: 12,
  },
  {
    name: "Soupe à l'oignon",
    text: "A hearty onion soup topped with a crouton and melted Gruyere cheese.",
    image: soupe,
    price: 10,
  },
  {
    name: "Coq au vin",
    text: "Chicken cooked in red wine with mushrooms, onions, and bacon.",
    image: coq,
    price: 22,
  },
  {
    name: "Crème brûlée",
    text: "A creamy dessert with a caramelized sugar topping.",
    image: creme,
    price: 8,
  },
  {
    name: "Tarte Tatin",
    text: "A caramelized apple tart, upside-down and served warm with vanilla ice cream.",
    image: tarte,
    price: 10,
  },
  {
    name: "Sole Meunière",
    text: "A classic French dish, pan-fried sole with brown butter sauce and lemon.",
    image: sole,
    price: 24,
  },
  {
    name: "Magret de Canard",
    text: "A succulent duck breast served with a cherry reduction and seasonal vegetables.",
    image: magret,
    price: 26,
  },
];

const createMenu = function () {
  const face = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerHTML = "Menu";

  face.classList.add("face");

  const content = document.getElementById("content");
  content.appendChild(face);
  face.appendChild(h1);

  for (let i = 0; i < menuList.length; i++) {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");

    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const priceAndImage = document.createElement("div");
    const price = document.createElement("h3");
    const image = document.createElement("img");

    h3.classList.add("item-main");
    p.classList.add("item-text");
    price.classList.add("item-price");
    priceAndImage.classList.add("item-flex");

    h3.innerHTML = menuList[i].name;
    p.innerHTML = menuList[i].text;
    price.innerHTML = `${menuList[i].price}$`;
    image.src = menuList[i].image;
    image.classList.add("image");

    content.appendChild(itemContainer);
    itemContainer.appendChild(h3);
    itemContainer.appendChild(p);
    itemContainer.appendChild(priceAndImage);
    priceAndImage.appendChild(price);
    priceAndImage.appendChild(image);
  }
};
