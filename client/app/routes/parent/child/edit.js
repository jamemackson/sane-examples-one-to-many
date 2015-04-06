import Ember from 'ember';

export default Ember.Route.extend({
  finishedEditing: function() {
    this.transitionTo('parent.children');
  },
  actions: {
    update: function(model) {
      var _this = this;
      return model.save().then(function() {
        _this.finishedEditing();
      }, function(reason) {
        console.log('error saving child: ' + reason);
        _this.finishedEditing();
      });
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
