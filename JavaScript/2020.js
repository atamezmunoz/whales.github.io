
// set the dimensions and margins of the graph
var margin2020 = {top: 20, right: 50, bottom: 40, left: 55},
    width2020 = 310 - margin2020.left - margin2020.right,
    height2020 = 250 - margin2020.top - margin2020.bottom;

// append the svg object to the body of the page
var svg2020 = d3.select("#data2020")
  .append("svg")
    .attr("width", width2020 + margin2020.left + margin2020.right)
    .attr("height", height2020 + margin2020.top + margin2020.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin2020.left + "," + margin2020.top + ")");

// Parse the Data
d3.csv("2020.csv", function(data) {

  // Add X axis
  var x2020 = d3.scaleLinear()
    .domain([0, 800])
    .range([ 0, width2020]);
  svg2020.append("g")
    .attr("transform", "translate(0," + height2020 + ")")
    .call(d3.axisBottom(x2020))
    .selectAll("text")
      .style("text-anchor", "end");

  // Y axis
  var y2020 = d3.scaleBand()
    .range([ 0, height2020 ])
    .domain(data.map(function(d) { return d.Country; }))
    .padding(.1);
  svg2020.append("g")
    .call(d3.axisLeft(y2020))

  //Bars
  svg2020.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x2020(0) )
    .attr("y", function(d) { return y2020(d.Country); })
    .attr("width", function(d) { return x2020(d.Value); })
    .attr("height", y2020.bandwidth() )
    .attr("fill", "#069fb0")


    // .attr("x", function(d) { return x(d.Country); })
    // .attr("y", function(d) { return y(d.Value); })
    // .attr("width", x.bandwidth())
    // .attr("height", function(d) { return height - y(d.Value); })
    // .attr("fill", "#69b3a2")

})
