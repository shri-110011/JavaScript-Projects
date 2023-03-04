const fs = require('fs');
fs.readFile(__dirname+'/Node-read-handson/To_Read.txt', function(err, data){
  if(err)
    console.log(err);
  else
    console.log(""+data);
});

//Test case code
// if (( $(grep -o -e "fs.readFile" App.js | wc -l) >= 1 )) && (( $(node App.js | grep -o -e "Node.js" -e "industry" App.js | wc -l) >= 1 )) ;then echo "SCORE:100%";else echo "SCORE:0%";fi





