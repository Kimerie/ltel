cdexApp.directive('barchart', function() {

   // constants

  var margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
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



      var xAxis = d3.svg.axis()
          .scale(x)
          .orient('bottom');

      var yAxis = d3.svg.axis()
          .scale(y)
          .orient('left');

      var chart = d3.select(element[0]).append('svg')
            .attr('height', height)
            .attr('width', width);


      // setup the domain 0 - 100%
      y.domain([0, 100]);

      var barWidth = width / data.length;

      var bar = chart.selectAll('g')
          .data(data)
          .enter().append('g')
          .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; });

      bar.append('rect')
          .attr('y', function(d) { return y(d.value); })
          .attr('height', function(d) { return height - y(d.value); })
          .attr('width', barWidth - 1)
          .style('fill', function(d) {
            // 80+ Green
            // 60 - 80 Yellow
            // 0 - 59 Red
            if (d.value >= 80) {
              return 'green';
            } else if (d.value < 80 && d.value >= 60) {
              return 'yellow';
            } else if ( d.value < 60) {
              return 'red';
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

    
    }
  }
})


cdexApp.controller('AdminController', function ($scope) {




});