var app = angular.module('html5boston', []);

app.controller('mainController', [
  '$scope',
  function($scope) {
    $scope.posts = [
      { title: 'html5boston Group Meetup schedule page', link: 'http://www.meetup.com/html5boston/', upvotes: 234 },
    ];

   $scope.addPost = function() {
      var title = $scope.title
      var link = $scope.link

      if (title && title === '') {
        return;
      }

      $scope.posts.push({ title: title, link: link, upvotes: 0 });

      $scope.title = '';
      $scope.link = '';
    }

    $scope.upvote = function(post) {
      post.upvotes += 1;
    }
  }
]);