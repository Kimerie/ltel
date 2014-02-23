cdexApp.directive('barchart', function() {

   // constants

  var margin = {top: 20, right: 40, bottom: 30, left: 40},
    width = 800 - margin.left - margin.right,
    height = 330 - margin.top - margin.bottom;      

  return {
    // required to make it work as an element
    restrict: 'E',
    scope: {
      data: '='
    },

    // observe and manipulate the DOM
    link: function($scope, element, attrs) {
      
      // hardcoded data

      data = [
        {
          'skill': 'FANBOY',
          'value': 70
        },
        {
          'skill': 'Vocab',
          'value': 30
        },
        {
          'skill': 'Precision',
          'value': 95
        },
        {
          'skill': 'Transitions',
          'value': 45
        },
        {
          'skill': 'Caution!',
          'value': 83
        }
      ];
    

      

      /*
      d3.xml('img/barGraph.svg', 'image/svg+xml', function (error, data) {
        d3.select(element[0]).node().appendChild(data.documentElement);
      });

      */

      
      // set up initial svg object
                    
      var x = d3.scale.linear()
          .range([width, 0]);

      var y = d3.scale.linear()
          .range([height, 0]);

      // setup the domain 0 - 100%
      y.domain([0, 100]);

      var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);


      var xAxis = d3.svg.axis()
          .scale(x)
          .orient('bottom');

      var chart = d3.select(element[0]).append('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");





      var barWidth = width / data.length;

      var bar = chart.selectAll('g')
          .data(data)
          .enter().append('g')
          .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; });


      bar.append('rect')
          .attr('y', function(d) { return y(d.value); })
          .attr('height', 0)
          .attr('width', 0)
        .transition()
          .delay(function(d, i) { return (i + 2) * 200; })
          .duration(600)
          .attr('width', barWidth - 10)
          .attr('height', function(d) { return height - y(d.value); })
          
          
          .style('fill', function(d) {
            // 80+ Green
            // 60 - 80 Yellow
            // 0 - 59 Red
            if (d.value >= 80) {
              return '#2CB171';
            } else if (d.value < 80 && d.value >= 60) {
              return '#EBBD19';
            } else if ( d.value < 60) {
              return '#E2493B';
            } else {
              // super error
              return 'purple';
            }
          });

      bar.append('text')
          .attr('x', barWidth / 2)
          .attr('y', function(d) { return y(d.value) + 3; })
          .attr('dy', '.75em')
          .text(function(d) { return d.value });



      chart.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Scores");  


      // make a line at 80
      bar.append('line')
          .attr('x1', x(0))
          .attr('x2', x(width))
          .attr('y1', y(80))
          .attr('y2', y(80))
          .style("stroke", "#334A53")
          .style('stroke-opacity', 0.2)
          .style('stroke-width', '5px');      
    }
  }
})


cdexApp.controller('AdminController', function ($scope) {




});