let twoDVideoGallery = document.getElementById("2DVideoGallery");
let twoDImageGallery = document.getElementById("2DImageGallery");

let twoDVideos = [
  {
    name: "Guppee Swim Demo",
    videoSrc: "images/Pictures/2D/Videos/Guppee_Swim.mp4",
    posterSrc: "images/Pictures/2D/Videos/Guppee_Swim_Poster.jpg",
  },
  {
    name: "Bouncing Ball with Tail",
    videoSrc: "images/Pictures/2D/Videos/Bouncing_Ball_1.mp4",
    posterSrc: "images/Pictures/2D/Videos/Bouncing_Ball_1_Poster.jpg",
  },
];

let twoDPictures = [
  {
    name: "Flower Painting",
    imgSrc: "images/Pictures/2D/Flower_1.jpg",
    alt: "flower picture painting 2D photoshop",
  },
  {
    name: "Cloud Painting",
    imgSrc: "images/Pictures/2D/Cloud_1.jpg",
    alt: "cloud painting 2D",
  },
  {
    name: "Grayscale Mountain",
    imgSrc: "images/Pictures/2D/Mountain_1.jpg",
    alt: "mountain grayscale picture painting 2D photoshop",
  },
  {
    name: "Mech Drawing",
    imgSrc: "images/Pictures/2D/Mech_2.jpg",
    alt: "painting photoshop mech sci fi",
  },
  {
    name: "Another Mech Drawing",
    imgSrc: "images/Pictures/2D/Mech_1.jpg",
    alt: "sci fi mech picture 2D photoshop",
  },
];

for (let i = 0; i < twoDVideos.length; i++) {
  let twoDVideoContainer = document.createElement("div");
  twoDVideoContainer.className = "stopMotionVideoContainer";
  twoDVideoContainer.innerHTML = `
  <video
    poster="${twoDVideos[i].posterSrc}"
    class="stopMotionVideo"
    src="${twoDVideos[i].videoSrc}"
    title="${twoDVideos[i].name}"
    controls
    loop
    ></video>
    <p>${twoDVideos[i].name}</p>
  `;
  twoDVideoGallery.appendChild(twoDVideoContainer);
}

for (let x = 0; x < twoDPictures.length; x++) {
  let twoDImgContainer = document.createElement("div");
  twoDImgContainer.className = "twoDPictures";
  twoDImgContainer.innerHTML = `
   <img class="twoDPicture" src="${twoDPictures[x].imgSrc}" 
    alt="${twoDPictures[x].alt}">
      <p>${twoDPictures[x].name}</p>
    `;
  twoDImageGallery.appendChild(twoDImgContainer);
}
