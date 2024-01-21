
// grabbing the links
let featuresLink = document.querySelector("#features-link")
let companyLink = document.querySelector("#company-link")


// grabbing the arrow image container
let featuresArrow = document.querySelector("#f-arrow")
let companyArrow = document.querySelector("#c-arrow")

// grabbing the sub-menus
let subMenuOne = document.querySelector("#sub-menu-1")
let subMenuTwo = document.querySelector("#sub-menu-2")

// grabbing the hamburger menu and close button
let mobileMenuOpen = document.querySelector("#hamburger-btn")
let mobileMenuClose = document.querySelector("#close-btn")

// grab the mobile menu
let mobileMenu = document.querySelector("#mob-menu")


featuresLink.addEventListener("click", function () {

    let featuresValue = featuresArrow.src //get the value of the src from the image tag

    //if the arrow is pointing down, when the link is clicked the arrow image to be replaced by the up pointing image.

    // we can add a safety check by adding a comparison checking the current class of the collapsale menu block if its on or off.

    if (featuresValue == "http://127.0.0.1:5500/icon-arrow-down.svg") {

        // changes the arrow image to point upwards expanding the collapsable menu
        featuresArrow.src = "http://127.0.0.1:5500/icon-arrow-up.svg"

        // opening the menu
        subMenuOne.style.display = "flex"
    }
    else if (featuresValue == "http://127.0.0.1:5500/icon-arrow-up.svg") {

        // changes the arrow image to point upwards collapse the collapsable menu
        featuresArrow.src = "http://127.0.0.1:5500/icon-arrow-down.svg"

        // closing the menu
        subMenuOne.style.display = "none"

    }
    else {
        null
    }
})


companyLink.addEventListener("click", function () {

    let companyValue = companyArrow.src //get the value of the src from the image tag

    //if the arrow is pointing down, when the link is clicked the arrow image to be replaced by the up pointing image.

    // we can add a safety check by adding a comparison checking the current class of the collapsale menu block if its on or off.

    if (companyValue == "http://127.0.0.1:5500/icon-arrow-down.svg") {

        // changes the arrow image to point upwards expanding the collapsable menu
        companyArrow.src = "http://127.0.0.1:5500/icon-arrow-up.svg"

        // opening the menu
        subMenuTwo.style.display = "flex"
    }
    else if (companyValue == "http://127.0.0.1:5500/icon-arrow-up.svg") {

        // changes the arrow image to point upwards collapse the collapsable menu
        companyArrow.src = "http://127.0.0.1:5500/icon-arrow-down.svg"

        // closing the menu
        subMenuTwo.style.display = "none"

    }
    else {
        null
    }
})

// added a class name features arrow on the image itself in the HTML document.

// referenced the class in javascript.

// try to extract the current value of the src to toggle.




// FUNCTIONALITY OF THE MOBILE MENU

// reference the hamburger menu button and the close button

// when the hamburg button is pressed change the display style of the nav to flex.

// when the close button is pressed change the display property to none

mobileMenuOpen.addEventListener("click", function () {
    let openDisplay = mobileMenuOpen.style.display
    let className = mobileMenu.className

    console.log(openDisplay)
    if (className == "off") {
        mobileMenu.className = "on"
    }

    else if (className == "on") {
        mobileMenu.className = "off"
    }

    else {
        null
    }
})


mobileMenuClose.addEventListener("click", function () {

    let className = mobileMenu.className

    console.log(className)
    if (className == "off") {
        mobileMenu.className = "on"
    }

    else if (className == "on") {
        mobileMenu.className = "off"
    }

    else {
        null
    }
})