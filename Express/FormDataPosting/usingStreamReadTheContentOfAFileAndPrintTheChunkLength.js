const fs = require('fs');
var path = __dirname+"/Node-stream-handson/data_file.txt";
const fileReaderStream = fs.createReadStream(path);

var data = "", netLength = 0;

fileReaderStream.on('data', (chunk)=>{
  netLength += chunk.length;
  data += chunk;
  console.log(chunk.length);
});
//data.length and  netLength are different
fileReaderStream.on('end', ()=>{
  console.log("@"+data.length);
  console.log("*"+netLength);
});

// #!/bin/bash
// SCORE=0
// PASS=0
// fail=0
// TOTAL_TESTS=1

// TEST_1=$( node App.js | grep -io -e "65536" -e "53970" -e "65516" -e "53954" | wc -l )
// if [ $TEST_1 -gt 4 ]
// then PASS=$((PASS + 1))
// fi;


// echo "Total testcases: 1"
// echo "Total testcase passed: $PASS"
// echo "Total testcase fail: $fail"
// SCORE=$(($PASS*100 / $TOTAL_TESTS))
// echo "FS_SCORE:$SCORE%"