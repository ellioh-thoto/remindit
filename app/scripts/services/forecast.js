/**
 * Created by ethoto on 19/11/2015.
 */
app.factory('forecast', ['$http', function($http){
	return $http.get('http://localhost/notes/La vie en rose')
	//return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
		.success(function(data){return data;})
		.error(function(err){return err});
}]);