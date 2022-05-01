// console.log('This page was loaded! Yay~ 😄')

/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * Grabbing the main HTML elements I'll need for manipulation
*/
const navbarList = document.getElementById('navbar__list')
console.log(navbarList)

const navbar = document.getElementsByClassName('navbar__menu')[0]
console.log(navbar)

const sections = document.getElementsByTagName('section')
console.log(sections)
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let buildNavbar =()=> {
    for ( let section of sections ) {
        let li = document.createElement('li')

        let span = document.createElement('span')
        span.classList += 'menu__link'
        span.innerText = section.dataset.nav
        scrollToSection( span, section )

        li.appendChild(span)
        navbarList.appendChild(li)
    };
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
let scrollToSection =( span, section )=> span.onclick = (e)=> {
    console.log( span, section )
    section.scrollIntoView({
        behavior: "smooth"
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

buildNavbar()
