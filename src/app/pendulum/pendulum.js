'use strict';

angular.module('boom')
  .controller('PendulumController', function ($scope) {
		$('<img/>').attr('src', 'assets/images/bg.jpg').load(function() {
		 $(this).remove(); // prevent memory leaks as @benweet suggested
		 $('body').css('background-image', 'url(assets/images/bg.jpg)');
		});
  });

