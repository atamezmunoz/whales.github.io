
// set the dimensions and margins of the graph
var margin2012 = {top: 20, right: 50, bottom: 40, left: 55},
    width2012 = 310 - margin2012.left - margin2012.right,
    height2012 = 250 - margin2012.top - margin2012.bottom;

// append the svg object to the body of the page
var svg2012 = d3.select("#data2012")
  .append("svg")
    .attr("width", width2012 + margin2012.left + margin2012.right)
    .attr("height", height2012 + margin2012.top + margin2012.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin2012.left + "," + margin2012.top + ")");

// Parse the Data
d3.csv("2012.csv", function(data) {

  // Add X axis
  var x2012 = d3.scaleLinear()
    .domain([0, 800])
    .range([ 0, width2012]);
  svg2012.append("g")
    .attr("transform", "translate(0," + height2012 + ")")
    .call(d3.axisBottom(x2012))
    .selectAll("text")
      .style("text-anchor", "end");

  // Y axis
  var y2012 = d3.scaleBand()
    .range([ 0, height2012 ])
    .domain(data.map(function(d) { return d.Country; }))
    .padding(.1);
  svg2012.append("g")
    .call(d3.axisLeft(y2012))

  //Bars
  svg2012.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x2012(0) )
    .attr("y", function(d) { return y2012(d.Country); })
    .attr("width", function(d) { return x2012(d.Value); })
    .attr("height", y2012.bandwidth() )
    .attr("fill", "#069fb0")


    // .attr("x", function(d) { return x(d.Country); })
    // .attr("y", function(d) { return y(d.Value); })
    // .attr("width", x.bandwidth())
    // .attr("height", function(d) { return height - y(d.Value); })
    // .attr("fill", "#69b3a2")

})
