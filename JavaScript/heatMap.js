
    // set the dimensions and margins of the graph
    const marginhm = {top: 80, right: 0, bottom: 30, left: 70},
      widthhm = 950;
      heighthm = 450 - marginhm.top - marginhm.bottom;
    
    // append the svg object to the body of the page
    const svghm = d3.select("#heatmap")
    .append("svg")
      .attr("width", widthhm + marginhm.left + marginhm.right)
      .attr("height", heighthm + marginhm.top + marginhm.bottom)
    .append("g")
      .attr("transform", `translate(${marginhm.left}, ${marginhm.top})`);
    
    //Read the data
    d3.csv("heatMap.csv").then(function(data) {
    
      // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
      const myGroups = Array.from(new Set(data.map(d => d.group)))
      const myVars = Array.from(new Set(data.map(d => d.variable)))
    
      // Build X scales and axis:
      const x = d3.scaleBand()
        .range([ 0, widthhm ])
        .domain(myGroups)
        .padding(0.05);
      svghm.append("g")
        .style("font-size", 11)
        .attr("transform", `translate(0, ${heighthm})`)
        .call(d3.axisBottom(x).tickSize(0))
        .select(".domain").remove()
    
      // Build Y scales and axis:
      const yhm = d3.scaleBand()
        .range([ heighthm, 0 ])
        .domain(myVars)
        .padding(0.05);
      svghm.append("g")
        .style("font-size", 15)
        .call(d3.axisLeft(yhm).tickSize(0))
        .select(".domain").remove()
    
      // Build color scale
      const myColorhm = d3.scaleSequential()
        .interpolator(d3.interpolateBlues)
        .domain([1,800])
    
      // create a tooltip
      const tooltiphm = d3.select("#heatmap")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "0px")
        .style("border-radius", "5px")
        .style("padding-left", "400px")
    
      // Three function that change the tooltip when user hover / move / leave a cell
      const mouseoverhm = function(event,d) {
        tooltiphm
          .style("opacity", 1)
        d3.select(this)
          .style("stroke-width", 2)

          .style("stroke", "black")
          .style("opacity", 1)
      }
      const mousemovehm = function(event,d) {
        tooltiphm
            .attr("x", 50)
          .html(d.variable + " killed " + d.value + " whales in " + d.group)
          .style("left", (event.x)/2 + "px")
          .style("top", (event.yhm)/2 + "px")
      }
      const mouseleavehm = function(event,d) {
        tooltiphm
          .style("opacity", 0)
        d3.select(this)
        .style("stroke-width", .5)
        .style("stroke", "gray")
      }
    
      // add the squares
      svghm.selectAll()
        .data(data, function(d) {return d.group+':'+d.variable;})
        .join("rect")
          .attr("x", function(d) { return x(d.group) })
          .attr("y", function(d) { return yhm(d.variable) })
          .attr("rx", 4)
          .attr("ry", 4)
          .attr("width", x.bandwidth() )
          .attr("height", yhm.bandwidth() )
          .style("fill", function(d) { return myColorhm(d.value)} )
          .style("stroke-width", .5)
          .style("stroke", "gray")
          .style("opacity", 0.8)
        .on("mouseover", mouseoverhm)
        .on("mousemove", mousemovehm)
        .on("mouseleave", mouseleavehm)
    })
    
    var quantize = d3.scaleQuantize()
  .domain([ 0, 0.15 ])
  .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));
