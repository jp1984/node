var http = require('http');
var pg = require('pg');
var rs;
http.createServer(function(request,response){

pg.connect(process.env.HEROKU_POSTGRESQL_JADE_URL, function(err, client, done) {
  client.query('SELECT * FROM users', function(err, result) {
    done();
    if(err) return console.error(err);
	rs=result.rows;    
	console.log(result.rows);

    response.writeHead(200,{"Content-Type": "application/json"});
    response.end(JSON.stringify(_.flatten(_.compact(rs))));
  });
});



}).listen(process.env.PORT || 8080);

console.log('running');
