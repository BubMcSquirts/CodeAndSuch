let musicInfo = [
  {
    title: "Mist Of The Morning",
    imgSrc:
      "images/Pictures/Music/Songs/Morning_Songs/Morning Songs Poster.jpg",
    musicSrc:
      "images/Pictures/Music/Songs/Morning_Songs/Mist of the Morning.mp3",
    songLink: "https://distrokid.com/hyperfollow/bubm/morning-songs",
  },
  {
    title: "Wind Chimes",
    imgSrc:
      "images/Pictures/Music/Songs/Morning_Songs/Morning Songs Poster.jpg",
    musicSrc: "images/Pictures/Music/Songs/Morning_Songs/Wind Chimes.mp3",
    songLink: "https://distrokid.com/hyperfollow/bubm/morning-songs",
  },
  {
    title: "Song For The Breeze",
    imgSrc:
      "images/Pictures/Music/Songs/Morning_Songs/Morning Songs Poster.jpg",
    musicSrc:
      "images/Pictures/Music/Songs/Morning_Songs/Song for the Breeze.mp3",
    songLink: "https://distrokid.com/hyperfollow/bubm/morning-songs",
  },
  {
    title: "Waking Of The Earth",
    imgSrc:
      "images/Pictures/Music/Songs/Morning_Songs/Morning Songs Poster.jpg",
    musicSrc:
      "images/Pictures/Music/Songs/Morning_Songs/Waking Of The Earth.mp3",
    songLink: "https://distrokid.com/hyperfollow/bubm/morning-songs",
  },
  {
    title: "O Holy Night",
    imgSrc: "images/Pictures/Music/Songs/O_Holy_Night/Cover_Art_Edit_2.jpg",
    musicSrc: "images/Pictures/Music/Songs/O_Holy_Night/O_Holy_Night.mp3",
    songLink: "https://distrokid.com/hyperfollow/bubm/o-holy-night",
  },
  {
    title: "80s Jam",
    imgSrc: "images/Pictures/Music/Songs/80s_Jam/80s_Jam_Poster.jpg",
    musicSrc: "images/Pictures/Music/Songs/80s_Jam/80s_Jam.mp3",
    songLink: "",
  },
  {
    title: "Moody",
    imgSrc: "images/Pictures/Music/Songs/Moody/Moody_Art_Cover.jpg",
    musicSrc: "images/Pictures/Music/Songs/Moody/Moody.mp3",
    songLink: "",
  },
  {
    title: "Uvae",
    imgSrc:
      "images/Pictures/Music/Songs/Latin_Jazz_Vol_1/Latin_Jazz_Vol_1_Art.jpg",
    musicSrc: "images/Pictures/Music/Songs/Latin_Jazz_Vol_1/Uvae.mp3",
    songLink: "",
  },
  {
    title: "Theme Song: Nebula Heist",
    imgSrc: "images/Pictures/Music/Images/Nebula_Heist-Theme_Song-Poster.jpg",
    musicSrc:
      "images/Pictures/Music/Songs/Nebula_Heist/Nebula_Heist-Theme_Song.mp3",
    songLink: "",
  },
  {
    title: "Dark Lights",
    imgSrc: "images/Pictures/Music/Songs/Dark_Lights/Dark_Lights.jpg",
    musicSrc: "images/Pictures/Music/Songs/Dark_Lights/Dark_Lights.mp3",
    songLink: "",
  },
  {
    title: "Welcome To The Ocean",
    imgSrc:
      "images/Pictures/Music/Songs/Welcome_To_The_Ocean/Welcome_To_The_Ocean_Poster.jpg",
    musicSrc:
      "images/Pictures/Music/Songs/Welcome_To_The_Ocean/Welcome_To_The_Ocean.mp3",
    songLink: "",
  },
];

let photoContainer = document.getElementById("photoGallerySmallImgMaster");

for (let i = 0; i < musicInfo.length; i++) {
  let musicBlock = document.createElement("div");
  musicBlock.innerHTML = `
  <img
        class="AudioPoster"
        src="${musicInfo[i].imgSrc}"
      />
  `;
  photoContainer.appendChild(musicBlock);
}
