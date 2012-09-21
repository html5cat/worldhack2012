Meteor.subscribe("photos");

Meteor.subscribe("meta");

Template.worldhack.photos = function () {
    return Photos.find({}, {sort: {brand: -1} });
};

Template.worldhack.meta = function () {
    return Meta.find();
};

// Template.item.rendered = function () {

//   console.log('Meta item rendered');
// };

// Meteor.startup( function() {

// });

