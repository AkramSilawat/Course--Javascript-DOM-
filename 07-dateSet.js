const myDiv = document.getElementById('myDiv');

myDiv.dataset.name = 'Bob';

myDiv.dataset.startedCodingAt = 8;

myDiv.dataset.name = '';

myDiv.removeAttribute('data-name')

console.log(myDiv.dataset);