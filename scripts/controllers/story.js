angular.module('wedding-app')
    .controller('StoryController', function() {
        var self = this;

        this.events = [{
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-check',
            title: '30/05/2014',
            content: 'Lần đầu tiên gặp em.',
            img: ''
        }, {
            badgeClass: 'warning',
            badgeIconClass: 'glyphicon-credit-card',
            title: 'Second heading',
            content: 'More awesome content.',
            img: ''
        }];
    });
