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

var pluto = {
  "Name": "Pluto",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    }
  ],

  "links":[
    {
      "label": "Styx (moon)",
      "link": "localHost:3000/route-to-request-styx",
    },
    {
      "label": "Kerberos (moon)",
      "link": "localHost:3000/route-to-request-kerberos",
    },
  ],

  "mainImage": {
    "label": "Pluto",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Length Of Day",
      "value": "6.4 Earth days",
    },
    {
      "label": "Radius",
      "value": "1,187 km",
    },
    {
      "label": "Average Distance From The Sun",
      "value": "5.9 billion km",
    },
    {
      "label": "Average Distance From The Earth",
      "value": "7.5 billion km",
    },
  ],

  "description": [
    {
      "type": "paragraph",
      "title": "Styx",
      "value": "Nix is a natural satellite of Pluto. It was discovered along with Hydra (Pluto's outermost satellite) in June 2005. It was imaged along with Pluto and its other moons by the New Horizons spacecraft as it flew by the Pluto system in July 2015. Of the four small Plutonian moons the best pictures are of Nix, with resolutions as high as 330 meters per pixel. The formal name 'Nix', from the Greek goddess of darkness and night and mother of Charon (ferryman of Hades), was announced on 21 June 2006 on IAU Circular 8723, where the designation Pluto II is also given. Nix follows a circular orbit in the same plane as Charon.[2] It is in a 3:2 orbital resonance with Hydra, and a 9:11 resonance with Styx (the ratios represent numbers of orbits completed per unit time; the period ratios are the inverses). As a result of this 'Laplace-like' 3-body resonance, it has conjunctions with Styx and Hydra in a 2:3 ratio."
    },
  ],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "images/pluto1.jpg",
      "highRes": "images/pluto1.jpg"
    },
    {
      "label": "image 2",
      "lowRes": "images/pluto2.png",
      "highRes": "images/pluto2.png"
    },
    {
      "label": "image 3",
      "lowRes": "images/pluto3.jpg",
      "highRes": "images/pluto3.jpg"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}


planets.push(mercury);
planets.push(venus);
planets.push(earth);
planets.push(pluto);
db.solarSystem.insert(solarSystem);
