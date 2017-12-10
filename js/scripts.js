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

//function that implements Google Maps API into the website
function initMap() {
  //the latitude and logitude of the location
  let audiOffice = {lat: 52.070469, lng: -0.737313};

  //get the HTML id of the map on the webpage
  let audiMap = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(audiMap, {
    zoom: 10,
    center: audiOffice
  });

  //marker on map
  let markerAudi = new google.maps.Marker({
    position: audiOffice,
    map: map
  });

  //displays information regarding the map marker
  var locationInfo = new google.maps.InfoWindow({
    content: "Audi UK Headquarters"
  });

  locationInfo.open(audiMap, markerAudi);
}
