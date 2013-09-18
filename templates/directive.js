/**
 * @ngdoc directive
 * @name ${_s.camelize(app)}.${_s.camelize(module)}:Directives.${_s.camelize(name)}
 * @description
 * ...
 */
angular('${_s.camelize(app)}.${_s.camelize(module)}')
  .directives('${_s.camelize(name)}',['$scope', function ($scope) {
    'use strict';
    
    return {
      priority: 0,
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attr, ngModel) {

        /**
         * @ngdoc method
         * @name fromField
         * @methodOf ${_s.camelize(app)}.${_s.camelize(module)}:Directives.${_s.camelize(name)}
         * @param  {Number, String} number Just the number that has been input.
         * @return {Number}        The number.
         */
        function fromField(number) {
            return Number(number);
        }

        /**
         * @ngdoc method
         * @name toField
         * @methodOf ${_s.camelize(app)}.${_s.camelize(module)}:Directives.${_s.camelize(name)}
         * @param  {Number, String} number Just the number that has been input.
         * @return {Number}        The number or 0.
         */
        function toField(text) {
            return Number(text || 0);
        }
        ngModel.$parsers.push(fromField);
        ngModel.$formatters.push(toField);
      }
    };  
  };
});