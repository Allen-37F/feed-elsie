(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);


// First, use this command to run ngrok from Pi: "./ngrok http 3000"
// Then enter the URL of the hosted page into this variable (keep the '/' at the end please):
// var url = "http://0f4ee07a.ngrok.io/"

// If you're using localtunnel instead of ngrok, type the command "lt -s elsiefeeder --port 3000", which will host the server at:
var url = "http://elsiefeeder.localtunnel.me/"

  mainController.$inject = ['$scope', '$http'];

  function mainController($scope, $http) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';

    this.callDog = function() {
      console.log("Calling the doglet");
      $http.get(url + 'call')
      // .then(data1, error);
    }

    this.dispense = function() {
      console.log("Dispensing in 3 seconds");
      $http.get(url + 'spin')
      // .then(data1, error);
    }
  }

})();
