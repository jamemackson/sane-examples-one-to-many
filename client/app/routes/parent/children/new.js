import Ember from 'ember';

export default Ember.Route.extend({
  parent: null,
  beforeModel: function() {
    var parent = this.modelFor('parent');
    this.set('parent', parent);
  },
  model: function() {

    var child = this.store.createRecord('child');
    child.set('parent', this.get('parent'));

    var _this = this;
    return child.save().then(
      function(child) {           // success callback
        return child;
      },
      function(reason) {          // failure callback
        console.log('error creating child: ' + reason);
        return child;
      }
    );
  },
  actions: {
    update: function(model) {
      //model.set('parent', parent);
      model.save();
      this.transitionTo('parent.children');
    }
  }
});
