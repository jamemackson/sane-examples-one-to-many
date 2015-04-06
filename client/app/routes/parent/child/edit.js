import Ember from 'ember';

export default Ember.Route.extend({
  finishedEditing: function() {
    this.transitionTo('parent.children');
  },
  actions: {
    update: function(model) {
      model.save();
      this.transitionTo('parent.children');
    },
    delete: function(model) {
      var _this = this;
      return model.destroyRecord().then(function() {
        _this.finishedEditing();
      }, function(reason) {
        console.log('error deleting child: ' + reason);
        _this.finishedEditing();
      });
    }
  }
});
