import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addAlert: function() {
      console.log(this);
    }
  }
});
