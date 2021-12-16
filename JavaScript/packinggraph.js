
    // set the dimensions and margins of the graph
    const width = 1300
    const height = 450


    // append the svg object to the body of the page
    const svg = d3.select("#my_dataviz")
      .append("svg")
        .attr("width", 1500)
        .attr("height", 500)

    
    
    // create dummy data -> just one element per circle
    const data1 = d3.csv("Book5.csv");

    const data = [{ "name": "A", "group": 1 }, { "name": "A", "group": 1 }, { "name": "A", "group": 1 }, { "name": "A", "group": 1 }, { "name": "A", "group": 1 }, { "name": "A", "group": 1 }, { "name": "A", "group": 1 }, { "name": "A", "group": 1 }, { "name": "A", "group": 1 }, { "name": "A", "group": 1 }, { "name": "A", "group": 1 }, { "name": "A", "group": 1 }, { "name": "A", "group": 1 }, { "name": "A", "group": 1 }, { "name": "A", "group": 1 }, { "name": "A", "group": 1 },
    { "name": "B", "group": 2 }, { "name": "B", "group": 2 }, { "name": "B", "group": 2 }, { "name": "B", "group": 2 }, { "name": "B", "group": 2 }, { "name": "B", "group": 2 }, { "name": "B", "group": 2 }, { "name": "B", "group": 2 }, { "name": "B", "group": 2 }, { "name": "B", "group": 2 }, 
    { "name": "C", "group": 3 }, 
    { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, { "name": "D", "group": 4 }, 
    { "name": "E", "group": 5 }, { "name": "E", "group": 5 }, { "name": "E", "group": 5 }, { "name": "E", "group": 5 }, { "name": "E", "group": 5 }, { "name": "E", "group": 5 }, { "name": "E", "group": 5 }, { "name": "E", "group": 5 }, { "name": "E", "group": 5 }, { "name": "E", "group": 5 }, { "name": "E", "group": 5 }, { "name": "E", "group": 5 }, { "name": "E", "group": 5 }, { "name": "E", "group": 5 }, { "name": "E", "group": 5 }, { "name": "E", "group": 5 }, { "name": "E", "group": 5 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, { "name": "F", "group": 6 }, 
    { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, 
    { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, 
    { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, 
    { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 }, { "name": "G", "group": 7 },
    { "name": "H", "group": 8 }, { "name": "H", "group": 8 }, { "name": "H", "group": 8 }, { "name": "H", "group": 8 }, { "name": "H", "group": 8 }, { "name": "H", "group": 8 }, { "name": "H", "group": 8 }, { "name": "H", "group": 8 }, { "name": "H", "group": 8 }, { "name": "H", "group": 8 }, 
    { "name": "H", "group": 8 }, { "name": "H", "group": 8 }, { "name": "H", "group": 8 }, { "name": "H", "group": 8 }, { "name": "H", "group": 8 }, { "name": "H", "group": 8 }, { "name": "H", "group": 8 }, { "name": "H", "group": 8 }, { "name": "H", "group": 8 } ]
    
    // A scale that gives a X target position for each group
    const x = d3.scaleOrdinal()
      .domain([1, 2, 3, 4, 5, 6, 7, 8])
      .range([30, 120, 200, 290, 390, 590, 790, 900])
    
    // A color scale
    const color = d3.scaleOrdinal()
      .domain([1, 2, 3, 4, 5, 6, 7, 8])
      .range([ "#069fb0", "#069fb0", "#069fb0", "#069fb0","#069fb0","#069fb0","#069fb0","#069fb0"])
    
    // Initialize the circle: all located at the center of the svg area
    const node = svg.append("svg")
      .selectAll("circle")
      .data(data)
      .join("circle")
        .attr("r", 4)
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .style("fill", d => color(d.group))
        .style("fill-opacity", 0.8)
        .attr("stroke", "black")
        .style("stroke-width", .5)

        .call(d3.drag() // call specific function when circle is dragged
             .on("start", dragstarted)
             .on("drag", dragged)
             .on("end", dragended));

      svg.append("text")
      .attr("x", 18)
      .attr("y", 100)
      .text("Fin")
      svg.append("text")
      .attr("x", 0)
      .attr("y", 120)
      .text("Whales");

      svg.append("text")
      .attr("x", 94)
      .attr("y", 320)
      .text("Sperm");
      svg.append("text")
      .attr("x", 92)
      .attr("y", 340)
      .text("Whales");

      svg.append("text")
      .attr("x", 160)
      .attr("y", 100)
      .text("Humback");
      svg.append("text")
      .attr("x", 172)
      .attr("y", 120)
      .text("Whales");

      svg.append("text")
      .attr("x", 280)
      .attr("y", 320)
      .text("Sei");
      svg.append("text")
      .attr("x", 265)
      .attr("y", 340)
      .text("Whales");

      svg.append("text")
      .attr("x", 368)
      .attr("y", 100)
      .text("Bryde's");
      svg.append("text")
      .attr("x", 370)
      .attr("y", 120)
      .text("Whales");

      svg.append("text")
      .attr("x", 570)
      .attr("y", 440)
      .text("Minke");
      svg.append("text")
      .attr("x", 567)
      .attr("y", 460)
      .text("Whales");

      svg.append("text")
      .attr("x", 768)
      .attr("y", 90)
      .text("Gray");
      svg.append("text")
      .attr("x", 760)
      .attr("y", 110)
      .text("Whales");

      svg.append("text")
      .attr("x", 865)
      .attr("y", 320)
      .text("Bowhead");
      svg.append("text")
      .attr("x", 875)
      .attr("y", 340)
      .text("Whales");

    // Features of the forces applied to the nodes:
    var simulation = d3.forceSimulation()
        .force("x", d3.forceX().strength(0.5).x(d => x(d.group)))
        .force("y", d3.forceY().strength(0.05).y( height/2 ))
        //.force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
        .force("charge", d3.forceManyBody().strength(1)) // Nodes are attracted one each other of value is > 0
        .force("collide", d3.forceCollide().strength(.1).radius(10).iterations(1)) // Force that avoids circle overlapping
    
    // Apply these forces to the nodes and update their positions.
    // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
    simulation
        .nodes(data)
        .on("tick", function(d){
          node
              .attr("cx", d => d.x)
              .attr("cy", d => d.y)
        });
    
    // What happens when a circle is dragged?
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(.03).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(.03);
      d.fx = null;
      d.fy = null;
    }