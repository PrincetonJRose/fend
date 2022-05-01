// console.log('This page was loaded! Yay~ 😄')



const navbarList = document.getElementById('navbar__list')
// console.log(navbarList)

const navbar = document.getElementsByClassName('navbar__menu')[0]
// console.log(navbar)

const sections = document.getElementsByTagName('section')
// console.log(sections)




let buildNavbar =()=> {
    for ( let section of sections ) {
        let li = document.createElement('li')

        let span = document.createElement('span')
        span.classList += 'menu__link'
        span.innerText = section.dataset.nav
        span.dataset.id = section.id

        li.appendChild(span)
        navbarList.appendChild(li)
    };
}

navbarList.onclick = (event)=> {
    if ( event.target.className.includes('menu__link') )
        sections[`${event.target.dataset.id}`].scrollIntoView({ behavior: "smooth" })
}


buildNavbar()



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


