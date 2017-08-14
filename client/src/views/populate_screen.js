var populateScreen = function(object){
  populateRightBar(object);
}


var populateRightBar = function(object){
  var rightBar = document.querySelector("#right-side");
  var dl = document.querySelector("#rside");
  rightBar.removeChild(dl);

  var dl2 = document.createElement("dl");
  for(var property of object.sideBar){
    var hr = document.createElement("hr");
    var link = document.createElement("a");
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

module.exports = populateScreen;
