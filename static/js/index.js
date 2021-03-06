// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

data.forEach((ufodata) => {
  var row = tbody.append("tr");
  Object.entries(ufodata).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
