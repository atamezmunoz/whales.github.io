
// set the dimensions and margins of the graph
var margin2016 = {top: 20, right: 50, bottom: 40, left: 55},
    width2016 = 310 - margin2016.left - margin2016.right,
    height2016 = 250 - margin2016.top - margin2016.bottom;

// append the svg object to the body of the page
var svg2016 = d3.select("#data2016")
  .append("svg")
    .attr("width", width2016 + margin2016.left + margin2016.right)
    .attr("height", height2016 + margin2016.top + margin2016.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin2016.left + "," + margin2016.top + ")");

// Parse the Data
d3.csv("2016.csv", function(data) {

  // Add X axis
  var x2016 = d3.scaleLinear()
    .domain([0, 800])
    .range([ 0, width2016]);
  svg2016.append("g")
    .attr("transform", "translate(0," + height2016 + ")")
    .call(d3.axisBottom(x2016))
    .selectAll("text")
      .style("text-anchor", "end");

  // Y axis
  var y2016 = d3.scaleBand()
    .range([ 0, height2016 ])
    .domain(data.map(function(d) { return d.Country; }))
    .padding(.1);
  svg2016.append("g")
    .call(d3.axisLeft(y2016))

  //Bars
  svg2016.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x2016(0) )
    .attr("y", function(d) { return y2016(d.Country); })
    .attr("width", function(d) { return x2016(d.Value); })
    .attr("height", y2016.bandwidth() )
    .attr("fill", "#069fb0")


    // .attr("x", function(d) { return x(d.Country); })
    // .attr("y", function(d) { return y(d.Value); })
    // .attr("width", x.bandwidth())
    // .attr("height", function(d) { return height - y(d.Value); })
    // .attr("fill", "#69b3a2")

})
