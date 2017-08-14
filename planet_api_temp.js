use solarSystem;
db.dropDatabase();

var solarSystem = {};

// SOLAR SYSTEM ------------------------------------------

solarSystem.details = {
  "Name": "The Solar System",

  "breadCrumbs": [],

  "links": [],

  "mainImage": {
    "label": "Solar System",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "4.6 Billion Years",
      "value": "8"
    },
    {
      "label": "Planets",
      "value": "8"
    },
    {
      "label": "Moons",
      "value": "181"
    },
    {
      "label": "Radius",
      "value": "0.95 light years"
    },
    {
      "label": "temperatureCelsius",
      "value": 167
    }
  ],

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

// SUN ------------------------------------------

var planets = [];

solarSystem.planets = planets;

// PLANETS ------------------------------------------

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

var mars = {
  "Name": "Mars",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    }
  ],

  "links": [
    {
      "label": "Curiosity",
      "link": "route to curiosity"
    }
  ],

  "mainImage": {
    "label": "Mars",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Length Of A Day",
      "value": "24.65 hours"
    },
    {
      "label": "Average Temperature In Celsius",
      "value": -63
    },
    {
      "label": "Distance From The Sun",
      "value": "227,940,000 km"
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "Info on Mars",
    "value": "Mars is a planet. It is the fourth planet from the sun. It is the next planet beyond Earth. Mars is more than 142 million miles from the sun. The planet is about one-sixth the size of Earth. Mars is known as the Red Planet. It gets its red color from the iron in its soil. Mars has two small moons. Their names are Phobos and Deimos. Mars is very cold. The average temperature on Mars is minus 80 degrees Fahrenheit -- way below freezing! Mars is rocky with canyons, volcanoes and craters all over it. Red dust covers almost all of Mars. It has clouds and wind, just as Earth does. Sometimes the wind blows the red dust into a dust storm. Tiny dust storms can look like tornados, and large ones can cover the whole planet!, Mars has about one-third the gravity of Earth. A rock dropped on Mars would fall slower than a rock dropped on Earth. Things weigh less on Mars than they weigh on Earth. A person who weighs 100 pounds on Earth would only weigh about 37 pounds on Mars because of less gravity.",

  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "link for low-res image",
      "hiRes": "link for hi-res image"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

var jupiter = {
  "Name": "Jupiter",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    }
  ],

  "links": [],

  "mainImage": {
    "label": "Jupiter",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Length Of A Day",
      "value": "9.9 hours"
    },
    {
      "label": "Average Temperature In Celsius",
      "value": -161
    },
    {
      "label": "Distance From The Sun",
      "value": "1.429 billion km"
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "info on Jupiter",
    "value": "Jupiter is the largest planet in the solar system. It is approximately 143,000 kilometers (about 89,000 miles) wide at its equator. Jupiter is so large that all of the other planets in the solar system could fit inside it. More than 1,300 Earths would fit inside Jupiter. Jupiter is like a star in composition. If Jupiter had been about 80 times more massive, it would have become a star rather than a planet. Jupiter is the fifth planet from the sun. Jupiter's average distance from the sun is 5.2 astronomical units, or AU. This distance is a little more than five times the distance from Earth to the sun. When viewed from Earth, Jupiter is usually the second brightest planet in the night sky, after Venus. The planet is named after Jupiter, the king of the Roman gods in mythology.",

  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "link for low-res image",
      "hiRes": "link for hi-res image"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

var saturn = {
  "Name": "Saturn",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    }
  ],

  "links": [],

  "mainImage": {
    "label": "Saturn",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Length Of A Day",
      "value": "10.6 hours"
    },
    {
      "label": "Average Temperature In Celsius",
      "value": -178
    },
    {
      "label": "Distance From The Sun",
      "value": "1.429 billion km"
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "info on saturn",
    "value": "The second largest planet in our solar system, adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings -- made of chunks of ice and rock -- but none are as spectacular or as complicated as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball of mostly hydrogen and helium. Surrounding by 53 confirmed and nine provisional moons, Saturn is home to some of the most fascinating landscapes in our solar system. From the jets of Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries. The farthest planet from Earth observable by the unaided human eye, Saturn has been known since ancient times and is named for the Roman god of agriculture and wealth. The Greek equivalent was Cronos, the father of Zeus/Jupiter.",
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "link for low-res image",
      "hiRes": "link for hi-res image"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

var uranus = {
  "Name": "Uranus",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    }
  ],

  "links": [],

  "mainImage": {
    "label": "Uranus",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Length Of A Day",
      "value": "17 hours"
    },
    {
      "label": "Average Temperature In Celsius",
      "value": -357
    },
    {
      "label": "Distance From The Sun",
      "value": "2.871 billion km"
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "info on Uranus",
    "value": "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have different bulk chemical composition from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as 'ice giants' to distinguish them from the gas giants. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more 'ices' such as water, ammonia, and methane, along with traces of other hydrocarbons. It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock."
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "images/uranus1.png",
      "hiRes": "images/uranus1.png"
    },
    {
      "label": "image 2",
      "lowRes": "images/uranus2.png",
      "hiRes": "images/uranus2.png"
    },
    {
      "label": "image 3",
      "lowRes": "images/uranus3.png",
      "hiRes": "images/uranus3.png"
    },
  ],

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

// EARTH MOON ------------------------------------------

earth.moons = [];

var moon = {
  "Name": "The Moon",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    },
    {
      "label": "Earth",
      "link": "localHost:3000/route-to-earth-page"
    },
  ],

  "links": [],

  "mainImage": {
    "label": "Moon",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Radius",
      "value": "1,737 km"
    },
    {
      "label": "Orbit Radius",
      "value": "384,400 km"
    },
    {
      "label": "Distance From The Sun",
      "value": "149.6 million km"
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "info on Kerberos",
    "value": "The Moon is an astronomical body that orbits planet Earth, being Earth's only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary). Following Jupiter's satellite Io, the Moon is second-densest satellite among those whose densities are known. The Moon is thought to have formed about 4.51 billion years ago, not long after Earth. The most widely accepted explanation is that the Moon formed from the debris left over after a giant impact between Earth and a Mars-sized body called Theia.",
  }],

  "gallery": [],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

// JUPITER MOONS ------------------------------------------

// SATURN MOONS ------------------------------------------

saturn.moons = [];

var hyperion = {
  "Name": "Hyperion",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    },
    {
      "label": "Saturn",
      "link": "localHost:3000/route-to-saturn-page"
    },
  ],

  "links": [],

  "mainImage": {
    "label": "Hyperion",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Radius",
      "value": "135 km"
    },
    {
      "label": "Orbit Radius",
      "value": "1,500,934 km"
    },
    {
      "label": "Distance From The Sun",
      "value": "1.429 billion km"
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "info on Kerberos",
    "value": "Ariel is the fourth-largest of the 27 known moons of Uranus. Ariel orbits and rotates in the equatorial plane of Uranus, which is almost perpendicular to the orbit of Uranus, and so has an extreme seasonal cycle. It was discovered in October 1851 by William Lassell, and named for a character in two different pieces of literature. As of 2012, much of the detailed knowledge of Ariel derives from a single flyby of Uranus performed by the spacecraft Voyager 2 in 1986, which managed to image around 35% of the moon's surface. There are no active plans at present to return to study the moon in more detail, although various concepts such as a Uranus orbiter and probe have been proposed from time to time. After Miranda, Ariel is the second-smallest of Uranus' five major rounded satellites, and the second-closest to its planet. Among the smallest of the Solar System's 19 known spherical moons (it ranks 14th among them in diameter), it is believed to be composed of roughly equal parts ice and rocky material. Its mass is approximately equal in magnitude to Earth's hydrosphere.",
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "image/ariel1.jpg",
      "hiRes": "image/ariel1.jpg"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

// URANUS MOONS ------------------------------------------

uranus.moons = [];

var ariel = {
  "Name": "Ariel",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    },
    {
      "label": "Uranus",
      "link": "localHost:3000/route-to-uranus-page"
    },
  ],

  "links": [],

  "mainImage": {
    "label": "Ariel",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Radius",
      "value": "436,000 km"
    },
    {
      "label": "Orbit Radius",
      "value": "190,900 km"
    },
    {
      "label": "Distance From The Sun",
      "value": "2.8 billion km"
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "info on Kerberos",
    "value": "Ariel is the fourth-largest of the 27 known moons of Uranus. Ariel orbits and rotates in the equatorial plane of Uranus, which is almost perpendicular to the orbit of Uranus, and so has an extreme seasonal cycle. It was discovered in October 1851 by William Lassell, and named for a character in two different pieces of literature. As of 2012, much of the detailed knowledge of Ariel derives from a single flyby of Uranus performed by the spacecraft Voyager 2 in 1986, which managed to image around 35% of the moon's surface. There are no active plans at present to return to study the moon in more detail, although various concepts such as a Uranus orbiter and probe have been proposed from time to time. After Miranda, Ariel is the second-smallest of Uranus' five major rounded satellites, and the second-closest to its planet. Among the smallest of the Solar System's 19 known spherical moons (it ranks 14th among them in diameter), it is believed to be composed of roughly equal parts ice and rocky material. Its mass is approximately equal in magnitude to Earth's hydrosphere.",
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "image/ariel1.jpg",
      "hiRes": "image/ariel1.jpg"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

// PLUTO MOONS ------------------------------------------

pluto.moons = [];

var kerberos = {
  "Name": "Kerberos",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    },
    {
      "label": "Pluto",
      "link": "localHost:3000/route-to-pluto-page"
    },
  ],

  "links": [],

  "mainImage": {
    "label": "Kerberos",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Radius",
      "value": "606km"
    },
    {
      "label": "Orbit Radius",
      "value": "19,640 km"
    },
    {
      "label": "Distance From The Sun",
      "value": "5.9 billion km"
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "info on Kerberos",
    "value": "Kerberos is a small natural satellite of Pluto, about 12 km (7.5 mi) in its longest dimension. It was the fourth moon of Pluto to be discovered and its existence was announced on 20 July 2011. It was imaged, along with Pluto and its four other moons, by the New Horizons spacecraft in July 2015. The first image of Kerberos was released to the public on 22 October 2015. Kerberos appears to be smaller than scientists expected and has a highly-reflective surface, counter to predictions prior to the Pluto flyby in July. “Once again, the Pluto system has surprised us,” said New Horizons Project Scientist Hal Weaver, of the Johns Hopkins University Applied Physics Laboratory in Laurel, Maryland. The new data, downlinked from the New Horizons spacecraft on Oct. 20, show that Kerberos appears to have a double-lobed shape, with the larger lobe approximately 5 miles (8 kilometers) across and the smaller lobe approximately 3 miles (5 kilometers) across. Science team members speculate from its unusual shape that Kerberos could have been formed by the merger of two smaller objects. The reflectivity of Kerberos’ surface is similar to that of Pluto’s other small moons (approximately 50 percent) and strongly suggests Kerberos, like the others, is coated with relatively clean water ice.",
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "link for low-res image",
      "hiRes": "link for hi-res image"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

// PUSHING TO ARRAYS ------------------------------------------

planets.push(mercury);

planets.push(venus);

planets.push(earth);
earth.moons.push(moon);

planets.push(mars);

planets.push(jupiter);

planets.push(saturn);
saturn.moons.push(hyperion);

planets.push(uranus);
uranus.moons.push(ariel);

planets.push(pluto);
pluto.moons.push(kerberos);

db.solarSystem.insert(solarSystem);

db.solarSystem.find();
