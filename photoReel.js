/*let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsById("picture-Box");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].name;
} */

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
}
