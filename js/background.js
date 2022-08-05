const img = ["00.jpg","01.jpg","02.jpg,","03.jpg","04.jpg"]

const randImg = img[Math.floor(Math.random() * img.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randImg}`;

document.body.appendChild(bgImage);