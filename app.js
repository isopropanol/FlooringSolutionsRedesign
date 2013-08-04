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
app.get('/index.htm',function(req,res){
	res.render('index',
		{title:"Flooring Solutions Inc"}		)
})
app.get('/home',function(req,res){
	res.render('index',
		{title:"Flooring Solutions Inc"}		)
})
app.get('/about.html',function(req,res){
	res.render('about',
		{title:"About"}		)
})
app.get('/gallery.html',function(req,res){
	res.render('gallery',
		{title:"Gallery"}		)
})
app.get('/services.html',function(req,res){
	res.render('services',
		{title:"Services"}		)
})
app.get('/products.html',function(req,res){
	res.render('products',
		{title:"Products"}		)
})
app.get('/projects.html',function(req,res){
	res.render('projects',
		{title:"Projects"}		)
})
app.get('/contactus.html',function(req,res){
	res.render('contactus',
		{title:"Contact Us"}		)
})
app.get('/team.html',function(req,res){
	res.render('team',
		{title:"Team"}		)
})
app.get('/ourFacilities.html',function(req,res){
	res.render('ourFacilities',
		{title:"Our Facilities"}		)
})
app.get('/environment.html',function(req,res){
	res.render('environment',
		{title:"Environment"}		)
})
app.get('/arts.html',function(req,res){
	res.render('projects/arts',
		{title:"Arts and Entertainment"}		)
})
app.get('/commercial.html',function(req,res){
	res.render('projects/commercial',
		{title:"Commercial"}		)
})
app.get('/condominiums.html',function(req,res){
	res.render('projects/condominiums',
		{title:"Condominiums and Hospitality"}		)
})
app.get('/education.html',function(req,res){
	res.render('projects/education',
		{title:"Education"}		)
})
app.get('/floorleveling.html',function(req,res){
	res.render('projects/floorleveling',
		{title:"Floor Leveling"}		)
})
app.get('/government.html',function(req,res){
	res.render('projects/government',
		{title:"Government"}		)
})
app.get('/health.html',function(req,res){
	res.render('projects/health',
		{title:"Health"}		)
})
app.get('/lawfirms.html',function(req,res){
	res.render('projects/lawfirms',
		{title:"Law Firms"}		)
})


var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
