use solarSystem;
db.dropDatabase();

db.planets.insert({

 "planets":[
  {
    "Name": "Pluto",

    "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    },
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

    "mainImage": [
    {
      "label": "Pluto",
      "link": "image link"
    }
    ],

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
      "value": "Nix is a natural satellite of Pluto. It was discovered along with Hydra (Pluto's outermost satellite) in June 2005. It was imaged along with Pluto and its other moons by the New Horizons spacecraft as it flew by the Pluto system in July 2015. Of the four small Plutonian moons the best pictures are of Nix, with resolutions as high as 330 meters per pixel. The formal name 'Nix', from the Greek goddess of darkness and night and mother of Charon (ferryman of Hades), was announced on 21 June 2006 on IAU Circular 8723,[10] where the designation Pluto II is also given. Nix follows a circular orbit in the same plane as Charon.[2] It is in a 3:2 orbital resonance with Hydra, and a 9:11 resonance with Styx (the ratios represent numbers of orbits completed per unit time; the period ratios are the inverses). As a result of this 'Laplace-like' 3-body resonance, it has conjunctions with Styx and Hydra in a 2:3 ratio."
    },
    {
      "type": "paragraph",
      "title": "Who Named the Planet",
      "value": "Nix is a natural satellite of Pluto. It was discovered along with Hydra (Pluto's outermost satellite) in June 2005. It was imaged along with Pluto and its other moons by the New Horizons spacecraft as it flew by the Pluto system in July 2015. Of the four small Plutonian moons the best pictures are of Nix, with resolutions as high as 330 meters per pixel. The formal name 'Nix', from the Greek goddess of darkness and night and mother of Charon (ferryman of Hades), was announced on 21 June 2006 on IAU Circular 8723,[10] where the designation Pluto II is also given. Nix follows a circular orbit in the same plane as Charon.[2] It is in a 3:2 orbital resonance with Hydra, and a 9:11 resonance with Styx (the ratios represent numbers of orbits completed per unit time; the period ratios are the inverses). As a result of this 'Laplace-like' 3-body resonance, it has conjunctions with Styx and Hydra in a 2:3 ratio."
    },
    ],

    "gallery": [
    {
      "label": "image 1",
      "lowRes": "random link",
      "highRes": "random link"
    },
    {
      "label": "image 2",
      "lowRes": "random link",
      "highRes": "random link"
    },
    {
      "label": "image 3",
      "lowRes": "random link",
      "highRes": "random link"
    }
    ],

    "facts": ["fact 1", "fact 2", "facts 3"]
  },
  {
    "Name": "Dummy",

    "breadCrumbs": [
    {
      "label": "Solar system",
      "link": "localHost:3000/route-to-solar-system-page"
    },
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

    "mainImage": [
    {
      "label": "Pluto",
      "link": "image link"
    }
    ],

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
      "value": "Nix is a natural satellite of Pluto. It was discovered along with Hydra (Pluto's outermost satellite) in June 2005. It was imaged along with Pluto and its other moons by the New Horizons spacecraft as it flew by the Pluto system in July 2015. Of the four small Plutonian moons the best pictures are of Nix, with resolutions as high as 330 meters per pixel. The formal name 'Nix', from the Greek goddess of darkness and night and mother of Charon (ferryman of Hades), was announced on 21 June 2006 on IAU Circular 8723,[10] where the designation Pluto II is also given. Nix follows a circular orbit in the same plane as Charon.[2] It is in a 3:2 orbital resonance with Hydra, and a 9:11 resonance with Styx (the ratios represent numbers of orbits completed per unit time; the period ratios are the inverses). As a result of this 'Laplace-like' 3-body resonance, it has conjunctions with Styx and Hydra in a 2:3 ratio."
    },
    {
      "type": "paragraph",
      "title": "Who Named the Planet",
      "value": "Nix is a natural satellite of Pluto. It was discovered along with Hydra (Pluto's outermost satellite) in June 2005. It was imaged along with Pluto and its other moons by the New Horizons spacecraft as it flew by the Pluto system in July 2015. Of the four small Plutonian moons the best pictures are of Nix, with resolutions as high as 330 meters per pixel. The formal name 'Nix', from the Greek goddess of darkness and night and mother of Charon (ferryman of Hades), was announced on 21 June 2006 on IAU Circular 8723,[10] where the designation Pluto II is also given. Nix follows a circular orbit in the same plane as Charon.[2] It is in a 3:2 orbital resonance with Hydra, and a 9:11 resonance with Styx (the ratios represent numbers of orbits completed per unit time; the period ratios are the inverses). As a result of this 'Laplace-like' 3-body resonance, it has conjunctions with Styx and Hydra in a 2:3 ratio."
    },
    ],

    "gallery": [
    {
      "label": "image 1",
      "lowRes": "random link",
      "highRes": "random link"
    },
    {
      "label": "image 2",
      "lowRes": "random link",
      "highRes": "random link"
    },
    {
      "label": "image 3",
      "lowRes": "random link",
      "highRes": "random link"
    }
    ],

    "facts": ["fact 1", "fact 2", "facts 3"]
  }
  ]});