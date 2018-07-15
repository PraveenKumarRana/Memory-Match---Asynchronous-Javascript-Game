var express = require("express"),
    app     = express();
    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("show");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Memory Match is running in the Cloud9 server ...");
});