angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('SpeakerGalleryCtrl', function($scope) {
    
    $scope.$on('$ionicView.afterEnter', function(){
      console.log('$ionicView.afterEnter');
        var safe = cordova.plugins.disusered.safe,
        key = 'someKey';
        function success(encryptedFile) {
          console.log('Encrypted file: ' + encryptedFile);

          /*safe.decrypt(encryptedFile, key, function(decryptedFile) {
            console.log('Decrypted file: ' + decryptedFile);
          }, error);*/
        }

        function error(err) {
          console.log('Error with cryptographic operation: ' + err);
        }
        var p = 'file:/storage/emulated/0/Android/data/com.ionicframework.issuesidemenu297453/files/steuern-guide.pdf';

        safe.encrypt(p, key, success, error);        
    });
})
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
    $scope.$on('$ionicView.afterEnter', function(){
        document.addEventListener('deviceready', onDeviceReady, false);  
        function onDeviceReady() {
            var p = cordova.file.dataDirectory + 'steuern-guide.pdf';
       
            console.log('$ionicView.afterEnter');
            var safe = cordova.plugins.disusered.safe,
            key = 'someKey';
            function success(encryptedFile) {
              console.log('Encrypted file: ' + encryptedFile);

              /*safe.decrypt(encryptedFile, key, function(decryptedFile) {
                console.log('Decrypted file: ' + decryptedFile);
              }, error);*/
            }

            function error(err) {
              console.log('Error with cryptographic operation: ' + err);
            }
            //p = 'file:///storage/emulated/0/Android/data/com.ionicframework.issuesidemenu297453/files/steuern-guide.pdf';
             console.log('Path: ' + p);

            safe.decrypt(p, key, success, error);
        }
    });
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
