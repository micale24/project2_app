// Load data from hours-of-tv-watched.csv
d3.csv("./Crash_Reporting_-_Incidents_Data").then(function(crashData) {
  console.log(crashData);
  // log a list of names
  var names = crashData.map(data => data.reportNum);
  console.log("names", names);
  // Cast each hours value in tvData as a number using the unary + operator
//   crashData.forEach(function(data) {
//     data.hours = +data.hours;
//     console.log("Name:", data.name);
//     console.log("Hours:", data.hours);
//   });
}).catch(function(error) {
  console.log(error);
});