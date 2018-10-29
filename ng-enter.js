/**
 * Created by scheinin on 10/29/18.
 */
myApp.directive('appEnter', function () {
    return function (scope, element, attrs) {
        element.attr('tabindex', 0).css('outline', 'none').focus();

        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.appEnter);
                });

                event.preventDefault();
            }
        });
    };
});