'use strict';

var App = Ember.Application.create();

App.Router.map(function() {

});

App.IndexRoute = Ember.Route.extend({
	model: function(){
		return ['Rojo', 'Amarillo', 'Verde'];
	},
	setupController: function(controller, model){
		controller.set('model', model);
	}
});