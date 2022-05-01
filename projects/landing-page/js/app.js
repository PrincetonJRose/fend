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
 * 
*/
const navbarList = document.getElementById('navbar__list')
console.log(navbarList)

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

        let aTag = document.createElement('a')
        aTag.classList += 'menu__link'
        aTag.href = `#${section.id}`
        aTag.innerText = section.dataset.nav

        li.appendChild(aTag)
        navbarList.appendChild(li)
    };
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

buildNavbar()
