// the data for the graph 
var myData = "date	Denmark	Iceland	Norway	Japan	USA	Russia\n\
1987	99	100	373	1082	32	158\n\
1988	129	78	29	241	30	150\n\
1989	91	68	17	330	29	179\n\
1990	115	0	5	327	44	162\n\
1991	125	0	1	288	47	169\n\
1992	137	0	11	330	50	0\n\
1993	130	0	226	330	52	0\n\
1994	131	0	280	351	46	44\n\
1995	174	0	218	540	59	90\n\
1996	196	0	388	517	43	43\n\
1997	175	0	503	438	66	79\n\
1998	178	0	625	490	54	126\n\
1999	196	0	591	539	48	124\n\
2000	162	0	487	532	47	116\n\
2001	166	0	552	611	75	113\n\
2002	164	0	634	688	50	134\n\
2003	209	37	647	704	41	131\n\
2004	204	25	544	755	44	112\n\
2005	193	39	639	1243	68	126\n\
2006	197	68	545	866	39	137\n\
2007	181	45	597	912	64	131\n\
2008	168	38	536	1004	50	132\n\
2009	181	206	484	825	38	116\n\
2010	214	208	468	445	71	120\n\
2011	203	58	533	540	51	128\n\
2012	167	52	464	424	69	143\n\
2013	198	169	594	475	57	128\n\
2014	176	161	736	196	53	124\n\
2015	158	184	660	520	49	125\n\
2016	177	46	591	488	62	122\n\
2017	153	17	432	596	58	120\n\
2018	131	152	454	640	69	107\n\
2019	183	0	429	335	36	138\n\
2020	189	0	503	307	69	136";
// sets margins for figure
    var margin3 = {
        top: 20,
        right: 80,
        bottom: 30,
        left: 50
      },
      // sets width and height
      width3 = 900 - margin3.left - margin3.right,
      height3 = 600 - margin3.top - margin3.bottom;

      // parses the date to year format
    var parseDate = d3.time.format("%Y").parse;

    // scales the time to fit the range
    var x = d3.time.scale()
      .range([0, width3]);

      // scales 
    var y = d3.scale.linear()
      .range([height3, 0]);

      // sets the color being used
    var color = d3.scale.category20();

    // creates the xaxis
    var xAxis = d3.svg.axis()
    .ticks(10)
      .scale(x)
      .orient("bottom");
    
      // creates the yaxis
    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

      // creates lines for each country
    var line = d3.svg.line()
      .x(function(d) {
        return x(d.date);
      })
      .y(function(d) {
        return y(d.temperature);
      });

      // creates svg 
    var svg3 = d3.select("#top6").append("svg")
      .attr("width", width3 + margin3.left + margin3.right)
      .attr("height", height3 + margin3.top + margin3.bottom)
      .append("g")
      .attr("transform", "translate(" + margin3.left + "," + margin3.top + ")");

      // parses the data 
    var data = d3.tsv.parse(myData);

    color.domain(d3.keys(data[0]).filter(function(key) {
      return key !== "date";
    }));

    data.forEach(function(d) {
      d.date = parseDate(d.date);
    });

    var cities = color.domain().map(function(name) {
      return {
        name: name,
        values: data.map(function(d) {
          return {
            date: d.date,
            temperature: +d[name]
          };
        })
      };
    });

    x.domain(d3.extent(data, function(d) {
      return d.date;
    }));

    y.domain([
      d3.min(cities, function(c) {
        return d3.min(c.values, function(v) {
          return v.temperature;
        });
      }),
      d3.max(cities, function(c) {
        return d3.max(c.values, function(v) {
          return v.temperature;
        });
      })
    ]);

    // creates a legend for the graph 
    var legend = svg3.selectAll('g')
      .data(cities)
      .enter()
      .append('g')
      .attr('class', 'legend');

      // attributes for the legend 
    legend.append('rect')
      .attr('x', width3 - 20)
      .attr('y', function(d, i) {
        return i * 20;
      })
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', function(d) {
        return color(d.name);
      });

    legend.append('text')
      .attr('x', width3 - 8)
      .attr('y', function(d, i) {
        return (i * 20) + 9;
      })
      .text(function(d) {
        return d.name;
      });

      // appends the figure to the svg
    svg3.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height3 + ")")
      .call(xAxis);

    svg3.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Whales Killed");

    var city = svg3.selectAll(".city")
      .data(cities)
      .enter().append("g")
      .attr("class", "city");

      city.append("path")
      .attr("class", "line")
      .attr("d", function(d) {
        return line(d.values);
      })
      .style("stroke", function(d) {
        return color(d.name);
      });

    city.append("text")
      .datum(function(d) {
        return {
          name: d.name,
          value: d.values[d.values.length - 1]
        };
      })
      .attr("transform", function(d) {
        return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")";
      })
      .attr("x", 3)
      .attr("dy", ".35em")
      .text(function(d) {
        return d.name;
      });

    var mouseG = svg3.append("g")
      .attr("class", "mouse-over-effects");

    mouseG.append("path") // this is the black vertical line to follow mouse
      .attr("class", "mouse-line")
      .style("stroke", "black")
      .style("stroke-width", "1px")
      .style("opacity", "0");
      
    var lines = document.getElementsByClassName('line');

    var mousePerLine = mouseG.selectAll('.mouse-per-line')
      .data(cities)
      .enter()
      .append("g")
      .attr("class", "mouse-per-line");

    mousePerLine.append("circle")
      .attr("r", 7)
      .style("stroke", function(d) {
        return color(d.name);
      })
      .style("fill", "none")
      .style("stroke-width", "1px")
      .style("opacity", "0");

    mousePerLine.append("text")
      .attr("transform", "translate(10,3)");

    mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
      .attr('width', width3) // can't catch mouse events on a g element
      .attr('height', height3)
      .attr('fill', 'none')
      .attr('pointer-events', 'all')
      .on('mouseout', function() { // on mouse out hide line, circles and text
        d3.select(".mouse-line")
          .style("opacity", "0");
        d3.selectAll(".mouse-per-line circle")
          .style("opacity", "0");
        d3.selectAll(".mouse-per-line text")
          .style("opacity", "0");
      })
      .on('mouseover', function() { // on mouse in show line, circles and text
        d3.select(".mouse-line")
          .style("opacity", "1");
        d3.selectAll(".mouse-per-line circle")
          .style("opacity", "1");
        d3.selectAll(".mouse-per-line text")
          .style("opacity", "1");
      })
      .on('mousemove', function() { // mouse moving over canvas
        var mouse = d3.mouse(this);
        d3.select(".mouse-line")
          .attr("d", function() {
            var d = "M" + mouse[0] + "," + height3;
            d += " " + mouse[0] + "," + 0;
            return d;
          });

        d3.selectAll(".mouse-per-line")
          .attr("transform", function(d, i) {
            console.log(width3/mouse[0])
            var xDate = x.invert(mouse[0]),
                bisect = d3.bisector(function(d) { return d.date; }).right;
                idx = bisect(d.values, xDate);
            
            var beginning = 0,
                end = lines[i].getTotalLength(),
                target = null;

            while (true){
              target = Math.floor((beginning + end) / 2);
              pos = lines[i].getPointAtLength(target);
              if ((target === end || target === beginning) && pos.x !== mouse[0]) {
                  break;
              }
              if (pos.x > mouse[0])      end = target;
              else if (pos.x < mouse[0]) beginning = target;
              else break; //position found
            }
            
            d3.select(this).select('text')
              .text(y.invert(pos.y).toFixed(2));
              
            return "translate(" + mouse[0] + "," + pos.y +")";
          });
      });
      
