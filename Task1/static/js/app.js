// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var form=d3.select("form")
var button= d3.select("button");


// YOUR CODE HERE!
tableData.forEach((table_enter) => {
  var tbody = d3.select("tbody");
    var row = tbody.append("tr");
    Object.entries(table_enter).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
    });



function runEnter() {
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


form.on("submit", runEnter);
button.on("click", runEnter); 