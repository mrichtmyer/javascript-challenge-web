// from data.js
var tableData = data;

// YOUR CODE HERE!
function buildTable(date_query,city_query) {

    // delete table from previous query
    d3.select("#ufo-table tbody tr").remove();
    
    // need to test if args are non null before going into filter function

    // works if both args are non-null
    // grab data from JSON file
    function grabData(item){
        return item.datetime == date_query && item.city == city_query;
    }
    var data = tableData.filter(grabData)

    // preallocate lists to push data into
    var datetime = [];
    var city = [];
    var state = [];
    var country = [];
    var shape = [];
    var durationMinutes = [];
    var comments = [];
    
    // comment right here!
    for (var i=0; i<data.length; i++){
        // push data into lists
        datetime.push(data[i].datetime);
        city.push(data[i].city);
        state.push(data[i].state);
        country.push(data[i].country);
        shape.push(data[i].shape);
        durationMinutes.push(data[i].durationMinutes);
        comments.push(data[i].comments);
    }

    // grab table elements from html
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;

    // populate table    
    for (var i = 0; i < datetime.length; i++) {
      trow = tbody.append("tr");

      trow.append("td").text(datetime[i]);
      trow.append("td").text(city[i]);
      trow.append("td").text(state[i]);
      trow.append("td").text(country[i]);
      trow.append("td").text(shape[i]);
      trow.append("td").text(durationMinutes[i]);
      trow.append("td").text(comments[i]);
      //console.log(city[i])
    }
    
  }

// Submit Button handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input value from the form
    var date_query = d3.select("#datetime").node().value;
    var city_query = d3.select("#city").node().value;
    //console.log(city_query);
  
    // clear the input value
    d3.select("#datetime").node().value = "";
    d3.select("#city").node().value = "";
  
    // Build the plot with the new stock
    buildTable(date_query, city_query);
  }


  //buildTable();

  d3.select("#filter-btn").on("click", handleSubmit);