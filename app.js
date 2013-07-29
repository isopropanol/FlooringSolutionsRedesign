//Module dependencies

var express = require('express')
	, stylus = require('stylus')
	, nib = require('nib');
var app =express();
app.use(express.bodyParser());
function compile(str,path){
	return stylus(str)
		.set('filename',path)
		.use(nib());
}
app.set('views',__dirname+'/views');
app.set('view engine','jade');
app.use(stylus.middleware(
	{
	src: __dirname+'/public'
	, compile:compile
}));
app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
	res.render('index',
		{title:"Flooring Solutions Inc"}		)
})
app.get('/about',function(req,res){
	res.render('about',
		{title:"About"}		)
})
app.get('/portfolio',function(req,res){
	res.render('portfolio',
		{title:"Portfolio"}		)
})
app.get('/services',function(req,res){
	res.render('services',
		{title:"Services"}		)
})
app.get('/products',function(req,res){
	res.render('products',
		{title:"Products"}		)
})
app.get('/projects',function(req,res){
	res.render('projects',
		{title:"Projects"}		)
})
app.get('/contactus',function(req,res){
	res.render('contactus',
		{title:"Contact Us"}		)
})

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
