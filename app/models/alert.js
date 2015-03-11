import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  symbol: DS.attr('string'),
  price: DS.attr('string'),
  url: 'https://www.google.com/finance?q=',
  symbolLink: function(){
    return this.get('url') + this.get('symbol');
  }.property('symbol')
});
