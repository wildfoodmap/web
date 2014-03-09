var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });

  this.resource('sightings', function () {
      this.route('index', { path: '/'});
      this.route('new');
  });
  this.resource('sighting', { path: 'sightings/:sighting_id'});
});

export default Router;
