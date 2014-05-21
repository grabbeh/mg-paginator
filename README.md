mg-paginator
============

    <div mg-Paginator array-of-items="array" items-per-page="10">
    </div>
    
Directive can be used by passing in an array of items and the items to be displayed per page as options. The array of items will then be split into a group of arrays each with the given length.

At that point, you can provide a template to display the first page of data. Helper functions are provided as part of the directive which you can use in your template:

    $scope.prevPage()
    
    $scope.nextPage()
    
    $scope.firstPage()
               
    $scope.lastPage() 
    
    $scope.checkIfFirst()
    
    $scope.checkIfLast()
               
