// from data.js
var tableData = data;

//select tbody
var tbody = d3.select("tbody");

// Create functions that reduce the amount of code

// Create function that will add the data as a table
function addTable(data){
    data.forEach(function(object){
        // puts it to the log
        console.log(object);
    
        // creates a row in the table
        var row = tbody.append("tr");
    
        // loop through object and grab ket value pairs
        Object.entries(object).forEach(function([key,value]){
    
            // print to the log
            console.log(key,value);
    
            // append to the row
            var cell = row.append("td");
    
            // add text to the cell
            cell.text(value);
        });
    });    
};

function deleteTables(){
    // This clears the table data 
    d3.select("tbody").selectAll("tr").remove();
}

// reset the filters
function resetFilters(){
    deleteTables();
    addTable(tableData);
}


// add the original dataset as a table
addTable(tableData);

// select the elements wanted
// select the filter button
var filter = d3.select("#filter-btn")

// select the form
var form = d3.select("#form");

// select the reset button
var resetBtn = d3.select("#reset-btn");

// create handlers
form.on("submit",runEnter);
filter.on("click",runEnter);
resetBtn.on("click",resetFilters);

function runEnter(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // clear the table data
    deleteTables();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(row => row.datetime === inputValue);

    console.log(filteredData);

    // add the filtered data table
    addTable(filteredData);
}







