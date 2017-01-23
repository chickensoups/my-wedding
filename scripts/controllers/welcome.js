angular.module('wedding-app')
	.controller('WelcomeController', function() {
		var self = this;

		// Slider stuff
		this.active = 0;
		this.myInterval = 3000;
		this.noWrapSlides = false;
		this.noPause = true;

		this.slides = [
			{
				id: 0,
				image: 'images/anhcuoi/anhcuoi1.JPG',
				text: 'Love is most beautiful thing in the world'
			},
			{
				id: 1,
				image: 'images/anhcuoi/anhcuoi3.JPG',
				text: 'Our love will be forever'
			},
			{
				id: 2,
				image: 'images/anhcuoi/anhcuoi4.JPG',
				text: 'Let make our choice become the best'
			},
			{
				id: 3,
				image: 'images/anhcuoi/anhcuoi6.JPG',
				text: 'Together we can make a better life day by day'
			},
			{
				id: 4,
				image: 'images/anhcuoi/anhcuoi8.JPG',
				text: 'Of course, I love you more than anything'
			}
		];

		// Count down stuff
		this.finished = function() {
			console.log('Got married')
		}

		var marriedTime = new Date('2017-02-11');

		this.coundownTime = Date.now() - marriedTime.getTime();

		$('#counter').countdownCube({
	        target: new Date('February 11, 2017 11:30:00'),
	        cubeSize: 150,
	        background: 'rgba( 255, 150, 150, 0.8 )',
	        color: 'white',
	    });
	});