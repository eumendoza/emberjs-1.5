var App = Ember.Application.create();

App.Router.map(function() {
	this.route('first-route', {
		path: 'first-route'
	});
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return ['red', 'yellow', 'green'];
	}
});

App.FirstRouteRoute = Ember.Route.extend({
	model: function(){
		return {
			firstThing: 'olalalalala',
			secondThing: 'yeyeyeyyeye'
		}
	}
});

App.FirstRouteController = Ember.Controller.extend({
	actions:{
		paraClicked: function(){
			console.log('eyyyy no me toques');
		}
	}
});