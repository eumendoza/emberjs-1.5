'use strict';

var App = Ember.Application.create();

App.Router.map(function() {
	this.route('blog');
	this.route('article', {
		path: 'articles/:id'
	});
});

App.Article = DS.Model.extend({
	title: DS.attr(),
	body: DS.attr(),
	comments: DS.hasMany('comment', {
		async: true
	})
});

App.Article.FIXTURES = [{
	id: 1,
	title: 'Holaaa caracola',
	body: 'Estoy es el body',
	comments: [2]
}, {
	id: 2,
	title: 'Holaaa caracola 2',
	body: 'Estoy es el body',
	comments: [1]
}, {
	id: 3,
	title: 'Holaaa caracola 3',
	body: 'Estoy es el body',
	comments: [3, 4]
}];


App.Comment = DS.Model.extend({
	text: DS.attr(),
	article: DS.belongsTo('article')
});

App.Comment.FIXTURES = [{
	id: 1,
	text: 'Ohhhh maravilloso',
	article: 2
}, {
	id: 2,
	text: 'Que bueno!!',
	article: 1
}, {
	id: 3,
	text: 'perfecto!!',
	article: 3
}, {
	id: 4,
	text: 'chachi piruli',
	article: 3
}];

App.ArticleAdapter = DS.FixtureAdapter.extend({});
App.CommentAdapter = DS.FixtureAdapter.extend({});

App.BlogRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('article');
	}
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return ['rojo', 'amarillo', 'azul'];
	}
});

App.IndexController = Ember.ArrayController.extend({
	firstName: 'Eugenio',
	lastName: 'Mendoza',
	fullName: '',
	adjustFullName: function() {
		this.set('fullName', this.get('firstName') + ' ' + this.get('lastName'));
	}.observes('firstName', 'lastName')
});

App.ArticleRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('article', params.id);
	}
});