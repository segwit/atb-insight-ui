'use strict';

var ZeroClipboard = window.ZeroClipboard;

angular.module('insight')
  .directive('scroll', function ($window) {
    return function(scope, element, attrs) {
      angular.element($window).bind('scroll', function() {
        if (this.pageYOffset >= 200) {
          scope.secondaryNavbar = true;
        } else {
          scope.secondaryNavbar = false;
        }
        scope.$apply();
      });
    };
  })
  .directive('whenScrolled', function($window) {
    return {
      restric: 'A',
      link: function(scope, elm, attr) {
        var pageHeight, clientHeight, scrollPos;
        $window = angular.element($window);

        var handler = function() {
          pageHeight = window.document.documentElement.scrollHeight;
          clientHeight = window.document.documentElement.clientHeight;
          scrollPos = window.pageYOffset;

          if (pageHeight - (scrollPos + clientHeight) === 0) {
            scope.$apply(attr.whenScrolled);
          }
        };

        $window.on('scroll', handler);

        scope.$on('$destroy', function() {
          return $window.off('scroll', handler);
        });
      }
    };
  })
    .directive('ngclipboard', [ '$timeout', '$window', 'gettextCatalog', function($timeout, $window, gettextCatalog) {
        return {
            restrict: 'A',
            scope: {
                ngclipboardSuccess: '&',
                ngclipboardError: '&'
            },
            transclude: true,
            link: function(scope, element) {
                var clipboard = new $window.Clipboard(element[0]),
                    translate = gettextCatalog.getString('Copied'),
                    copiedElement = angular.element('<div class="tooltip fade right in"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + translate + '</div></div>');

                element.append(copiedElement);

                clipboard.on('success', function(e) {
                    scope.$apply(function () {

                        element.addClass('clipboard-is-active');

                        $timeout(function() {
                            element.removeClass('clipboard-is-active');
                        }, 2000);

                        scope.ngclipboardSuccess({
                            e: e
                        });

                    });
                });

                clipboard.on('error', function(e) {
                    scope.$apply(function () {
                        scope.ngclipboardError({
                            e: e
                        });
                    });
                });
            }
        };
    }])
  .directive('focus', function ($timeout) {
    return {
      scope: {
        trigger: '@focus'
      },
      link: function (scope, element) {
        scope.$watch('trigger', function (value) {
          if (value === "true") {
            $timeout(function () {
              element[0].focus();
            });
          }
        });
      }
    };
  });