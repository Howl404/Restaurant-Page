export { createContact };

import pierre from "./pierre.png";
import amelie from "./amelie.png";
import marcel from "./marcel.png";

const contactList = [
  {
    name: "Pierre Dubois",
    role: "Chef de Cuisine",
    phone: "+33 6 12 34 56 78",
    email: "pierre.dubois@restaurant.fr",
    image: pierre,
  },
  {
    name: "Amélie Rousseau",
    role: "Sommelier",
    phone: "+33 6 87 65 43 21",
    email: "amelie.rousseau@restaurant.fr",
    image: amelie,
  },
  {
    name: "Marcel Leclerc",
    role: "Maître d'hôtel",
    phone: "+33 6 23 45 67 89",
    email: "marcel.leclerc@restaurant.fr",
    image: marcel,
  },
];

const createContact = function () {
  const face = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerHTML = "Contact Us";

  face.classList.add("face");

  const content = document.getElementById("content");
  content.appendChild(face);
  face.appendChild(h1);

  for (let i = 0; i < contactList.length; i++) {
    const item = document.createElement("div");
    const h3 = document.createElement("h3");
    const infoDiv = document.createElement("div");
    const image = document.createElement("img");
    const textDiv = document.createElement("div");

    const role = document.createElement("p");
    const phone = document.createElement("p");
    const email = document.createElement("p");

    infoDiv.classList.add("info-div");
    image.classList.add("image");
    textDiv.classList.add("text-div");
    item.classList.add("item-container");

    item.appendChild(h3);
    item.appendChild(infoDiv);
    infoDiv.appendChild(textDiv);
    infoDiv.appendChild(image);

    textDiv.appendChild(role);
    textDiv.appendChild(phone);
    textDiv.appendChild(email);

    h3.innerHTML = contactList[i].name;

    role.innerHTML = contactList[i].role;
    phone.innerHTML = contactList[i].phone;
    email.innerHTML = contactList[i].email;

    image.src = contactList[i].image;

    content.appendChild(item);
  }
};
