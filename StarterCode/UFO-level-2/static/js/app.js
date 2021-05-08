// from data.js
var tableData = data;
console.log(tableData)
console.log(tableData[0])
console.log(tableData[0].city)

var button = d3.select("#filter-btn");

var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    console.log(inputValue);
  
    var filteredData = tableData.filter(vv => vv.datetime === inputValue);
    
    console.log(filteredData);
  
    // // BONUS: Calculate summary statistics for the age field of the filtered data
    var tableBody = d3.select("tbody");
    
    filteredData.forEach((info) => {
        var eachRow = tableBody.append("tr");
        Object.entries(info).forEach(([key, value]) => {
          console.log(key, value);
          var cell = eachRow.append("td");
          cell.text(value);
        });
        console.log("----")
      });

    var filter2Data = filteredData.filter(xx=>xx.city === input2Value)
};
