const bf1 = [
    {group: "Denmark", value: 156},
    {group: "Iceland", value: 116},
    {group: "Norway", value: 379},
    {group: "VC", value: 2},
    {group: "Japan", value: 2769},
    {group: "Korea", value: 69},
    {group: "USA", value: 30},
    {group: "USSR", value: 3197},
    {group: "Indonesia", value: 9},
 ];
 
 const bf2 = [
    {group: "Canada", value: 1},
    {group: "Denmark", value: 189},
    {group: "Norway", value: 503},
    {group: "Japan", value: 307},
    {group: "Korea", value: 2},
    {group: "Russia", value: 136},
    {group: "USA", value: 69},
    {group: "Indonesia", value: 18},
 ];

 const bf3 = [
   {group: "Denmark", value: 99},
   {group: "Iceland", value: 100},
   {group: "Norway", value: 373},
   {group: "VC", value: 2},
   {group: "Japan", value: 1082},
   {group: "USA", value: 32},
   {group: "URRS", value: 158},
   {group: "Indonesia", value: 7},
 ]
 
 // set the dimensions and margins of the graph
 const margin2 = {top: 30, right: 30, bottom: 70, left: 60},
     width2 = 460 - margin2.left - margin2.right,
     height2 = 400 - margin2.top - margin2.bottom;
 
 // append the svg object to the body of the page
 const svg2 = d3.select("#beforeAfter")
   .append("svg")
     .attr("width", width2 + margin2.left + margin2.right)
     .attr("height", height2 + margin2.top + margin2.bottom)
   .append("g")
     .attr("transform", `translate(${margin2.left},${margin2.top})`);
 
 // Initialize the X axis
 const x2 = d3.scaleBand()
   .range([ 0, width2 ])
   .padding(0.2);
 const xAxis2 = svg2.append("g")
   .attr("transform", `translate(0,${height2})`)
 
 // Initialize the Y axis
 const y2 = d3.scaleLinear()
   .range([ height2, 0]);
 const yAxis2 = svg2.append("g")
   .attr("class", "myYaxis")
 
 
 // A function that create / update the plot for a given variable:
 function update(data) {
 
   // Update the X axis
   x2.domain(data.map(d => d.group))
   xAxis2.call(d3.axisBottom(x2))
 
   // Update the Y axis
   y2.domain([0, d3.max(data, d => d.value) ]);
   yAxis2.transition().duration(1000).call(d3.axisLeft(y2));
 
   // Create the u variable
   var u = svg2.selectAll("rect")
     .data(data)
 
   u
     .join("rect") // Add a new rect for each new elements
     .transition() 
     .duration(1000)
       .attr("x", d => x2(d.group))
       .attr("y", d => y2(d.value))
       .attr("width", x2.bandwidth())
       .attr("height", d => height2 - y2(d.value))
       .attr("fill", "#069fb0")
 }
 
 // Initialize the plot with the first dataset
 update(bf1)