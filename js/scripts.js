"use strict";

(function(){

  let menuButton = document.getElementById("mainMenu");
  let navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false; // hidden at first
  function toggleMenu(){
    if (toggle) { // if menu is visible...
      navMenu.classList.remove("displayMenu"), // ...hide the menu
      toggle = false
    }
    else { // false: it's hidden
      navMenu.classList.add("displayMenu"), // show the menu
      toggle = true
    }
  }

})();
