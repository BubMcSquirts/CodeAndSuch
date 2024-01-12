let jsImageGallery = document.getElementById("jsImageGallery");

let stopMotionVideos = [
  {
    name: "LEGO Walker",
    videoSrc:
      "images/Pictures/Stop_Motion/LEGO Walker/AT-ST-Walker_1_Edited.mp4",
    posterSrc: "images/Pictures/Stop_Motion/LEGO Walker/LEGO Walker Poster.jpg",
  },
  {
    name: "LEGO Something",
    videoSrc: "images/Pictures/Stop_Motion/LEGO Something/Something.mp4",
    posterSrc:
      "images/Pictures/Stop_Motion/LEGO Something/LEGO Something Poster.jpg",
  },
  {
    name: "LEGO CLay Walk Demo",
    videoSrc: "images/Pictures/Stop_Motion/Clay Walk/CLAY_001_02 copy.mp4",
    posterSrc: "images/Pictures/Stop_Motion/Clay Walk/Clay Walk Poster.jpg",
  },
  {
    name: "Little Walker",
    videoSrc: "images/Pictures/Stop_Motion/Little Walker/Little Walker 1.mp4",
    posterSrc:
      "images/Pictures/Stop_Motion/Little Walker/Little Walker Poster.jpg",
  },
];

for (let i = 0; i < stopMotionVideos.length; i++) {
  let stopMotionVideoContainer = document.createElement("div");
  stopMotionVideoContainer.className = "stopMotionVideoContainer";
  stopMotionVideoContainer.innerHTML = `
  <video
    poster="${stopMotionVideos[i].posterSrc}"
    class="stopMotionVideo"
    src="${stopMotionVideos[i].videoSrc}"
    title="${stopMotionVideos[i].name}"
    controls
    loop
    ></video>
    <p>${stopMotionVideos[i].name}</p>
  `;
  jsImageGallery.appendChild(stopMotionVideoContainer);
}
