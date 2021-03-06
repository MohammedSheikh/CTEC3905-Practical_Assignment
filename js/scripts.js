/*This line of code defines that the JS should be executed strictly, so it will
allow only certain code*/
"use strict";

/*Immediately Invoked Function Expression (IFFE).
This IFFE function runs itself immediately*/
/*The IIFE below is used to hide and show the menu depending on screen size*/
(function() {

    let menuButton = document.getElementById("main-menu");
    let navMenu = document.getElementById("nav-menu");

    /*When the menu button is clicked, the 'toggleMenu' function should execute*/
    menuButton.addEventListener("click", toggleMenu);

    let toggle = false; // the 'menu' button hidden at first

    //this menu hides/unhides menu depending on the screen size
    function toggleMenu() {
        if (toggle) { // if menu is visible...
            navMenu.classList.remove("display-menu"), // ...hide the menu
                toggle = false
        } else { // false: it's hidden
            navMenu.classList.add("display-menu"), // show the menu
                toggle = true
        }
    }

})();

/*IIFE that handles the Flickr search API on the 'Current Lineup' page*/
(function() {

    let queryBox = document.getElementById("flickr-query");
    //Flickr search form
    let searchForm = document.getElementById("search-flickr");
    //element which will hold the Flickr data
    let content = document.getElementById("flickr-content");

    //construct base URL
    let baseURL = "https://api.flickr.com/services/rest/? \
                method=flickr.photos.search& \
                api_key=fc23f7e0b30130ea4e3bd09af8b86643& \
                format=json& \
                per_page=5& \
                nojsoncallback=1& \
                tags=";

    //if search form exists...
    if (searchForm) {
        //add event listener that listens to 'Submit' event
        searchForm.addEventListener("submit", function(ev) {
            let url = baseURL + queryBox.value;
            //URL property of the request
            let request = new Request(url);
            //'Fetch' allows us to fetch resources
            fetch(request)
                /*the Promise is returned (will return a value sometime in the future- a
       resolved or unresolved value)*/
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    let theData = "";
                    let tmp = data.photos.photo;
                    //for item in object...
                    for (let key in tmp) {
                        //set the url
                        let url = `https://farm${tmp[key].farm}.staticflickr.com/${tmp[key].server}/${tmp[key].id}_${tmp[key].secret}_z.jpg`;
                        theData += `<img src="${url}" alt="${tmp[key].title}">`;
                    }
                    //place the data in the required element
                    content.innerHTML = theData;
                });
            queryBox.value = "";
            //do not trigger the default action of the event
            ev.preventDefault();
        }, false);
    }

}());

/*This IIFE is used to move the social media div from one parent div to another
when screen size changes. In the desktop view, the div will move from the nav
to the header dynamically, code adapated from Mozilla Developer Network
official code documentation*/
(function() {

    /*var to store the div id that will move upon screen size change*/
    let socialNode = document.getElementById("social-media");
    /*var to store the div id that will precede the div after it's been moved*/
    let searchNode = document.getElementById("search");
    /*var for the JS to watch for any screen size changes*/
    const query = window.matchMedia("(min-width: 1000px)");
    let navMenu = document.getElementById("nav-menu");

    /*If screen width is minimum 1000px...*/
    if (matchMedia) {
        /*Add listener with the function as parameter*/
        query.addListener(WidthChange);
        /*Call the WidthChange func and give the min width media as its parameter*/
        WidthChange(query);
    }

    // function that handles media query change logic
    function WidthChange(query) {
        /*If width is min 1000px...*/
        if (query.matches) {
            /*Insert social media div into header, just after the existing search div*/
            searchNode.parentNode.insertBefore(socialNode, searchNode.nextSibling);
        } else {
            /*If not, just leave the social media div where it is*/
            navMenu.appendChild(socialNode);
        }
    }

})();

//this IIFE hides the other pics and shows the one that is active
(function() {

    //back arrow button slideshow
    let backArrow = document.getElementById("back-arrow");
    //forward arrow button slideshow
    let forwardArrow = document.getElementById("forward-arrow");
    //set the slideshow to the first picture
    let slideIndex = 1;
    //call the showDivs() method to display the first picture
    showDivs(slideIndex);
    //when user clicks arrow buttons, call this method
    function plusDivs(n) {
        //this func either subtracts from or adds to the first pic (slideIndex)
        showDivs(slideIndex += n);
    }
    //this func hides the other pics and shows the one that is active
    function showDivs(n) {
        let i;
        let slides = document.getElementsByClassName("slides");
        //if slideIndex is higher than amount of items, set it to zero
        if (n > slides.length) {
            slideIndex = 1;
        }
        //if slideIndex is less than 1, set it to amount of items
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        //check if slideshow element exists..
        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
        }
    };
    //if there is a back arrow element, add event listener
    if (backArrow) {
        backArrow.addEventListener("click", function() {
            //move backward in array
            plusDivs(-1)
        });
    }
    //if there is a forward arrow element, add event listener
    if (forwardArrow) {
        forwardArrow.addEventListener("click", function() {
            //move forward in array
            plusDivs(1)
        });
    }
})();

//function that implements Google Maps API into the website
function initMap() {
    //the latitude and logitude of the location
    let audiOffice = {
        lat: 52.070469,
        lng: -0.737313
    };
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
        content: "<b>Audi UK Headquarters</b> <p> Yeomans Drive, \
     Blakelands <p> MILTON KEYNES <p> MK14 5AN"
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
