import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addAlert: function() {
      var newAlert = this.store.createRecord('alert', {
        email: 'alectower@gmail.com',
        symbol: this.get('symbol'),
        price: this.get('price')
      });

      var self = this;
      newAlert.save().then(function() {
        self.get('model').pushObject(newAlert);
        self.set('symbol', '');
        self.set('price', '');
      });
    },

    deleteAlert: function(alertToDelete) {
      alertToDelete.destroyRecord();
      this.get('model').removeObject(alertToDelete);
    }
  }
});
