//map
jQuery(document).ready(function($) {

  //map

  function initialize() {

      var stylez = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];
      var latlng = new google.maps.LatLng(59.436774, 24.752390),

          mapOptions = {
              mapTypeControlOptions: {
                  mapTypeIds: [google.maps.MapTypeId.ROADMAP, "Edited"]

              },
              zoom: 15,
              center: latlng,
              scaleControl: false,
              scrollwheel: false,
              disableDoubleClickZoom: true
          },

          map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions),

          styledMapType = new google.maps.StyledMapType(stylez, {name: "Edited"}),

          marker = new google.maps.Marker({
              position: latlng,
              map: map,
              icon: "icon.png",
              animation: google.maps.Animation.DROP,
              title:"Come visit us!"
          }),

          infowindow = new google.maps.InfoWindow({
              content: "<p>BHRS HQ</p>"
          });

          map.mapTypes.set("Edited", styledMapType);
          map.setMapTypeId('Edited');

      function toggleBounce () {
          if (marker.getAnimation() != null) {
              marker.setAnimation(null);
          } else {
              marker.setAnimation(google.maps.Animation.BOUNCE);
          }
      }

      // Add click listener to toggle bounce
      google.maps.event.addListener(marker, 'click', function () {
          toggleBounce();
          infowindow.open(map, marker);
          setTimeout(toggleBounce, 1500);
      });
  }



  setTimeout(function() {
    initialize();
  }, 1000);


});
