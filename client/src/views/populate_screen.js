var setNavEvents = require('./info_nav_events')

var populateScreen = function(object){
  populateRightBar(object);
  populateInfoBox(object);
  populateGallery(object);
  setNavEvents();
}


var populateRightBar = function(object){
  var rightBar = document.querySelector("#right-side");
  var dl = document.querySelector("#rside");
  rightBar.removeChild(dl);

  var dl2 = document.createElement("dl");
  for(var property of object.sideBar){
    var hr = document.createElement("hr");
    var link = document.createElement("a");
    link.href = "http://www.google.com";
    var dt = document.createElement("dt");
    dt.innerText = property.label;
    var dd = document.createElement("dd");
    dd.innerText = property.value;

    link.appendChild(dt);
    link.appendChild(dd);
    dl2.appendChild(hr);
    dl2.appendChild(link);

  }

  rightBar.appendChild(dl2);
}

var addBottomDivClass = function(divToAddTo) {
  divToAddTo.classList.add('bottom-div');
}

var populateInfoBox = function(object){
  var infoBox = document.querySelector("#info-box");
  var infoContainer = document.querySelector("#info-container");
  infoContainer.removeChild(infoBox);
  var sectionDiv = document.createElement("section");
  sectionDiv.id = "info-box";
  addBottomDivClass(sectionDiv);


  for(var property of object.description){
    var div = document.createElement("div");
    var h2 = document.createElement("h2");
    h2.innerText = property.title;
    var pTag = document.createElement("p");
    pTag.innerText = property.value;

    div.appendChild(h2);
    div.appendChild(pTag);
    sectionDiv.appendChild(div)

  }
    infoContainer.appendChild(sectionDiv);
}


  var populateGallery = function(object) {
    var gallery = document.querySelector("#gallery");
    var infoContainer = document.querySelector('#info-container');
    infoContainer.removeChild(gallery);
    var newGalleryDiv = document.createElement('section')
    newGalleryDiv.id = "gallery";
    addBottomDivClass(newGalleryDiv);

    for(var property of object.gallery){
      var image = document.createElement("img");
      image.src = property.lowRes;
      newGalleryDiv.appendChild(image);
      console.log(property.lowRes);
    }
    infoContainer.appendChild(newGalleryDiv);
  }

module.exports = populateScreen;
