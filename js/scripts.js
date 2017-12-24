/*This line of code defines that the JS should be executed strictly, so it will
allow only certain code*/
"use strict";

/*Immediately Invoked Function Expression (IFFE).
This IFFE function runs itself immediately*/
/*The IIFE below is used to hide and show the menu depending on screen size*/
(function(){

  let menuButton = document.getElementById("main-menu");
  let navMenu = document.getElementById("nav-menu");

  /*When the menu button is clicked, the 'toggleMenu' function should execute*/
  menuButton.addEventListener("click", toggleMenu);

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

})();

/*This IIFE is used to move the social media div from one parent div to another when screen size changes.
In the desktop view, the div will move from the nav to the header dynamically, code adapated from Mozilla Developer Network official code documentation*/
(function(){

  /*var to store the div id that will move upon screen size change*/
  let socialNode = document.getElementById("social-media");
  /*var to store the div id that will precede the div when after it has been moved*/
  let searchNode = document.getElementById("search");
  /*var for the JS to watch for any screen size changes*/
  const mq = window.matchMedia( "(min-width: 1000px)" );
  let navMenu = document.getElementById("nav-menu");

  /*If screen width is minimum 1000px...*/
  if (matchMedia) {
    mq.addListener(WidthChange);/*Add listener with the function as parameter*/
    WidthChange(mq);/*Call the WidthChange func and give the min width media as its parameter*/
  }

  // function that handles media query change logic
  function WidthChange(mq) {
    /*If width is min 1000px...*/
    if (mq.matches) {
    /*Insert social media div into header, just after the existing search div*/
      searchNode.parentNode.insertBefore(socialNode, searchNode.nextSibling);
    } else {
      navMenu.appendChild(socialNode);/*If not just leave the social media div where it is*/
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
