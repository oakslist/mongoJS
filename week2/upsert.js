var MongoClient = require('mongodb').MongoClient; 

MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
	if(err) throw err;
	
	var query = { 'student': 'Frank', 'assignment': 'hw1' };
	//var operator = { 'student': 'Frank', 'assignment': 'hw1', 'grade': 100 };
	//?? Node.js Driver:Upserts
	var operator = { '$set': { 'date_returned': new Date(), 'grade': 100 } };
	var options = { 'upset': true };
	
	db.collection('grades').update(query, operator, options, function(err, upserted) {
		if(err) throw err;
		console.dir('Successfully upserted ' + upserted + ' document!');
		return db.close();
	});
});