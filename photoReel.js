function myImageFunctionYellowStone(productSmallImg) {
  var productFullImg = document.getElementById("picture-Box-yellowstone");
  productFullImg.src = productSmallImg.src;

  let imageCaption = document.getElementById("caption-yellowstone");
  imageCaption.innerHTML = productSmallImg.name;
}

/*Begin 3D JS*/

function myImageFunctionPlanets(productSmallImg) {
  var productFullImg = document.getElementById("picture-Box-planets");
  productFullImg.src = productSmallImg.src;

  let imageCaption = document.getElementById("caption-Planets");
  imageCaption.innerHTML = productSmallImg.name;
}

function myImageFunctionThreeDImages(productSmallImg) {
  var productFullImg = document.getElementById("picture-Box-ThreeDImages");
  productFullImg.src = productSmallImg.src;

  let imageCaption = document.getElementById("caption-ThreeDImages");
  imageCaption.innerHTML = productSmallImg.name;
}

function myImageFunctionThreeDVideos(productSmallVideo) {
  var productFullVideo = document.getElementById("picture-Box-ThreeDVideos");
  productFullVideo.src = productSmallVideo.src;

  let imageCaption = document.getElementById("caption-ThreeDVideos");
  imageCaption.innerHTML = productSmallVideo.title;

  let videoPoster = document.getElementById("picture-Box-ThreeDVideos");
  videoPoster.poster = productSmallVideo.poster;
}
