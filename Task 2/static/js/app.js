// from data.js
var tableData = data;

//define for handle
var tbody = d3.select("tbody");
var form=d3.select("form");
var button= d3.select("button");



var date_time = d3.select("#datetime");
var date_time_value = date_time.property("value");

var city = d3.select("#city");
var city_value = city.property("value").toLowerCase();


// insert main table
tableData.forEach((table_enter) => {
  var tbody = d3.select("tbody");
    var row = tbody.append("tr");
    Object.entries(table_enter).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
    });




    //Run this function if a date is entered
    function rundate() {
      // remove any children from the list to
     d3.event.preventDefault();
     tbody.html("");

  var userinput= d3.select("#datetime");
  var inputvalue=userinput.property('value');

  var filtered= tableData.filter(filt_Date => filt_Date.datetime === inputvalue);
 
  filtered.forEach((table_filt) => {
    var tbody = d3.select("tbody");
    var row2 = tbody.append("tr");
    Object.entries(table_filt).forEach(([key, value]) => {
      var cell2 = row2.append("td");
      cell2.text(value);
    });   
  });
};


 //Run this function if a city is entered
function runcity() {
  // remove any children from the list to
 d3.event.preventDefault();
 tbody.html("");

var userinput= d3.select("#city");
var inputvalue=userinput.property('value').toLowerCase();

var filtered= tableData.filter(filt_Date => filt_Date.city === inputvalue);

filtered.forEach((table_filt) => {
var tbody = d3.select("tbody");
var row2 = tbody.append("tr");
Object.entries(table_filt).forEach(([key, value]) => {
  var cell2 = row2.append("td");
  cell2.text(value);
});   
});
};


    //Run this function if a state is entered
function runstate() {
  // remove any children from the list to
 d3.event.preventDefault();
 tbody.html("");

var userinput= d3.select("#state");
var inputvalue=userinput.property('value').toLowerCase();

var filtered= tableData.filter(filt_Date => filt_Date.state === inputvalue);

filtered.forEach((table_filt) => {
var tbody = d3.select("tbody");
var row2 = tbody.append("tr");
Object.entries(table_filt).forEach(([key, value]) => {
  var cell2 = row2.append("td");
  cell2.text(value);
});   
});
};

    //Run this function if a shape is entered
function runshape() {
  // remove any children from the list to
 d3.event.preventDefault();
 tbody.html("");

var userinput= d3.select("#shape");
var inputvalue=userinput.property('value').toLowerCase();

var filtered= tableData.filter(filt_Date => filt_Date.shape === inputvalue);

filtered.forEach((table_filt) => {
var tbody = d3.select("tbody");
var row2 = tbody.append("tr");
Object.entries(table_filt).forEach(([key, value]) => {
  var cell2 = row2.append("td");
  cell2.text(value);
});   
});
};

//Run this function in order to decide which function above to run. This function to run on click

function runEnter()
  {
    d3.event.preventDefault();
    tbody.html("");

  var date_time = d3.select("#datetime");
  var date_time_value = date_time.property("value");

var city = d3.select("#city");
var city_value = city.property("value").toLowerCase();

var state = d3.select("#state");
var state_value = state.property("value").toLowerCase();

var shape = d3.select("#shape");
var shape_value = shape.property("value").toLowerCase()

      // if input is a datetime then run DATE
    if (date_time_value !== ""){ 
      console.log(date_time_value);
      rundate();
    };
    // if input is city run CITY
   if (city_value !== ""){
    console.log(city_value);
    runcity();
    };
  if (state_value !== ""){
    console.log(state_value);
    runstate();
     };
  if (shape_value !== ""){
    console.log(shape_value);
    runshape();
    };

  };




form.on("submit", runEnter);
button.on("click", runEnter); 