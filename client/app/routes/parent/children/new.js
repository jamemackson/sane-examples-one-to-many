import Ember from 'ember';

export default Ember.Route.extend({
  parent: null,
  beforeModel: function() {
    var parent = this.modelFor('parent');
    this.set('parent', parent);
  },
  model: function() {

    var newChild= this.store.createRecord('child');
    newChild.set('parent', this.get('parent'));

    var _this = this;
    return newChild.save().then(function(child) {
      return child;
    }, function(reason) {
      console.log('error creating child: ' + reason);
      return newChild;
    });
  },
  actions: {
    update: function(model) {
      //model.set('parent', parent);
      model.save();
      this.transitionTo('parent.children');
    }
  }
});
