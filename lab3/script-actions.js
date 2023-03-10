mapboxgl.accessToken ='pk.eyJ1IjoiYmVybjY2IiwiYSI6ImNsZG0xMjBqdTA0eWMzeG81Mzk4NjFsMWQifQ.9POsafO8U6TU5MkjHuOZMA';

//Map output
const map= new mapboxgl.Map({
    container:'map1',
    style:'mapbox://styles/bern66/cle3kvhv9000101mrb2cnxhvg', //My map style (dark)
    projection: 'globe',
    center:[31.13418908201885,29.979196055767687],
    zoom: 2,
// I want users to be able to play with the globe

});

//Search controls//


//Adding the ability to zomm and rotate//
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
   
    })
);

//zoom in and out
map.addControl(new mapboxgl.NavigationControl());

//fullscreen option

map.addControl(new mapboxgl.FullscreenControl());

//My data
map.on('load', () => {

    map.addSource('Wonders', {
        type: 'geojson',
        data: {

//Geographic Locations of Old world//

            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Great Pyramid of Giza",
                        "Period": "Old World",
                        "image": "./images/Pyramids.jpg"
                        
                    },
                    "geometry": {
                        "coordinates": [
                            31.13418908201885,
                            29.979196055767687
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Lighthouse of Alexandria",
                        "Period": "Old World",
                        "image": "./images/lighthouse of Alexandria.jpg"
                    },
                    "geometry": {
                        "coordinates": [
                            29.824670493706265,
                            31.13829837181204
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Colossus of Rhodes",
                        "Period": "Old World",
                        "image": "./images/Colossus of Rhodes.jpg"
                    },
                    "geometry": {
                        "coordinates": [
                            27.138905377715957,
                            36.613876220964556
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Mausoleum of Halicarnassus",
                        "Period": "Old World",
                        "image": "./images/Mausoleum of Halicarnassus.jpg"
                    },
                    "geometry": {
                        "coordinates": [
                            27.42463668733174,
                            37.03670806086441
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Statue of Zeus at Olympia",
                        "Period": "Old World",
                        "image": "./images/Statue of Zeus at Olympia.jpg"
                    },
                    "geometry": {
                        "coordinates": [
                            21.629108782411294,
                            37.639406430375246
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Hanging Gardens of Babylon",
                        "Period": "Old World",
                        "image": "./images/Hanging Gardens of Babylon.jpg"
                    },
                    "geometry": {
                        "coordinates": [
                            44.419534620511,
                            32.5409001795539
                        ],
                        "type": "Point"
                        
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Temple of Artemis",
                        "Period": "Old World",
                        "image": "./images/Temple of Artemis at Ephesus.jpg.jpg"
                    },
                    "geometry": {
                        "coordinates": [
                            27.363847085243833,
                            37.949680032722114
                        ],
                        "type": "Point"
                    }
                },
//Geographic Location of New Wonders//

                {
                    "type": "Feature",
                    "properties": {
                    "name": "Chichen Itza",
                    "Period": "New World",
                    "image": "./images/Chichen Itza.jpg"
                    },
                    "geometry": {
                      "coordinates": [
                        -88.56864508911947,
                        20.682968095660243
                      ],
                      "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                    "name":"Rome Colosseum",
                    "Period": "New World",
                    "image": "./images/Rome Colosseum.jpg"
                    },
                    "geometry": {
                      "coordinates": [
                        12.492206511865504,
                        41.89059299331748
                      ],
                      "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                    "name":"Great Wall of China",
                    "Period": "New World",
                    "image": "./images/Great Wall of China.jpg"
                    },
                    "geometry": {
                      "coordinates": [
                        116.53852172137641,
                        40.41626093595181
                      ],
                      "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                    "name":"Christ the Redeemer",
                    "Period": "New World",
                    "image": "./images/Christ the Redeemer.jpg"
                    },
                    "geometry": {
                      "coordinates": [
                        -43.21108192511821,
                        -22.952247416191398
                      ],
                      "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                    "name":"Machu Picchu",
                    "Period": "New World",
                    "image": "./images/Machu Picchu.jpg"
                    
                    },
                    "geometry": {
                      "coordinates": [
                        -72.54527308136444,
                        -13.164173671354575
                      ],
                      "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                    "name":"Petra",
                    "Period": "New World",
                    "image": "./images/Chichen Itza.jpg"
                    
                    },
                    "geometry": {
                      "coordinates": [
                        35.44445131861758,
                        30.32693480123848
                      ],
                      "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                    "name":"Taj Mahal",
                    "Period": "New World",
                    "image": "./images/Chichen Itza.jpg"
                    },
                    "geometry": {
                      "coordinates": [
                        78.04216158465852,
                        27.17466673736
                      ],
                      "type": "Point"
                    }
                }

            ]
        }
    })

    //Construction of Points and markers
    map.addLayer ({
        'id': 'Wonders-pnts',
        'type': 'circle',
        'source': 'Wonders',
        'paint': {
            'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                1, 20, // zomm level 1, marker 20
                20, 1   // zomm level 20, marker 1
            ],
            'circle-color': [
                'match',
                ['get', 'Period'], 
                'New World', '#B42222', 
                'Old World', 'Green',
                '#ccc'
               
              ]
        }
    });
// Countries Tileset
map.addSource('countries', {
    type: 'vector',
    url: 'mapbox://bern66.15b4kr1l'
  })
  
  // Countries layer
  map.addLayer({
    'id': 'country-layer',
    'type': 'fill',
    'source': 'countries',
    'source-layer': 'All_countries-3anpyb',
    'paint': {
      'fill-color': '#627BC1',
      'fill-opacity': 0.1
    }
  });
   
  //On click event

  map.on('mouseenter', 'Wonders-pnts', () => {
    map.getCanvas().style.cursor = 'default';
  });

  map.on('mouseleave', 'Wonders-pnts', () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  //Popup with name, period, and image associated with each wonder of the world.

  map.on('click', 'Wonders-pnts', (e) => {
    const feature = e.features[0];
    const imageUrl = feature.properties.image;
    const popupText = "<b>Wonder:</b> " + feature.properties.name + "<br>" +
        "<b>Period:</b>" + feature.properties.Period + "<br>" +
        "<img src='" + imageUrl + "' alt='" + feature.properties.name + "' style='max-width: 200px; max-height: 200px;'>";
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(popupText)
        .addTo(map);
});
})







