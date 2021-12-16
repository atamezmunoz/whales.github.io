
// set the dimensions and margins of the graph
var margin2014 = {top: 20, right: 50, bottom: 40, left: 55},
    width2014 = 310 - margin2014.left - margin2014.right,
    height2014 = 250 - margin2014.top - margin2014.bottom;

// append the svg object to the body of the page
var svg2014 = d3.select("#data2014")
  .append("svg")
    .attr("width", width2014 + margin2014.left + margin2014.right)
    .attr("height", height2014 + margin2014.top + margin2014.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin2014.left + "," + margin2014.top + ")");

// Parse the Data
d3.csv("2014.csv", function(data) {

  // Add X axis
  var x2014 = d3.scaleLinear()
    .domain([0, 800])
    .range([ 0, width2014]);
  svg2014.append("g")
    .attr("transform", "translate(0," + height2014 + ")")
    .call(d3.axisBottom(x2014))
    .selectAll("text")
      .style("text-anchor", "end");

  // Y axis
  var y2014 = d3.scaleBand()
    .range([ 0, height2014 ])
    .domain(data.map(function(d) { return d.Country; }))
    .padding(.1);
  svg2014.append("g")
    .call(d3.axisLeft(y2014))

  //Bars
  svg2014.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x2014(0) )
    .attr("y", function(d) { return y2014(d.Country); })
    .attr("width", function(d) { return x2014(d.Value); })
    .attr("height", y2014.bandwidth() )
    .attr("fill", "#069fb0")


    // .attr("x", function(d) { return x(d.Country); })
    // .attr("y", function(d) { return y(d.Value); })
    // .attr("width", x.bandwidth())
    // .attr("height", function(d) { return height - y(d.Value); })
    // .attr("fill", "#69b3a2")

})
