/*This line of code defines that the JS should be executed strictly, so it will
allow only certain code*/
"use strict";

/*Immediately Invoked Function Expression (IFFE).
This IFFE function runs itself immediately*/
(function(){

  let menuButton = document.getElementById("main-menu");
  let navMenu = document.getElementById("nav-menu");

  /*When the menu button is clicked, the 'toggleMenu' function should execute*/
  menuButton.addEventListener("click", toggleMenu);

  let toggle = false; // the 'menu' button hidden at first
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

function initMap() {
  let leicester = {lat: 52.6333, lng: -1.1333};
  let dmu = {lat: 52.629311, lng: -1.137836};
  let uol = {lat: 52.620956, lng: -1.124049};
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 13,
    center: leicester
  });

  // these set different markers you want to show on your map
  let markerDMU = new google.maps.Marker({
    position: dmu,
    map: map,
    title: 'The Good Guys'
  });
  let markerUoL = new google.maps.Marker({
    position: uol,
    map: map,
    title: 'The Bad Guys'
  });
}
