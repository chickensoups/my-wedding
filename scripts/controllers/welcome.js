angular.module('wedding-app')
	.controller('WelcomeController', function() {
		var self = this;

		// Slider stuff
		this.active = 0;
		this.myInterval = 4000;
		this.noWrapSlides = false;
		this.noPause = true;

		this.slides = [
			{
				id: 0,
				image: 'images/anhcuoi/anhcuoi1.png',
				text: 'Love is most beautiful thing in the world'
			},
			{
				id: 1,
				image: 'images/anhcuoi/anhcuoi3.png',
				text: 'Our love will be forever'
			},
			{
				id: 2,
				image: 'images/anhcuoi/anhcuoi4.png',
				text: 'Let make our choice become the best'
			},
			{
				id: 3,
				image: 'images/anhcuoi/anhcuoi6.png',
				text: 'Together we can make a better life day by day'
			},
			{
				id: 4,
				image: 'images/anhcuoi/anhcuoi8.png',
				text: 'Of course, I love you more than anything'
			}
		];

		// Count down stuff
		this.finished = function() {
			console.log('Got married')
		}

		var marriedTime = new Date('2017-02-11');

		this.coundownTime = Date.now() - marriedTime.getTime();
	});