const box = document.querySelector("div.box");

const rect = box.getBoundingClientRect();

console.log(rect);


window.addEventListener('scroll', function () {
console.log(box.getBoundingClientRect().top,window.innerHeight);

    if (box.getBoundingClientRect().top < window.innerHeight) {
      box.style.background = 'red';
    }
});


