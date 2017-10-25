ourApp.controller('indexCtrl', [ "$scope", "$resource", function($scope, $resource) {
  function init() {
    $scope.appName = "Digital Delivery";
    $scope.email = "";
    $scope.message = "";
  }

  init();

  $scope.addUser = function() {
    var controller = "backend/registerUser.php";
    var emailResponse = $resource(controller + '?email=' + $scope.email);
    emailResponse.get(function(data) {
      $scope.email = "";
      if (data.response) {
        $scope.message = "OK";
      } else {
        $scope.message = "SUBSCRIBE_OK";
      }
    });
  }

  var $doc = $('html, body');
  $('.scrollSuave').click(function() {
    $doc.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });
}]);
