import Ember from 'ember';

export default Ember.Route.extend({
  parent: null,
  beforeModel: function() {
    this.set('parent', this.modelFor('parent'));
  },
  model: function(params) {
    //{{debugger}}
    var parent = this.parent;
    var children = this.store.find('child', { parent: parent.id });
    return children;
  }
});
