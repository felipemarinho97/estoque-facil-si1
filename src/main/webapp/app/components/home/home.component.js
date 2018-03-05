'use strict';

angular.module('home')
  .component('home', {
    templateUrl: "app/components/home/home.view.html",
    bindings: {
      close: '&',
      dismiss: '&',
      resolve: '<'
    },
    controller: function ($scope) {
        var $ctrl = this;           
    }
});