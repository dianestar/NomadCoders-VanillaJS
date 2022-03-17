const images = [
    "00.jpg",
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg"
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
