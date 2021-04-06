// from data.js
var tableData = data;

// YOUR CODE HERE!
var filtertable = d3.select(".filtertable");

var form = d3.select("#form");

// Create event handlers 

// Use D3 `.on` to attach a click handler for the filtertable
filtertable.on("click", function() {

console.log("filter button pushed")
var inputElement = d3.select("#datetime");
var inputValue = inputElement.property("value");
console.log(inputValue)
var tbody = d3.select("tbody");
var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
console.log(filteredData)
tbody.html("");
//
filteredData.forEach((ufodata) => {
  var row = tbody.append("tr");
  Object.entries(ufodata).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
//
});
