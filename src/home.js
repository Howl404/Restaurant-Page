export { createHome };
const createHome = function () {
  const face = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerHTML = "Le Coq Francais";

  face.classList.add("face");

  const info = document.createElement("div");
  const infoParagraph = document.createElement("p");

  infoParagraph.innerHTML =
    '"Le Coq Francais" is a restaurant in the center of Paris dedicated to traditional French cuisine. The cozy interior with a contemporary flair invites guests to enjoy high-class cuisine prepared with fresh ingredients. Pleasant atmosphere, friendly staff, delicious cuisine - all this awaits you at "Le Coq Francais"';

  info.classList.add("info");

  const hours = document.createElement("div");
  hours.classList.add("hours");

  const h2 = document.createElement("h2");
  h2.innerHTML = "Hours";

  const hoursCenter = document.createElement("div");
  hoursCenter.classList.add("hours-center");

  const sunday = document.createElement("p");
  sunday.innerHTML = "Sunday: 12am - 10pm";
  const monday = document.createElement("p");
  monday.innerHTML = "Monday: 12am - 10pm";
  const tue = document.createElement("p");
  tue.innerHTML = "Tuesday: 12am - 10pm";
  const wed = document.createElement("p");
  wed.innerHTML = "Wednesday: 12am - 10pm";
  const thu = document.createElement("p");
  thu.innerHTML = "Thursday: 12am - 10pm";
  const friday = document.createElement("p");
  friday.innerHTML = "Friday: 12am - 10pm";
  const saturday = document.createElement("p");
  saturday.innerHTML = "Saturday: 12am - 10pm";

  const location = document.createElement("div");
  location.classList.add("location");
  const locationH2 = document.createElement("h2");
  locationH2.innerHTML = "Location";

  const locationAddress = document.createElement("div");
  locationAddress.innerHTML = "Champ de Mars, 5 Av. Anatole France, Paris";

  const content = document.getElementById("content");
  content.appendChild(face);
  face.appendChild(h1);

  content.appendChild(info);
  info.appendChild(infoParagraph);

  content.appendChild(hours);
  hours.appendChild(h2);
  hours.appendChild(hoursCenter);

  hoursCenter.appendChild(sunday);
  hoursCenter.appendChild(monday);
  hoursCenter.appendChild(tue);
  hoursCenter.appendChild(wed);
  hoursCenter.appendChild(thu);
  hoursCenter.appendChild(friday);
  hoursCenter.appendChild(saturday);

  content.appendChild(location);
  location.appendChild(locationH2);
  location.appendChild(locationAddress);
};
