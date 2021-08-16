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
let sections = document.querySelectorAll('section');
// console.log(sections);
let myNav = document.getElementById('navbar__list');
//


// created for loop to get section name of each section with get id and link
for(let i= 0;i<sections.length;i++) {
    var listItem = document.createElement("li");// Create li for each item
    let sectionName = sections[i].getAttribute('data-nav');// or can i do it with another way like 
    // let sectionName = sections[i].getElementsByTagName('h2').firstChild.nodeValue;
    let sectionLink = sections[i].getAttribute('id'); // to get the id for each section 
    listItem.innerHTML = `<a class = 'menu__link' href ='#${sectionLink}'> ${sectionName}</a>`;
    myNav.appendChild(listItem); // add listitem to my nav
}



 //getBoundingClientRect return speace bettween the element and the top with speace bettwen left and top 
// there is another way to make with windows.scrollY but with getBoundingClientRect(); is more fit in this situation 
// made function with paramter section and return it with getbounding 
var ViewPort =  function(section){return (section.getBoundingClientRect().top >= 0);} // made function with paramater section and return it 
document.addEventListener('scroll' , function(){ // add event to the document with scroll 
 for (section of sections){ //created for loop for each section 
    //if the section in view port check this class your-active-class id isnot in the section add it 
    if (ViewPort(section)){ if(!section.classList.contains('your-active-class')){
            section.classList.add('your-active-class');
         }
    }else {
        // else removie the class name 
        section.classList.remove('your-active-class');   
    }
}
});


// there are many ways to make the scroll by css / jquery and js //  
// as in the project asking only to add js then i made it by js 
// add smooth scroll
let links = document.querySelectorAll(".navbar__menu ul a"); // defineding links
for (let link of links) { // made for loop to add eventlinter click
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

