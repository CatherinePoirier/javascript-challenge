
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


//var header=['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']
// for (var i=0; i<data.length; i++){
//      console.log(data[i]);
// }
//var rowrow=tbody.append('tr');
// current_data=data[2]
//------------------------------------------------------
// data.forEach((one_row)=>{
//     var rowrow=tbody.append('tr');
//     // Object.defineProperties(one_row).forEach(([k, v])=>{
//     //     rowrow.append('td').text(v);
//     // });
//     header.forEach((one_key)=>{
//         rowrow.append('td').text(onerow[one_key]);
//     });
// });
//-------------------------------------------------------
// value_list=(Object.values(current_data));
// for (var i=0; i<value_list.length; i++){
//     rowrow.append('td').text(value_list[i]);
// }

//Use a date form in your HTML document and write JavaScript code that will listen for events 
//and search through the date/time column to find rows that match user input.



