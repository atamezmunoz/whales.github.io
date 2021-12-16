
// set the dimensions and margins of the graph
var margin2010 = {top: 20, right: 50, bottom: 40, left: 55},
    width2010 = 310 - margin2010.left - margin2010.right,
    height2010 = 250 - margin2010.top - margin2010.bottom;

// append the svg object to the body of the page
var svg2010 = d3.select("#data2010")
  .append("svg")
    .attr("width", width2010 + margin2010.left + margin2010.right)
    .attr("height", height2010 + margin2010.top + margin2010.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin2010.left + "," + margin2010.top + ")");
          

// Parse the Data
d3.csv("2010.csv", function(data) {

  // Add X axis
  var x2010 = d3.scaleLinear()
    .domain([0, 800])
    .range([ 0, width2010]);
  svg2010.append("g")
    .attr("transform", "translate(0," + height2010 + ")")
    .call(d3.axisBottom(x2010))
    .selectAll("text")
      .style("text-anchor", "end");

  // Y axis
  var y2010 = d3.scaleBand()
    .range([ 0, height2010 ])
    .domain(data.map(function(d) { return d.Country; }))
    .padding(.1);
  svg2010.append("g")
    .call(d3.axisLeft(y2010))

  //Bars
  svg2010.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x2010(0) )
    .attr("y", function(d) { return y2010(d.Country); })
    .attr("width", function(d) { return x2010(d.Value); })
    .attr("height", y2010.bandwidth() )
    .attr("fill", "#069fb0")


    // .attr("x", function(d) { return x(d.Country); })
    // .attr("y", function(d) { return y(d.Value); })
    // .attr("width", x.bandwidth())
    // .attr("height", function(d) { return height - y(d.Value); })
    // .attr("fill", "#69b3a2")

})
