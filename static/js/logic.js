// // Creating map object
// var myMap = L.map("map", {
//   center: [39.15, -77.24],
//   zoom: 11
// });

// // Adding tile layer to the map
// L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//   tileSize: 512,
//   maxZoom: 18,
//   zoomOffset: -1,
//   id: "mapbox/streets-v11",
//   accessToken: API_KEY
// }).addTo(myMap);

// // Store API query variables
// var baseURL = "https://data.montgomerycountymd.gov/resource/bhju-22kf.json";
// // var date = "$where=created_date between'2016-01-01T00:00:00' and '2017-01-01T00:00:00'";
// // var complaint = "&complaint_type=Rodent";
// // var limit = "&$limit=10000";

// // Assemble API query URL
// var url = baseURL; 
// // + date + complaint + limit;

// // Grab the data with d3
// d3.json(url, function(response) {

//   // Create a new marker cluster group
//   var markers = L.markerClusterGroup();

//   // Loop through data
//   for (var i = 0; i < response.length; i++) {

//     // Set the data location property to a variable
//     // var location = response[i].data;
//     var location = response["geolocation"];
//     console.log(location);
//     // Check for location property
//     if (location) {

//       // Add a new marker to the cluster group and bind a pop-up
//       markers.addLayer(L.marker([location.latitude, location.longitude)
//         .bindPopup(response[i]).agency_name);
//     }

//   }

//   // Add our marker cluster layer to the map
//   myMap.addLayer(markers);

// });

// Creating map object
var myMap = L.map("map", {
  // center: [40.7, -73.95],
  center: [39.15, -77.24],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Store API query variables
var baseURL = "https://data.montgomerycountymd.gov/resource/bhju-22kf.json";
// var date = "$where=created_date between'2016-01-01T00:00:00' and '2017-01-01T00:00:00'";
// var complaint = "&complaint_type=Rodent";
// var limit = "&$limit=10000";

// Assemble API query URL
var url = baseURL 
// + date + complaint + limit;

// Grab the data with d3
d3.json(url, function(response) {

  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    
    var geolocation = response[i];
    
    // Check for location property
    if (location) {

      // Add a new marker to the cluster group and bind a pop-up
      
      markers.addLayer(L.marker([geolocation.latitude, geolocation.longitude])
      .bindPopup(response[i].acrs_report_type));

    }
      
  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});




