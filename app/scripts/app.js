'use strict';

var App = Ember.Application.create();

App.Router.map(function() {
	this.resource('articles', { path: 'articles' }, function() {
		this.route('new', { path: '/new' });
		this.route('edit', { path: '/edit/:id' });
	});
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return ['Rojo', 'Amarillo', 'Verde'];
	}
});