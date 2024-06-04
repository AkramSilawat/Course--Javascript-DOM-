const h2Title = document.getElementById("title");


// Get the outerHTML
console.log(h2Title.outerHTML);


// Change the outerHTML

h2Title.outerHTML = "<div id='dom'> I've been changed! Element.outerHTML - JS DOM - dcode</div>";