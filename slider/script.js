var images = ['maldives.jpg', 'macau.jpg', 'ireland.jpg', 'taiwan.jpg'];
var current = 0;
let interval;

let left = document.querySelector('#arrowLeft'),
  right = document.querySelector('#arrowRight'),
  lines = document.querySelector('.line');




function slideShow() { 

  document.querySelector('#image').src = images[current];

  if (current < (images.length - 1)) {
    current++;
  } else {
    current = 0;
  } 
  
}

function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
}


function intervalGenerator() {   // start setInterval using variable
  interval = setInterval(slideShow, 5000);  
}


function slideLeft() {
  clearInterval(interval);         // stop setInterval
  console.log("inside slideLeft");
  current = current - 2;
  document.querySelector('#image').src = images[current];
  intervalGenerator();
}


// Left arrow click
left.addEventListener("click", slideLeft);
intervalGenerator();
