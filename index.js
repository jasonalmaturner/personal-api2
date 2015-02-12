var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	port = 9001,
	cors = require('cors');

var me = {
	name: 'Jason Alma Turner',
	location: 'Provo, Utah',
	hobbies: ['slalom water skiing', 'cross-country skiing', 'music', 'cooking'],
	occupations: ['banker (operations support clerk)', 'agricultural laborer', 'administrative assistant', 'horticultural applicator'],
	mentions: ['http://www.facebook.com/jasonalmaturner', 'https://twitter.com/jasonalmaturner', 'https://github.com/jasonalmaturner'],
	references: ['Jess Haddow', 'James Taylor', 'Enricho Fermi'],
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
		},
		{
			id: 3,
			name: 'Punching Kittens',
			experience: 'Over 9000'
		},
		{
			id: 4,
			name: 'Eating pie',
			experience: 'Totes experienced'
		}
	] 
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
// app.use(function(req, res, next){
// 	res.setHeader('Access')
// })

app.get('/api/name', function(req, res) {
	res.send(me.name);
})

app.get('/api/location', function(req, res) {
	res.send(me.location);
})

app.put('/api/location', function(req, res) {
	console.log(req.body)
	me.location = req.body.location;
	res.send(me.location);
});

app.get('/api/hobbies', function(req, res) {
	if(req.query.order === 'desc') {
		res.json(me.hobbies.sort())
	} else if (req.query.order === 'asc') {
		res.json(me.hobbies.sort().reverse())
	} else {
		res.json(me.hobbies);		
	}
})

app.get('/api/occupations', function(req, res) {
	if(req.query.order === 'asc') {
		res.json(me.occupations.sort())
	} else if (req.query.order === 'desc') {
		res.json(me.occupations.sort().reverse())
	} else {
		res.json(me.occupations);		
	}
})

app.get('/api/occupations/latest', function(req, res) {
	res.send(me.occupations[occupations.length - 1])
})

app.get('/api/mentions', function(req, res) {
	res.json(me.mentions);
})

app.post('/api/mentions', function(req, res) {
	me.mentions.push(req.body);
	res.send();
})

app.get('/api/references', function(req, res) {
	res.json(me.references);
})

app.post('/api/references', function(req, res) {
	me.references.push(req.body);
	res.send();
})

app.get('/api/skillz', function(req, res) {
	var responseArray = [];
	if(req.query.experience) {
		for(var i = 0; i < me.skillz.length; i++) {
			if(req.query.experience === me.skillz[i].experience) {
				responseArray.push(me.skillz[i])
			}
		}
	res.json(responseArray);
	} else {
		res.json(me.skillz);
	}
})

app.post('/api/skillz', function(req, res) {
	console.log(req);
	me.skillz.push(req.body);
	res.send();
})

app.listen(port);
console.log('listening at ' + port)