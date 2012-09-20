Meteor.startup(function() {
    // Limit database write to server side only
    var collections = ['photos'];

    _.each(collections, function(collection) {
        _.each(['insert', 'update', 'remove'], function(method) {
            Meteor.default_server.method_handlers['/' + collection + '/' + method] = function() {};
        });
    });

    updatePhotos();

    Meteor.publish("photos", function() {
        return Photos.find();
    });


});

var size = '&image_size=2&rpp=100';
var pxConsumerKey = '&consumer_key=is24Rs626KQssmLQhZ7uURpbB3MwxbaTwT1Bpbpu';


function getPhotosUrl(feature) {
  var feature = 'popular';
  var url = 'https://api.500px.com/v1/photos?feature=' + feature + size + pxConsumerKey;

  return url;
}

function getPhotoUrl(id) {
  var url = 'https://api.500px.com/v1/photos/' + id + '?' + size + pxConsumerKey;

  return url;
}

function updatePhotos() {
  var url = getPhotosUrl();

  console.log('updatePhotos:url', url);

  Meteor.http.get(url, function(err, response) {
      // check the returnValue of the api
      if (err) {
          console.log('Photos: API Request Failed!' + url);
          return;
      }

      var data = JSON.parse(response.content);

      // car2go API returns cars as elements of array placemarks
      var photos = data.photos;

      // Sync the cars for this location.
      Photos.remove({});

      for (var i = 0; i < photos.length; i++) {

        var photoUrl = getPhotoUrl(photos[i].id);

        Meteor.http.get(photoUrl, function(err, response) {
          // check the returnValue of the api
          if (err) {
              console.log('Single photo: API Request Failed!' + photoUrl);
              return;
          }

          var photo = JSON.parse(response.content).photo;

          // var photo = photos[i];

          Photos.insert(photo);
        });
      }

      console.log('updatePhotos');
  });
}
