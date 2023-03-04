
// const fs = require('fs');
// const http = require('http');
// const express = require('express');
// const request = require('request');
// const cheerio = require('cheerio');

// var app = express();

// app.get("/", function(req, res){
// 	request('https://en.wikipedia.org/wiki/Node.js', function(error, response, html){
// 		if(!error && response.statusCode == 200){
// 			//console.log(html);
// 			fs.writeFile("input1.html", html, (err)=>{
// 			if(err)
// 				console.log(err);
// 			else{
// 					console.log("Write Completed!");
// 				}
// 			});
// 		}
// 	});
// 	res.send("Write Completed");
// });

// var server = app.listen(3001, function(){
// 	var host = server.address().address;
// 	var port = server.address().port;
// 	console.log("Server running at http://%s:%s", host, port);
// });
//-----------------------------------------------------------------------
const fs = require('fs');
const https = require('https');

const options = {
  hostname: 'en.wikipedia.org',
  port: 443,
  path: '/wiki/Nodejs',
  method: 'GET'
}
var data = "";

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (chunk) => {
    //process.stdout.write(d);
    console.log(chunk.length);
    data += chunk; 
  });
  res.on('end', ()=>{
  		fs.writeFile("input1.html", data, (err)=>{
  			if(err)
				console.log(err);
			else{
				console.log("Write Completed!");
			}
	  	});
	  console.log("typeof data: "+typeof data);
    });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();

//Contents of the  .test.sh file to test the code

// SCORE=0
// PASS=0
// fail=0
// TOTAL_TESTS=1


// TEST_1=$((( $(ls | grep -e "App" -e "Nodejs.html" |wc -l)>=2 )) && (( $(grep "443" App.js |wc -l)>=1 )) | wc -l);
// if [ $TEST_1 -eq 1 ]
// then PASS=$((PASS + 1))
// fi;


// echo $TEST_1;
// echo "Total testcases: 1"
// echo "Total testcase passed: $PASS"
// echo "Total testcase fail: $fail"
// SCORE=$(($PASS*100 / $TOTAL_TESTS))
