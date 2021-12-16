
// set the dimensions and margins of the graph
var margin2018 = {top: 20, right: 50, bottom: 40, left: 55},
    width2018 = 310 - margin2018.left - margin2018.right,
    height2018 = 250 - margin2018.top - margin2018.bottom;

// append the svg object to the body of the page
var svg2018 = d3.select("#data2018")
  .append("svg")
    .attr("width", width2018 + margin2018.left + margin2018.right)
    .attr("height", height2018 + margin2018.top + margin2018.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin2018.left + "," + margin2018.top + ")");

// Parse the Data
d3.csv("2018.csv", function(data) {

  // Add X axis
  var x2018 = d3.scaleLinear()
    .domain([0, 800])
    .range([ 0, width2018]);
  svg2018.append("g")
    .attr("transform", "translate(0," + height2018 + ")")
    .call(d3.axisBottom(x2018))
    .selectAll("text")
      .style("text-anchor", "end");

  // Y axis
  var y2018 = d3.scaleBand()
    .range([ 0, height2018 ])
    .domain(data.map(function(d) { return d.Country; }))
    .padding(.1);
  svg2018.append("g")
    .call(d3.axisLeft(y2018))

  //Bars
  svg2018.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x2018(0) )
    .attr("y", function(d) { return y2018(d.Country); })
    .attr("width", function(d) { return x2018(d.Value); })
    .attr("height", y2018.bandwidth() )
    .attr("fill", "#069fb0")


    // .attr("x", function(d) { return x(d.Country); })
    // .attr("y", function(d) { return y(d.Value); })
    // .attr("width", x.bandwidth())
    // .attr("height", function(d) { return height - y(d.Value); })
    // .attr("fill", "#69b3a2")

})
