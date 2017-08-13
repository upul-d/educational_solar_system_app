// 1 gigameter == 1*10^-6 km

[
{
  "name": "Milky Way Galaxy",
  "radiusLightYears": 50000,
  "type": "barred spiral galaxy",
    // https://www.space.com/19915-milky-way-galaxy.html
    "contents": [
    {
      "name": "The Solar System",
      "radiusGigaMeter": 4545,
        // https://www.universetoday.com/15585/diameter-of-the-solar-system/
        "contents": {

          "star": {
            "name": "Sol",
            "description": "The sun lies at the heart of the solar system, where it is by far the largest object. It holds 99.8 percent of the solar system's mass and is roughly 109 times the diameter of the Earth — about one million Earths could fit inside the sun. The visible part of the sun is about 10,000 degrees Fahrenheit (5,500 degrees Celsius), while temperatures in the core reach more than 27 million F (15 million C), driven by nuclear reactions. One would need to explode 100 billion tons of dynamite every second to match the energy produced by the sun, according to NASA. The sun is one of more than 100 billion stars in the Milky Way. It orbits some 25,000 light-years from the galactic core, completing a revolution once every 250 million years or so. The sun is relatively young, part of a generation of stars known as Population I, which are relatively rich in elements heavier than helium. An older generation of stars is called Population II, and an earlier generation of Population III may have existed, although no members of this generation are known yet.",
            "ageYrs": 4600000000,
            "outerTemperatureCelcius": 6000,
            "innerTemperatureCelcius": 15000000,
            // https://www.space.com/58-the-sun-formation-facts-and-characteristics.html
            // http://solarviews.com/eng/sun.htm
            // https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html
          },

          "planets": [
          {
            "name": "Mercury",
            // https://solarsystem.nasa.gov/images/galleries/PIA15160_br.jpg
            // https://solarsystem.nasa.gov/images/galleries/True_Mercury-browse.jpg
            // https://solarsystem.nasa.gov/images/galleries/Mercury_732x520.jpg
            "description": "Sun-scorched Mercury, the smallest planet in our solar system, is only slightly larger than Earth's moon. Like the moon, Mercury has very little atmosphere to stop impacts and it is covered with craters. Mercury's dayside is super-heated by the sun, but at night temperatures drop hundreds of degrees below freezing. Ice may even exist in craters.",
            "dayHrs": 4222.6,
            "sunDistanceGigaMeter": 43.4,
            "radius": "2439.7" + "km",
            "satellites": [],
            "temperatureCelsius": 167,
            "atmospherePercentage": {
              "carbon_dioxide": 96,
              "nitrogen": 4,
            },
            "distanceFromEarth": "77000000" + "km"
              // http://coolcosmos.ipac.caltech.edu/ask/25-How-far-is-Mercury-from-Earth-
              // https://www.nasa.gov/planetmercury
              // https://spacemath.gsfc.nasa.gov/astrob/10Page7.pdf
              // https://nssdc.gsfc.nasa.gov/planetary/factsheet/mercuryfact.html
              // https://www.nasa.gov/planetmercury
            },

            {
              "name": "Venus",
              // https://solarsystem.nasa.gov/images/galleries/Venus_Clouds_br.jpg
              // hi-res - https://solarsystem.nasa.gov/images/galleries/Venus_Clouds.jpg
              "description": "Venus is a dim world of intense heat and volcanic activity. Similar in structure and size to Earth, Venus' thick, toxic atmosphere traps heat in a runaway 'greenhouse effect.' The scorched world has temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains. Venus spins slowly in the opposite direction of most planets.",
              "dayHrs": 2802,
              "sunDistanceGigaMeter": 108.2,
              "radiusKm": "6051.8" + "km",
              "satellites": [],
              "temperatureCelsius": 464,
              "atmospherePercentage": {
                "oxygen": 42,
                "sodium": 22,
                "hydrogen": 22,
                "helium": 6,
                "other": 8,
              },
              "distanceFromEarth": "150000000" + "km"
              // https://www.space.com/18529-distance-to-venus.html
              // https://www.nasa.gov/venus
              // https://spacemath.gsfc.nasa.gov/astrob/10Page7.pdf
              // https://nssdc.gsfc.nasa.gov/planetary/factsheet/venusfact.html
              // http://coolcosmos.ipac.caltech.edu/ask/51-How-far-is-Venus-from-the-Sun-
            },

            {
              "name": "Earth",
              // https://www.nasa.gov/sites/default/files/images/115334main_image_feature_329_ys_full.jpg
              "description": "Earth is the third planet from the sun and the fifth largest in the solar system. Just slightly larger than nearby Venus, Earth is the biggest of the terrestrial planets. Our home planet is the only planet in our solar system known to harbor living things. The name Earth is at least 1,000 years old. The name Earth is an English/German word, which simply means the ground.",
              "dayHrs": 24,
              "sunDistanceGigaMeter": 150,
              "radiusKm": "6378.1" + "km",
              "satellites": [
              {"name": "Moon"}
              ],
              "temperatureCelsius": 16,
              "atmospherePercentage": {
                "nitrogen": 78,
                "oxygen": 21,
                "argon": 1,
              },
              // https://solarsystem.nasa.gov/planets/earth
              // https://spacemath.gsfc.nasa.gov/astrob/10Page7.pdf
              // https://www.space.com/17816-earth-temperature.html
              // https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html
              // https://www.space.com/17733-earth-sun-distance-astronomical-unit.html
            },

            {
              "name": "Mars",
              // https://www.nasa.gov/sites/default/files/thumbnails/image/hs-2005-34-j-full_jpg.jpg
              "description": "Mars is a planet. It is the fourth planet from the sun. It is the next planet beyond Earth. Mars is more than 142 million miles from the sun. The planet is about one-sixth the size of Earth. Mars is known as the Red Planet. It gets its red color from the iron in its soil. Mars has two small moons. Their names are Phobos and Deimos. Mars is very cold. The average temperature on Mars is minus 80 degrees Fahrenheit -- way below freezing! Mars is rocky with canyons, volcanoes and craters all over it. Red dust covers almost all of Mars. It has clouds and wind, just as Earth does. Sometimes the wind blows the red dust into a dust storm. Tiny dust storms can look like tornados, and large ones can cover the whole planet!, Mars has about one-third the gravity of Earth. A rock dropped on Mars would fall slower than a rock dropped on Earth. Things weigh less on Mars than they weigh on Earth. A person who weighs 100 pounds on Earth would only weigh about 37 pounds on Mars because of less gravity.",
              "dayHrs": 24.6597,
              "sunDistanceGigaMeter": 227.94,
              "radiusKm": "3396.2" + "km",
              "satellites": [
              {"name": "Phobos"},
              {"name": "Deimos"},
              ],
              "temperatureCelsius": -63,
              "atmospherePercentage": {
                "carbon_dioxide": 95,
                "nitrogen": 2.7,
                "argon": 1.6,
                "other": 0.7,
              },
              "distanceFromEarth": "225000000" + "km"
              // https://www.space.com/14729-spacekids-distance-earth-mars.html
              // https://www.nasa.gov/audience/forstudents/k-4/stories/nasa-knows/what-is-mars-k4.html
              // https://spacemath.gsfc.nasa.gov/astrob/10Page7.pdf
              // https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html
              // https://www.nasa.gov/audience/foreducators/k-4/features/F_Measuring_the_Distance_Student_Pages.html
            }
            ],

            "ateroids": [
            {
              "name": "Vesta",
              "description": "Vesta is the second most massive body in the asteroid belt, surpassed only by Ceres, which is classified as a dwarf planet. The brightest asteroid in the sky, Vesta is occasionally visible from Earth with the naked eye. It is the first asteroid to be visited by a spacecraft. The Dawn mission orbited Vesta in 2011, providing new insights into this rocky world.",
              "radiusKm": 265,
              "orbitalPeriodYrs": 3.63,
              // https://www.nasa.gov/mission_pages/dawn/ceresvesta/index.html
              // https://www.space.com/12097-vesta-asteroid-facts-solar-system.html
            },
            {
              "name": "433 Eros",
              "description": "433 Eros is an S-type near-Earth asteroid approximately 34.4×11.2×11.2 kilometres in size, the second-largest near-Earth asteroid after 1036 Ganymed. It was discovered in 1898 and was the first near-Earth asteroid discovered. It was the first asteroid orbited by an Earth probe (in 2000). It belongs to the Amor group. Eros is a Mars-crosser asteroid, the first known to come within the orbit of Mars. Objects in such an orbit can remain there for only a few hundred million years before the orbit is perturbed by gravitational interactions. Dynamical integrations suggest that Eros may evolve into an Earth-crosser within as short an interval as two million years, and has a roughly 50% chance of doing so over a time scale of 108–109 years. It is a potential Earth impactor,[5] about five times larger than the impactor that created Chicxulub crater and led to the extinction of the dinosaurs.",
              "radiusKm": 16.84,
              "orbitalPeriodYrs": 1.76,
              // http://nineplanets.org/eros.html
              // http://www.erosproject.com/erosfact.html?source=ErosProject
            },
            {
              "name": "1036 Ganymed",
              "description": "1036 Ganymed is the largest near-Earth asteroid, at about 32–34 km in diameter. It was discovered by Walter Baade on October 23, 1924. It has a very well determined orbit, and its next pass of the Earth will be at a distance 55,964,100 km on 13 October 2024. It is an Amor asteroid, and also a Mars-crosser asteroid, and will pass 4,290,000 km from Mars on 16 December 2176.",
              "radiusKm": 18.84,
              "orbitalPeriodYrs": 4.345,
              // https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=1036+Ganymed
            },
            ],

            "comets": [
            {
              "name": "Honda–Mrkos–Pajdušáková",
              "description": "45P/Honda–Mrkos–Pajdušáková is a short-period comet discovered by Minoru Honda December 3, 1948. It is named after Minoru Honda, Antonín Mrkos, and Ľudmila Pajdušáková. The object revolves around the Sun on an elliptical orbit with a period of 5.25 years. The nucleus is 1.3 kilometers in diameter. On August 19 and 20, 2011, it became the fifteenth comet detected by ground radar telescope. During the 1995 perihelion passage, the comet was visible to Solar and Heliospheric Observatory (SOHO) on January 16, 1996, when the comet was around apparent magnitude 7 and 4.3° from the Sun. It is green because it emits diatomic carbon which glows green in the near vacuum of space.",
              "orbitalPeriodYrs": 5.25,
              // http://www.cometwatch.co.uk/bright-comets-of-2017/
            },
            {
              "name": "Encke",
              "description": "45P/Honda–Mrkos–Pajdušáková is a short-period comet discovered by Minoru Honda December 3, 1948. It is named after Minoru Honda, Antonín Mrkos, and Ľudmila Pajdušáková. The object revolves around the Sun on an elliptical orbit with a period of 5.25 years. The nucleus is 1.3 kilometers in diameter. On August 19 and 20, 2011, it became the fifteenth comet detected by ground radar telescope. During the 1995 perihelion passage, the comet was visible to Solar and Heliospheric Observatory (SOHO) on January 16, 1996, when the comet was around apparent magnitude 7 and 4.3° from the Sun. It is green because it emits diatomic carbon which glows green in the near vacuum of space.",
              "orbitalPeriodYrs": 5.25,
              // http://www.cometwatch.co.uk/bright-comets-of-2017/
            },
            ],

            "manMade": [
            {
              "name": "Chang'e 5-T1",
              "description": "Chang'e 5-T1 (Chinese: 嫦娥五号T1) is an experimental unmanned lunar mission that was launched on 23 October 2014 by the China National Space Administration (CNSA) to conduct atmospheric re-entry tests on the capsule design planned to be used in the Chang'e 5 mission. As the final part of the Chinese Lunar Exploration Program, Chang'e 5, scheduled for 2017, will be a Moon sample return mission. Like its predecessors, the spacecraft is named after the Chinese Moon goddess Chang'e.",
              "location": "Moon",
              "launchDate": "2014-10-23",
              "organisation": "CNSA"
              // https://en.wikipedia.org/wiki/Chang%27e_5-T1
            },
            {
              "name": "ARTEMIS P2",
              "description": "The mission ARTEMIS is made up of two probes P1 and P2. They were originally members of the successful Earth-orbiting THEMIS mission (studying Earth's aurora), but were redirected to the moon. Through this new mission scientists learn more about the Earth-moon Lagrange points, the solar wind, the Moon's plasma wake and how the Earth's magnetotail and the moon's own weak magnetism interact with the solar wind.",
              "location": "Moon",
              "launchData": "2007-02-17",
              "organisation": "NASA"
              // https://solarsystem.nasa.gov/missions/artemis
            },
            {
              "name": "Akatsuki",
              "description": "The Venus Climate Orbiter mission (PLANET-C), or Akatsuki, is studying the atmospheric circulation of Venus. Meteorological information will be obtained by globally mapping clouds and minor constituents successively with four cameras at ultraviolet and infrared wavelengths, detecting lightning with a high-speed imager, and observing the vertical structure of the atmosphere with radio science techniques.",
              "location": "Venus",
              "launchData": "2010-05-10",
              "organisation": "JAXA"
              // https://en.wikipedia.org/wiki/Akatsuki_(spacecraft)
              // https://solarsystem.nasa.gov/missions/akatsuki/indepth
            },
            {
              "name": "Curiosity",
              "description": "Curiosity is a car-sized rover designed for exploring Gale Crater on Mars as part of NASA's Mars Science Laboratory mission (MSL).[3] Curiosity was launched from Cape Canaveral on November 26, 2011, at 15:02 UTC aboard the MSL spacecraft and landed on Aeolis Palus in Gale Crater on Mars on August 6, 2012. The rover's goals include: investigation of the Martian climate and geology; assessment of whether the selected field site inside Gale Crater has ever offered environmental conditions favorable for microbial life, including investigation of the role of water; and planetary habitability studies in preparation for future human exploration.",
              "location": "Mars",
              "launchData": "2011-11-26",
              "organisation": "NASA"
              // https://en.wikipedia.org/wiki/Curiosity_(rover)
            },
            {
              "name": "Dawn",
              "description": "Dawn is a space probe launched by NASA in September 2007 with the mission of studying two of the three known protoplanets of the asteroid belt, Vesta and Ceres. It is currently in orbit about its second target, the dwarf planet Ceres. Dawn is the first spacecraft to orbit two extraterrestrial bodies,[6] the first spacecraft to visit either Vesta or Ceres, and also the first to visit a dwarf planet, arriving at Ceres in March 2015, a few months before New Horizons flew by Pluto in July 2015.",
              "location": "Vesta",
              "launchData": "2007-09-27",
              "organisation": "NASA"
              // https://en.wikipedia.org/wiki/Dawn_(spacecraft)
            },
            {
              "name": "Voyager 1",
              "description": "Voyager 1 is currently the farthest man-made object from Earth, as well as the first object to leave the Solar System and cross into interstellar space. As of September 2014 it lies about 129 astronomical units (AU) from the sun[5][6] (19.3 billion kilometers, or 0.002 light years), and it will not be overtaken by any other current craft. It was originally tasked with investigating Jupiter and Saturn, and the moons of these planets. Its continuing data feed offered the first direct measurements of the heliosheath and the heliopause. In August 2012, Voyager 1 became the first human built spacecraft to enter interstellar space. It is hoped that Voyager 1 will continue operating until at least 2020.",
              "location": "Interstellar Space",
              "launchData": "1977-09-05",
              "organisation": "NASA"
              // https://en.wikipedia.org/wiki/Voyager_1
            },
            {
              "name": "ICE",
              "description": "The International Cometary Explorer (ICE) spacecraft was launched into a heliocentric orbit. It was one of three spacecraft, along with the mother/daughter pair of ISEE-1 and ISEE-2, built for the International Sun-Earth Explorer (ISEE) program, a joint effort by NASA and ESRO/ESA to study the interaction between the Earth's magnetic field and the solar wind. ISEE-3 was the first spacecraft to be placed in a halo orbit at the L1 Earth-Sun Lagrangian point. Renamed ICE, it became the first spacecraft to visit a comet, passing through the plasma tail of comet Giacobini-Zinner within about 7,800 km (4,800 mi) of the nucleus on September 11, 1985.",
              "location": "Lost contact",
              "launchData": "1978-08-12",
              "organisation": "NASA"
              // https://en.wikipedia.org/wiki/Voyager_1
            },
            {
              "name": "Gaofen-1",
              "description": "Gaofen-1 (gao fen = high resolution) is the first of a series of high-resolution optical Earth observation satellites of CNSA (China National Space Administration), Beijing, China. The civilian HDEOS (High-Definition Earth Observation Satellite) program was proposed in 2006, it received government approval and was initiated in 2010. China plans to launch six HDEOS spacecraft between 2013 and 2016. 1) The main goal of the HDEOS series is to provide NRT (Near-Real-Time) observations for disaster prevention and relief, climate change monitoring, geographical mapping, environment and resource surveying, as well as for precision agriculture support. The major users of the observation data will be the Ministry of Land and Resources, Ministry of Environmental Protection, and the Ministry of Agriculture.",
              "location": "Earth",
              "launchData": "2013-04-26",
              "organisation": "CNSA"
              // https://www.google.co.uk/search?q=gaofen-1+launch+date&oq=gaofen-1+launch+date&aqs=chrome..69i57.17766j0j4&sourceid=chrome&ie=UTF-8
              // https://directory.eoportal.org/web/eoportal/satellite-missions/g/gaofen-1
            },
            {
              "name": "Landsat 8",
              "description": "Landsat 8 is an American Earth observation satellite. It is the eighth satellite in the Landsat program; the seventh to reach orbit successfully. Originally called the Landsat Data Continuity Mission (LDCM), it is a collaboration between NASA and the United States Geological Survey (USGS). NASA Goddard Space Flight Center in Greenbelt, Maryland, provided development, mission systems engineering, and acquisition of the launch vehicle while the USGS provided for development of the ground systems and will conduct on-going mission operations. The satellite was built by Orbital Sciences Corporation, who served as prime contractor for the mission. The spacecraft's instruments were constructed by Ball Aerospace and NASA's Goddard Space Flight Center,[4] and its launch was contracted to United Launch Alliance.[5] During the first 108 days in orbit, LDCM underwent checkout and verification by NASA and on 30 May 2013 operations were transferred from NASA to the USGS when LDCM was officially renamed to Landsat 8.",
              "launchData": "2013-02-11",
              "organisation": "Orbital Sciences Corporation"
              // https://landsat.usgs.gov/landsat-8
            },
            ]
          },
        },
        ],
      }
      ]
