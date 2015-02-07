var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	port = 9001,
	cors = require('cors');

var me = {
	name: 'Jason Alma Turner',
	location: 'Provo, Utah',
	hobbies: ['slalom water skiing', 'cross-country skiing', 'music', 'cooking'],
	occupations: ['banker (operations support clerk)', 'agricultural laborer', 'administrative assistant', 'horticultural applicator',],
	mentions: ['http://www.facebook.com/jasonalmaturner', 'https://twitter.com/jasonalmaturner', 'https://github.com/jasonalmaturner'],
	references: ['Valrie Scott', 'Barbara Taylor', 'Dana Diedrich'],
	skillz: [
		{
			id: 1,
			name: 'Javascript',
			experience: 'Intermediate'
		},
		{
			id: 2,
			name: 'Minitab',
			experience: 'Over 9000'
		}
	] 
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/name', function(req, res) {
	res.send(me.name);
})

app.get('/location', function(req, res) {
	res.send(me.location);
})

app.put('/location', function(req, res) {
	// console.log(req.body.location)
	me.location = req.body.location;
	res.send(me.location);
});

app.get('/hobbies', function(req, res) {
	if(req.query.order === 'desc') {
		res.send(me.hobbies.sort())
	} else if (req.query.order === 'asc') {
		res.send(me.hobbies.sort().reverse())
	} else {
		res.send(me.hobbies);		
	}
})

app.get('/occupations', function(req, res) {
	if(req.query.order === 'desc') {
		res.send(me.occupations.sort())
	} else if (req.query.order === 'asc') {
		res.send(me.occupations.sort().reverse())
	} else {
		res.send(me.occupations);		
	}
})

app.get('occupations/latest', function(req, res) {
	res.send(me.occupations[occupations.length - 1])
})

app.get('/mentions', function(req, res) {
	res.send()
})

// app.get('/skillz', function(req, res) {
// 	if(req.query.experience === 'Intermediate') {
// 		var responseArray = [];
// 		for(var i = 0; i < me.skillz.length; i++) {
// 			if(me.skillz)
// 		}
// 		res.send()
// 	}
// })

app.listen(port);
console.log('listening at ' + port)