// Query selector All lets you find a list of element that match the cSS selector

const boxes = document.querySelectorAll(".box");
console.log(boxes);         // [div.box, div.box, div.box];

boxes.forEach((e) => {
    e.style.color = 'red';
});


// const items = document.querySelectorAll("li");
// console.log(items);    // [li, 6 time]


const list2 = document.querySelector("#list2");
const items = list2.querySelectorAll("li");
console.log(items)        // list2- [li, 3 time]

