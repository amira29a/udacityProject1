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
 * Define Global Variables
*/
// define variables  
let sections = Array.from (document.querySelectorAll('section'));
let menuList = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//defineding elements

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// Build menu 

//i have created array to select all sections and make a function to unordered list
function createList(){ // create funtion called createdlist to create list of links
    for (section of sections){
     // created for loop to get section name of each section 
        sectionName = section.getAttribute('data-nav');
        sectionLink = section.getAttribute('id');
        listLinks = document.createElement('li');
        //create menu list of each section and add in nav menu in the top 
        listLinks.innerHTML = `<a class = 'menu__link' href ='#${sectionLink}'> ${sectionName}</a>`;
        menuList.appendChild(listLinks);
    }
}

// Add class 'active' to section when near top of viewport
function sectionViewPort (e){
    // to know where 
    let sectionPort = e.getBoundingClientRect();
    //getBoundingClientRect return speace bettween the element and the top with speace bettwen left and top 
    return (sectionPort.top >= 0);

}
// add class active and style by adding your-active-class
function activeClass(){
    //created for loop for each section 
    for (section of sections){
        //if the section in view port check this class your-active-class id isnot in the section add it 
        if (sectionViewPort(section)){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');

            }
        }else {
            // else removie the class name 
            section.classList.remove('your-active-class');
        
        }
    }
}


createList();
document.addEventListener('scroll' , activeClass);
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/


// there are menu ways to make the scroll by css / jquery and js //  
// as in the project asking only to add js then i made it by js 
// add smooth scroll
let links = document.querySelectorAll(".navbar__menu ul a"); // defineding links
// made for loop to add eventlinter click
for (let link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  let href = this.getAttribute("href");
  let offsetTop = document.querySelector(href).offsetTop;
// scroll behavior 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}









