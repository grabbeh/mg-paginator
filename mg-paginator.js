
  
  .directive('mgPaginator', function() {
      return {
            templateUrl: "sample-partial.html",
            link: function(scope, elements, attrs){
                 scope.$watch(attrs.groupedArrayOfItems, function(newVal){
                      if (newVal === undefined){
                          return;
                      }
                      for (var i=0; i < newVal.length; i+= scope.itemsPerPage) {
                           var slice = newVal.slice(i, i+ scope.itemsPerPage);
                           scope.groupOfArrays.push(slice);
                      }
                      scope.pageNumber = 1;
                 })

                  scope.$watch('pageNumber', function(newPage){
                      scope.items = scope.groupOfArrays[newPage -1];
                  })
    
            },
            scope: {
                groupedArrayOfItems: "=",
                itemsPerPage: "="
            },
            controller: function($scope) {
                $scope.groupOfArrays = [];
                $scope.prevPage = function(pageNumber){
                    $scope.pageNumber--;
                };
                $scope.nextPage = function(pageNumber){
                    $scope.pageNumber++;
                };
                $scope.firstPage = function(){
                    $scope.pageNumber = 1;
                };
                $scope.lastPage = function(){
                    $scope.pageNumber = $scope.groupOfArrays.length;
                };
                $scope.checkIfFirst = function(pageNumber){
                    if (pageNumber === 1){
                      return true;
                    }
                };
                $scope.checkIfLast = function(pageNumber){
                   if (pageNumber === $scope.groupOfArrays.length){
                      return true;
                   }
                };
          }
      })
