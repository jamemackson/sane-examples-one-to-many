import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('parent', params.parent_id);
  }
});
