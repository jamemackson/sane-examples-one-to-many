import Ember from 'ember';

export default Ember.Route.extend({
  parent: null,
  beforeModel: function() {
    this.set('parent', this.modelFor('parent'));
  },
  model: function(params) {
    var parent = this.parent;
    var children = this.store.find('child', { parent: parent.id });
    return children;
  },
  newChildIsValid: function() {
    //overly simplified validation mechanism.
    return ($('#new-client-name').val() != '' && $('#new-client-age').val() != '');
  },
  actions: {
    createChild: function() {
      //check if form data is valid
      if (this.newChildIsValid()) {
        var self = this;
        //create the child record itself
        var child = this.store.createRecord('child', {
          name : $('#new-client-name').val(),
          age : $('#new-client-age').val()
        });
        //set the parent so it is associated to the current parent
        child.set('parent', this.get('parent'));
        //save the child record to the backend
        return child.save().then(
          function(child) {           // success callback
            //clear the input fields
            $('#new-client-name').val('');
            $('#new-client-age').val('');
            //refresh the current route so the new child record is displayed
            self.refresh();
          },
          function(reason) {          // failure callback
            console.log('error creating child: ' + reason);
            alert('error creating child: ' + reason);
            //refresh the current route, just in case... :)
            self.refresh();
          }
        );
      } else {
        //alert the user that they need to fill in the form.
        alert('please enter the child\'s name and age');
      }
    }
  }
});
