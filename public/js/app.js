var app = angular.module('cms', ['ngAnimate']);

app.controller("PostController", ['$window', function($window) {
    var ctrl = this;

    ctrl.posts = [
        {title: 'Title 1',
         thumb: 'https://img.solarmovie.sc/2016/05/28/cover/ec68847b234cdf9f28757f3e17cf8c83-the-last-man-on-the-moon-1464460083.jpg'},
        {title: 'Title 2', thumb: 'https://img.solarmovie.sc/2016/05/28/cover/ec68847b234cdf9f28757f3e17cf8c83-the-last-man-on-the-moon-1464460083.jpg'},
        {title: 'Title 3', thumb: 'https://img.solarmovie.sc/2016/05/28/cover/ec68847b234cdf9f28757f3e17cf8c83-the-last-man-on-the-moon-1464460083.jpg'},
        {title: 'Title 4', thumb: 'https://img.solarmovie.sc/2016/05/28/cover/ec68847b234cdf9f28757f3e17cf8c83-the-last-man-on-the-moon-1464460083.jpg'},
        {title: 'Title 5', thumb: 'https://img.solarmovie.sc/2016/05/28/cover/ec68847b234cdf9f28757f3e17cf8c83-the-last-man-on-the-moon-1464460083.jpg'},
        {title: 'Title 6', thumb: 'https://img.solarmovie.sc/2016/05/28/cover/ec68847b234cdf9f28757f3e17cf8c83-the-last-man-on-the-moon-1464460083.jpg'},
        {title: 'Title 7', thumb: 'https://img.solarmovie.sc/2016/05/28/cover/ec68847b234cdf9f28757f3e17cf8c83-the-last-man-on-the-moon-1464460083.jpg'},
    ]
}])
