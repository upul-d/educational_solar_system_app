use solarSystem;
db.dropDatabase();

var solarSystem = {};

var planets = [];

solarSystem.planets = planets;

var mercury = {
  "Name": "Mercury",

  "breadCrumbs": [
  {
    "label": "Solar System",
    "link": "localHost:3000/route-to-solar-system-page"
  }
  ],

  "links": [],

  "mainImage": {
    "label": "Mercury",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
  {
    "label": "Radius",
    "value": "2439.7" + "km"
  },
  {
    "label": "temperatureCelsius",
    "value": 167
  }],

  "description": [
  {
    "type": "paragraph",
    "title": "info on mercury",
    "value": "info on mercury"
  }],

  "gallery": [
  {
    "label": "image 1",
    "lowRes": "link for low-res image",
    "hiRes": "link for hi-res image"
  }],

  "facts": ["fact 1", "fact 2", "fact 3"]

}


var venus = {
  "Name": "Venus",

  "breadCrumbs": [
  {
    "label": "Solar System",
    "link": "localHost:3000/route-to-solar-system-page"
  }
  ],

  "links": [],

  "mainImage": {
    "label": "Venus",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
  {
    "label": "Radius",
    "value": "6051.8" + "km"
  },
  {
    "label": "temperatureCelsius",
    "value": 464
  }],

  "description": [
  {
    "type": "paragraph",
    "title": "info on venus",
    "value": "info on venus"
  }],

  "gallery": [
  {
    "label": "image 1",
    "lowRes": "link for low-res image",
    "hiRes": "link for hi-res image"
  }],

  "facts": ["fact 1", "fact 2", "fact 3"]

}

var earth = {
  "Name": "Earth",

  "breadCrumbs": [
  {
    "label": "Solar System",
    "link": "localHost:3000/route-to-solar-system-page"
  }
  ],

  "links": [
    {
      "label": "Moon",
      "link": "route to moon "
    }
  ],

  "mainImage": {
    "label": "Earth",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Radius",
      "value": "6378.1 km"
    },
    {
      "label": "Average Temperature In Celsius",
      "value": 16
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "info on earth",
    "value": "info on earth"
  }],

  "gallery": [
  {
    "label": "image 1",
    "lowRes": "link for low-res image",
    "hiRes": "link for hi-res image"
  }],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

planets.push(mercury);
planets.push(venus);
planets.push(earth);
db.solarSystem.insert(solarSystem);
