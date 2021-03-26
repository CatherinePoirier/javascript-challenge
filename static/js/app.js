
// Using the UFO dataset provided in the form of an array of JavaScript objects, 
//write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
//from data.js
var tableData = data;
var tbody = d3.select("tbody");

for (var i=0; i<data.length; i++){   
    var rowrow=tbody.append('tr');
    current_data=data[i];
    value_list=Object.values(current_data);
    for (var x=0; x<value_list.length; x++){
        rowrow.append('td').text(value_list[x]);
    };
 };

//Use a date form in your HTML document and write JavaScript code that will listen for events 
//and search through the date/time column to find rows that match user input.

var button = d3.select("#filter-btn");  //previously #button  // Select the button

button.on("click", runEnter);       // Create event handlers 

// Complete the event handler function for the form
function runEnter() {
    tbody.html("");
    d3.event.preventDefault();    //Prevent the page from refreshing
    var inputElement = d3.select("#datetime");   //Select the input element and get the raw HTML node

    var inputValue = inputElement.property("value");   //Get the value property of the input element
  
    console.log(inputValue);
  //  console.log(tableData);
    var filteredData = tableData.filter(day => day.datetime === inputValue);
    
    for (var i=0; i<filteredData.length; i++){   
    var rowrow=tbody.append('tr');
    current_data2=filteredData[i];
    value_list=Object.values(current_data2);
    for (var x=0; x<value_list.length; x++){
        rowrow.append('td').text(value_list[x]);
    };
};
    console.log(filteredData);
}


