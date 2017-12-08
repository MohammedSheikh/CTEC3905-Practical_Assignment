//This line of code defines that the JS should be executed strictly, so it will
//allow only certain code
"use strict";

(function(){

  let menuButton = document.getElementById("main-menu");
  let navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false; // hidden at first
  function toggleMenu(){
    if (toggle) { // if menu is visible...
      navMenu.classList.remove("display-menu"), // ...hide the menu
      toggle = false
    }
    else { // false: it's hidden
      navMenu.classList.add("display-menu"), // show the menu
      toggle = true
    }
  }

})();
