mg-paginator
============

**Sample use**

    <div mg-Paginator array-of-items="array" items-per-page="10">
    </div>
    
This directive can be used by passing in an array of items and the number of items to be displayed per page as options. The array of items will then be split into a group of arrays each with the given length.

A watch is set up in the directive so the processing of the array will only take place once the data is available (so if you're making a $http call to get data it will take this into account).

You will need to provide a template to display each page of data using ng-repeat most likely (with each page of data exposed as 'items' for the purposes of display in the template). 

**Helper functions**

Helper functions are provided as part of the directive which you can use in your template (most are self-explanatory):

- $scope.prevPage()

- $scope.nextPage()
    
- $scope.firstPage()

- $scope.lastPage()

- $scope.checkIfFirst()
    
This function can be used to hide a 'Previous' button where you are on the first page of data.

- $scope.checkIfLast()

Likewise this function can be used to hide a 'Next' button where you are on the last page of data. 

**Sample template**

Example template for display of data:

    <div>
        <ul>
            <li ng-repeat="items in items">
                <div> {{ item }} </div>
            </li>
        </ul>

        <div>
            <div ng-hide="checkIfFirst(pageNumber)" ng-click="prevPage(pageNumber)">Prev</div>
            <div ng-hide="checkIfFirst(pageNumber)" ng-click="firstPage()">1</div>
            <div> {{ pageNumber }} </div>
            <div ng-hide="checkIfLast(pageNumber)" ng-click="lastPage()"> {{ groupOfArrays.length }} </div>
            <div ng-hide="checkIfLast(pageNumber)" ng-click="nextPage(pageNumber)">Next</div>
        </div>
    </div>

**Licence**

MIT
