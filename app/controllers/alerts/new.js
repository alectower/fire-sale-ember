import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'alerts',
  actions: {
    addAlert: function() {
      var newAlert = this.store.createRecord('alert', {
        email: 'alectower@gmail.com',
        symbol: this.get('symbol'),
        price: this.get('price')
      });

      var self = this;
      newAlert.save().then(function() {
        self.get('controllers.alerts').get('model').pushObject(newAlert);
        self.transitionToRoute('alerts');
      });
    }
  }
});
