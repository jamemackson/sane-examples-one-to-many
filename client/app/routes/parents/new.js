import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('parent');
  },
  actions: {
    update: function(model) {
      model.save();
      this.transitionTo('parents');
    }
  }
});
