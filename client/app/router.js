import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('parents', function() {
    this.resource('child', { path: ':child_id'}, function() {});
    this.route('new');
  });

  this.route('parent', { path: '/parent/:parent_id'}, function() {
    this.route('children', function() {
      this.route('new');
    });
    this.route('child', { path: ':child_id'}, function() {});
  });
});
