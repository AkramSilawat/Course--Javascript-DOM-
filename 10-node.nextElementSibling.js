const applesItem = document.querySelector("#myList > li:first-of-type");

const bananasItem = applesItem.nextElementSibling;

// const bananasItem = applesItem.nextSibling;    // --> Text 

console.log(bananasItem);



const nav = document.querySelector("nav")

const belowNav = nav.nextElementSibling;

belowNav.style.marginTop = nav.clientHeight + "px";