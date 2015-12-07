'use strict';

var App = Ember.Application.create();

App.Router.map(function() {

});

App.IndexRoute = Ember.Route.extend({

});

App.IndexController = Ember.ArrayController.extend({
	firstName: '',
	actions:{
		handleSubmit: function(){
			console.log(this.get('firstName'));
		}
	}
});