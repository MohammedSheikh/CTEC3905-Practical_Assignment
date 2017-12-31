# CTEC3905-Practical_Assignment

# Intro

The website that I am creating is a fansite for Audi cars as I am a fan myself. I will be using standards-compliant HTML5, CSS3 and JavaScript ES6 code. The site will contain information about the Audi brand including history, gallery and information regarding current Audi cars.

# Screen Designs

## Please download the files to view the various developmental screen designs:

[1. First-Design.pdf](https://github.com/MohammedSheikh/CTEC3905-Practical_Assignment/files/1593995/1.First-Design.pdf)

[2. Second-Design.pdf](https://github.com/MohammedSheikh/CTEC3905-Practical_Assignment/files/1593996/2.Second-Design.pdf)

[3. Third-Design.pdf](https://github.com/MohammedSheikh/CTEC3905-Practical_Assignment/files/1593998/3.Third-Design.pdf)

[4. Wireframe_Mobile.pptx](https://github.com/MohammedSheikh/CTEC3905-Practical_Assignment/files/1593999/4.Wireframe_Mobile.pptx)

# Design Journey

I initially sketched out my ideas with pen and paper to map out a layout plan of my website in all the screen sizes (mobile, tablet and desktop). This was just a general layout of my website theme, rather than a design of all content within the pages (First-Design.pdf).

I then created another design draft (Second-Design.pdf) in which I evolved the design by including more details such as social media links and navigation menus.

In my third design (Third-Design.pdf), where I was able to consolidate many ideas into one- this roughly represented my final design. I included how the search bar would pop out and how the social media icons would appear at different screen sizes. One of the things I changed from my second to third design was the position of the menu from the left hand side to the right, in mobile view. Studies show that roughly 88% of the world is right handed (source:Google), therefore I thought that since it is more likely that a right-handed person would use the website, I put the menu on the right hand side.

I also created another Wireframe on PowerPoint (Wireframe_Mobile.pptx) in which I created another neater design to complement my paper designs.

# Site Diagram

## This is my site diagram which shows the navigation and content plan of my website:

![site-diagram](https://user-images.githubusercontent.com/16736330/34449652-8eef0586-ecf2-11e7-8086-f602ff563e31.png)

# Development Process and Issues Solved

08/12... so far, dilemma whether to use flexbox or grid. though of using grid initially but since it is releatively new comparerd to flexbox, it has some browser compatibility issues. since no time to make sure exact which issues, i  go with flexbox instead.

i had another issue where the image logo used wasnt scaling well, but i fixed by setting width to 100% of parent div so that whatever the div is, it will fit, instead of going too wide.

had many ideas, made list of what type of content to include looking at car websites, as my deve preocess went, i ended up deleting a couple of pages as i though no need to have entire page for just that

Used branch to test maps, APIs, etc

http://wesbos.com/es6-block-scope-iife/   .... read this to undertsnad IFFE

https://storage.googleapis.com/gtspirit/uploads/2017/04/Audi-R8-V10-Audi-Sport-Edition-11.jpg   ... audi r8 homepage banner

10/12
 embedding google maps api, had issues with puting in dsperate file but solv=ed by async defer and changing order of script. created 'feature branch' to test on it and it wont affect master, i will i ncorprate later if good, had issues with error that said 'api not activated' , turns out i had to go ot API manager and 'enable' the API key on google account

soon..talk about keyframes or css erros and how i solved it.

11/12 .. i used stack  overflow (https://stackoverflow.com/questions/47749243/html-custom-not-font-awesome-icon-class-not-working/47751282#47751282) to solve issue regarding non-font awesome icon image for search bar, I am undedstanfing flexbox- i like it, very easy to use model

https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_overlay_fade   -  image hover overlay social media icons adapted from W3c

12/12: fixed big probelm with search bar
somneone said social media should be at top, more accessible. thats why i did new branch, took time to setup

13/12: researtched a lot appendNode- i wanted to move element  from one to another- also researched JS media query...https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList


14/12: Rsearched IIFE...http://gregfranko.com/blog/i-love-my-iife/, only one js- reduce no. of requests mae to server...It basically seals the code inside the function so that other libraries don't interfere with it. It's similar to creating a namespace in compiled languages.
IIFE is a function expression that automatically invokes after completion of the definition

15/12: lot of reaesarching append and checking if stuff changes when JS media query changes, tested by cosole.log, understood IIFE's

16/12: got append working, resolved conflict betrween branches due to lots of changes-learning a lot,

17/12:  + social media, considered video tag stuff, had to add breakpoint between large and medium to make nav fit..

18/12:made few changes (alt tags etc) cos ofa ccessibility checker (removed decortiave image alt tags)....https://www.w3.org/WAI/tutorials/images/decorative/     ...the w3c and accesiblity checker websites saying opposite things-in the end i left it so it valifates....modal search box

24/12: finished homepage, sorted search bar

25/12: noticed bug where social media was moving when clicking on homepage link, spotted that i left 'query' as 'mq', added ARIA

26/12 : talk abpout consistent color schemen, grey ,white, black...  looked at slideshows...https://www.w3schools.com/w3css/w3css_slideshow.asp

27:12: sorted slideshow with event listener errors. and then current lineup page

28/12: sorted bug where the search bar was not aloigned on mobile, flickr api, go to top


Flickr didnt work!, then did normal search flickr API using labwork

29/12: nth child , 3d effect...https://stackoverflow.com/questions/41461101/flip-a-3d-card-with-css
...https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_timeline  - timeline



# Usability and Information Architecture

I always intended to make the website user friendly and accessible for people with certain disabilities. That is why I extensively used semantic tags throughout my website (to cater for screen readers), used 'alt' tags for all images (for the same reason), and also used ARIA features in some places. To minimze the cognitive load on users, I applied the elements strategically and made sure to not include too much information on one page.

To conform to the 'PARC' principles:

* I ensured that the colours contrasted well and were as complementary as possible. For example I used white text on black background or vice versa.
want to make the website very easy for people.

* I placed similar elements together in proximity (such as the social media icons).

* I ensured that the same colour theme was represented throughout my website to achieve good repetition.

* I made sure to align all elements properly in mobile, tablet and desktop views as much as possible.

# Testing

I used the following questionnaire on family and friends as it was designed by UX researchers. Much of the feedback was extremely positive:

![questionnaire](https://user-images.githubusercontent.com/16736330/34449730-84f3a414-ecf3-11e7-885d-6e9d03cf99ee.PNG)

# References

### To understand IIFE's, I read this great tutorial:

* http://wesbos.com/es6-block-scope-iife/

### I used this W3 Schools tutorial to help me to design an overlay feature for my search bar:

* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_overlay_fade

### To solve the JS element append issue (for the social media icons), I used the official MDN documentation:

* https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList

### To implement the slideshow on the 'Gallery' page, I used W3 Schools:

* https://www.w3schools.com/w3css/w3css_slideshow.asp

### I made use of Stack Overflow to create the CSS animations on 'The Future' page:

* https://stackoverflow.com/questions/41461101/flip-a-3d-card-with-css

### To create the timeline feature on the 'History' page, I used:

* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_timeline
