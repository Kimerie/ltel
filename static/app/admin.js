cdexApp.directive('barchart', function() {
  return {
    // required to make it work as an element
    restrict: 'E',

    // replace <photo> with this html
    template: '<div>YO</div>',
    replace: true,

    // observe and manipulate the DOM
    link: function($scope, element, attrs) {
      console.log('sup');

    }
  }
})


cdexApp.controller('AdminController', function ($scope) {

  console.log('test');

});