var setNavEvents = require('./info_nav_events')

var populateScreen = function(object){
  populateRightBar(object);
  populateInfoBox(object);
  populateGallery(object);
  populateFunFacts(object);
  setNavEvents();
}


var populateRightBar = function(object){
  var rightBar = document.querySelector("#right-side");
  var dl = document.querySelector("#rside");
  if(dl) rightBar.removeChild(dl);

  var dl2 = document.createElement("dl");
  dl2.id = "rside";
  
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
  if(infoBox) infoContainer.removeChild(infoBox);
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
  // var gallery = document.querySelector("#gallery");
  // var infoContainer = document.querySelector('#info-container');
  // if(gallery) infoContainer.removeChild(gallery);
  // var newGalleryDiv = document.createElement('section')
  // newGalleryDiv.id = "gallery";
  // addBottomDivClass(newGalleryDiv);

  // for(var property of object.gallery){
  //   var imageDiv = document.createElement("span");
  //   imageDiv.classList.add("zoom");

  //   var imageSmall = document.createElement("img");
  //   imageSmall.src = property.lowRes;
  //   imageSmall.classList.add("picSmall");
    
  //   var imageBig = document.createElement("img");
  //   imageBig.src = property.lowRes;
  //   imageBig.classList.add("picBig");

  //   imageDiv.appendChild(imageSmall);
  //   imageDiv.appendChild(imageBig);
  //   newGalleryDiv.appendChild(imageDiv);
  // }
  // infoContainer.appendChild(newGalleryDiv);
}

var populateFunFacts = function(object){
  var infoContainer = document.querySelector('#info-container');
  var funFactsSection = document.querySelector('#fun-facts');
  infoContainer.removeChild(funFactsSection);
  var newFunFacts = document.createElement("section");
  newFunFacts.id = "fun-facts";
  addBottomDivClass(newFunFacts);

  var div = document.createElement("div");
  var h2 = document.createElement("h2");
  h2.innerText = "Fun Facts";
  var ul = document.createElement("ul");

  for(var property of object.facts){
    var li = document.createElement("li");
    li.innerText = property;
    ul.appendChild(li);
  }

  div.appendChild(h2);
  div.appendChild(ul);
  newFunFacts.appendChild(div);

  infoContainer.appendChild(newFunFacts);
}

module.exports = populateScreen;
