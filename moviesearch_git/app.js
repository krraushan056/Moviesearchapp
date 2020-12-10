var express=require("express");
var app=express();
var request=require("request");

app.use(express.static("public"));
app.set("view engine","ejs");


app.get("/",function(req,res){
		res.render("search")
		})
app.get("/results",function(req,res){
	var query=req.query.search;
	var url="http://www.omdbapi.com/?s="+query+"&apikey=thewdb";
	request(url,function(error,response,body){
	//eval(require('locus'))
		if( !error && response.statusCode == 200){
			var data = JSON.parse(body);
		
			res.render("results", { data:data });
}else{
	console.log("something went wrong");
}
		});

})






app.listen(3000,process.env.IP,function(){
	console.log("server stared");
})