'use strict';

var App = Ember.Application.create();

App.Router.map(function() {
	this.route('about', {
		path: '/about'
	});
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return ['Rojo', 'Amarillo', 'Verde'];
	},
	setupController: function(controller, model) {
		controller.set('model', model);
	}
});

App.IndexController = Ember.ArrayController.extend({
	needs: 'about',
	actions: {
		callAboutController: function() {
			this.get('controllers.about').send('popup');
		},
		popup: function() {
			alert('From Home Page!!!');
		}
	}
});

App.AboutController = Ember.ObjectController.extend({
	needs: 'index',
	actions: {
		callIndexController: function() {
			this.get('controllers.index').send('popup');
		},
		popup: function() {
			alert('From Abount Page!!!');
		}
	}
});