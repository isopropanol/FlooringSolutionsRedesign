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
app.get('/gallery',function(req,res){
	res.render('gallery',
		{title:"Gallery"}		)
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
app.get('/team',function(req,res){
	res.render('team',
		{title:"Team"}		)
})
app.get('/ourFacilities',function(req,res){
	res.render('ourFacilities',
		{title:"Our Facilities"}		)
})
app.get('/environment',function(req,res){
	res.render('environment',
		{title:"Environment"}		)
})
app.get('/arts',function(req,res){
	res.render('projects/arts',
		{title:"Arts and Entertainment"}		)
})
app.get('/commercial',function(req,res){
	res.render('projects/commercial',
		{title:"Commercial"}		)
})
app.get('/condominiums',function(req,res){
	res.render('projects/condominiums',
		{title:"Condominiums and Hospitality"}		)
})
app.get('/education',function(req,res){
	res.render('projects/education',
		{title:"Education"}		)
})
app.get('/floorleveling',function(req,res){
	res.render('projects/floorleveling',
		{title:"Floor Leveling"}		)
})
app.get('/government',function(req,res){
	res.render('projects/government',
		{title:"Government"}		)
})
app.get('/health',function(req,res){
	res.render('projects/health',
		{title:"Health"}		)
})
app.get('/lawfirms',function(req,res){
	res.render('projects/lawfirms',
		{title:"Law Firms"}		)
})


var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
