'use strict';

angular.module('listProducts')
  .component('listProducts', {
    templateUrl: "app/components/list-products/list-products-view.html",
    bindings: {
      close: '&',
      dismiss: '&',
      resolve: '<'
    },
    controller: function ($scope) {
        var $ctrl = this;           
    }
});