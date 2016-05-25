/* Angular */
app = angular.module('app', [
	// 'restangular',
	'ngAnimate',
	'ui.router',
	'templates',
	'ngAria',
	'ngMaterial',
	'ngMessages'
	// 'Devise',
  	// 'angularMoment',
  	// 'md.data.table'
])

// BUG! Cannot click back button to get previous page By Fenhan May 15

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: "/home",
		templateUrl: 'index.html'
  	})
  	.state('post_gossip', {
  		url: "/post_gossip",
  		templateUrl: 'post_gossip.html',
  		controller: 'GossipCtrl'
  	});
  	$urlRouterProvider.otherwise('home');  
});

// modify the customise bwTheme
app.config(function($mdThemingProvider) {
	// Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();	
});