const fs = require('fs');
var dir = __dirname+"\\Node_folder";
content = "This is Node.js a powerful backend javascript used very widely in industry for developing web applications.";
if(!fs.existsSync(dir)){
  fs.mkdir(dir, (err)=>{
  	if(err)
  		console.log(err);
  	else{
  		fs.writeFile(dir+"/sample.txt", content, (err)=>{
  			if(err)
  				console.log(err);
  			else
  				console.log("File write completed")
  		});
  	}
  });
}
else{
	fs.writeFile(dir+"/sample.txt", content, (err)=>{
		if(err)
			console.log(err);
		else
			console.log("File write completed")
  	});
}

console.log(dir+"\\sample.txt");