angular
	.module('myWatchList.browse')
	.config(browseConfig);

function browseConfig($stateProvider) {
	$stateProvider.state('app.browse', {
		name: 'browse',
		url: '/browse',
		views: {
        'menuContent': {
          templateUrl: 'js/features/browse/browse.html',
          controller: 'BrowseCtrl',
		controllerAs: 'BrowseVM'
        }
       }
	})
}