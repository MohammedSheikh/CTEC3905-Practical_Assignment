/*This line of code defines that the JS should be executed strictly, so it will
allow only certain code*/
"use strict";

/*Immediately Invoked Function Expression (IFFE).
This IFFE function runs itself immediately*/
(function(){

  let menuButton = document.getElementById("main-menu");
  let navMenu = document.getElementById("nav-menu");
  
  let searchButton = document.getElementById("activate-search");
  let searchPage = document.getElementById("search-page");

  /*When the menu button is clicked, the 'toggleMenu' function should execute*/
  menuButton.addEventListener("click", toggleMenu);
  
  searchButton.addEventListener("click", toggleSearchBar);

  let toggle = false; // the 'menu' button hidden at first

  //this menu hides/unhides menu depending on the screen size
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
  
  //this menu hides/unhides menu depending on the screen size
  function toggleSearchBar(){
    if (toggle) { // if menu is visible...
      searchPage.classList.remove("display-search-bar"), // ...hide the menu
      toggle = false
    }
    else { // false: it's hidden
      searchPage.classList.add("display-search-bar"), // show the menu
      toggle = true
    }
  }

})();

(function(){

  let socialNode = document.getElementById("social-media");
  let searchNode = document.getElementById("search");
  const mq = window.matchMedia( "(min-width: 1000px)" );
  let navMenu = document.getElementById("nav-menu");

  if (matchMedia) {
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    searchNode.parentNode.insertBefore(socialNode, searchNode.nextSibling);
  } else {
    navMenu.appendChild(socialNode);
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
  let locationInfo = new google.maps.InfoWindow({
    content: "<b>Audi UK Headquarters</b> <p> Yeomans Drive Blakelands <p> MILTON KEYNES <p> MK14 5AN"
  });

  locationInfo.open(audiMap, markerAudi);

  /*Here I have added a DOM listener that 'listens' when window is resized.
  I have added this as the center marker was staying in same place when I was
  resizing window, code used from: https://gist.github.com/toddmotto/5477991*/
  google.maps.event.addDomListener(window, 'resize', function() {
    let center = map.getCenter()
    google.maps.event.trigger(map, "resize")
    map.setCenter(center)
  })
}
