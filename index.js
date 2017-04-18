var express = require('express');
var app = express();

app.set('port',(process.env.PORT || 5000));
app.get('/',function(request,response){
response.setHeader('Content-Type','text/html');
response.write("<center><h2>Hello Jayesh!!!</h2></center><br/>");
response.write("<h4>successfully deployed first node app....</h4>");
response.end();

});

app.listen(app.get('port'),function(){
    console.log("Server is running on port: "+app.get('port'));
});
