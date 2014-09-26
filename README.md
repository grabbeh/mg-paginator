mg-paginator
============

A directive to make paginating content in your Angular.js application easier (hopefully).

**Sample use**

Include the code in mg-paginator.js in your own application and then on the page where you wish to paginate content include the following:

    <div mg-paginator array-of-items="arrayOfItems" items-per-page="10">
        // transcluded content
        <div ng-repeat="item in arrayOfItems">{{ item }}</div>
    </div>
    
This directive can be used by passing in an array of items from a controller and the number of items to be displayed per page as an option (hard-coded or otherwise). The array of items will then be split into a group of arrays each with the given length.

A $watch is set up in the directive so the processing of the array will only take place once the data is available (so if you're making a $http call to get data it will take this into account).

The directive uses transclusion so you can insert your html for viewing data as a child of the directive. The directive makes use of the transclusion function internally to apply the directive's scope, rather than the parent controller's scope to the transcluded content.

**Helper functions**

Helper functions are provided as part of the directive which you can use in your template (most are self-explanatory):

    $scope.prevPage()

    $scope.nextPage()
    
    $scope.firstPage()

    $scope.lastPage()
    

    $scope.checkIfFirst()
    
This function can be used to hide a 'Previous' button where you are on the first page of data.

    $scope.checkIfLast()

Likewise this function can be used to hide a 'Next' button where you are on the last page of data. 

The helper functions change the page number which in turn changes the 'items' array made available to the transcluded content.

**Licence**

MIT-based but no requirement for attribution.
