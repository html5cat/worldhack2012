var pxConsumerKey = '&consumer_key=is24Rs626KQssmLQhZ7uURpbB3MwxbaTwT1Bpbpu';
var popularUrl = 'https://api.500px.com/v1/photos?feature=popular' + pxConsumerKey;


Meteor.http.get(popularUrl, function(err, response) {
    // check the returnValue of the api
    if (err) {
        console.log('API Request Failed!');
        return;
    }

    var data = JSON.parse(response.content);

    console.log('Photo data', data);
});
