appModule.controller('SubClusterCtrl', ['$scope', '$rootScope',
	function($scope, $rootScope) {

		$scope.init = function() {
			$scope.page = "page";
			$scope.name = $rootScope.cluster.name;
		}

		$scope.init();
	}

]);