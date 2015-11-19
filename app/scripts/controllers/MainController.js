/**
 * Created by ethoto on 19/11/2015.
 */

app.controller('MainController', ['$scope', 'forecast', function($scope, forecast){
	$scope.tittle = 'Remind it!';

	forecast.success(function(data) {
		$scope.notebody = data;
	});
}]);
