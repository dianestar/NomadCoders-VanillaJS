const images = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"
];

const randomImage = images[Math.floor(Math.random() * images.length)];

/*
const imgTag = document.createElement("img");
imgTag.src= `img/${randomImage}`;
imgTag.style="width: 100%";
document.body.appendChild(imgTag);
*/
// document.body.prepend(imgTag);

console.dir(document.body);
document.body.background = `img/${randomImage}`;
