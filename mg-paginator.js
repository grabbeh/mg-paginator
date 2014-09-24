angular.module('app')
.directive('mgPaginator', function($compile) {
    return {
        templateUrl: "/views/paginator/paginator.html",
        replace: true,
        transclude: true,
        link: function(scope, element, attrs, ctrl, transclude) {
            var $ = scope;
            $.$watch('paginatedMarks', function(newVal) {
                if (!newVal) {
                    return;
                }
                $.groupOfArrays = [];

                for (var i = 0; i < newVal.length; i += $.itemsPerPage) {
                    var slice = newVal.slice(i, i + $.itemsPerPage);
                    $.groupOfArrays.push(slice);
                }
                $.items = $.groupOfArrays[0];
                $.pageNumber = 1;
            })

            $.$watch('pageNumber', function(newPage) {
                $.items = $.groupOfArrays[newPage - 1];
            });
            // transclude function gives directive scope to transcluded content, rather
            // than default position of transcluded content using controller scope 
            transclude($, function(clone, $){
                element.prepend(clone);
                //childElement = angular.element('<div></div>')
                //childElement.append(clone);
                //childElement.append($compile(clone)($));
            });
        },
        scope: {
            paginatedMarks: '=',
            itemsPerPage: '=',
            showModal: '&'
        },
        controller: function($scope) {
            var $ = $scope;
            $.groupOfArrays = [];
            $.prevPage = function() {
                $.pageNumber--;
            };
            $.nextPage = function() {
                $.pageNumber++;
            };
            $.firstPage = function() {
                $.pageNumber = 1;
            };
            $.lastPage = function() {
                $.pageNumber = $scope.groupOfArrays.length;
            };
            $.checkIfFirst = function(pageNumber) {
                if (pageNumber === 1) {
                    return true;
                }
            };
            $.checkIfLast = function(pageNumber) {
                if (pageNumber === $scope.groupOfArrays.length) {
                    return true;
                }
            };
            $.outerShowModal = function(tm) {
                var func = $scope.showModal();
                func(tm);
            }
        }
    }
})
