var setNavEvents = function() {
  var infoBox = document.querySelector("#info-box");
  var gallery = document.querySelector("#gallery");
  var leftGallery = document.querySelector("#left-gallery");
  var rightGallery = document.querySelector("#right-gallery");
  var funFact = document.querySelector("#fun-facts")
  var descriptionButton = document.querySelector("#description-button");
  var galleryButton = document.querySelector("#gallery-button");
  var funFactButton = document.querySelector("#fun-facts-button");
  gallery.style.display = "none";
  funFact.style.display = "none";
  leftGallery.style.display = "none";
  rightGallery.style.display = "none";

  descriptionButton.addEventListener("click", function() {
    gallery.style.display = "none";
    infoBox.style.display = "block";
    funFact.style.display = "none";
    leftGallery.style.display = "none";
    rightGallery.style.display = "none";
  })

  galleryButton.addEventListener("click", function() {
    gallery.style.display = "block";
    infoBox.style.display = "none";
    funFact.style.display = "none";
    leftGallery.style.display = "block";
    rightGallery.style.display = "block";
  })

  funFactButton.addEventListener("click", function() {
    gallery.style.display = "none";
    infoBox.style.display = "none";
    funFact.style.display = "block";
    leftGallery.style.display = "none";
    rightGallery.style.display = "none";
  })
}

module.exports = setNavEvents;
