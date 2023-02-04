import "./style.css";
import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";

const cleanContainer = function () {
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  createHome();
});

document.querySelector(".home").addEventListener("click", function () {
  cleanContainer();
  createHome();
});

document.querySelector(".menu").addEventListener("click", function () {
  cleanContainer();
  createMenu();
});

document.querySelector(".contact").addEventListener("click", function () {
  cleanContainer();
  createContact();
});
