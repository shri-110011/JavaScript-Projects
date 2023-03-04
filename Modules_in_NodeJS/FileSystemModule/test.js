// const fs = require('fs');
// const fileWriterStream = fs.createWriteStream("Sample.txt",{flags:'a'});
// var data = "Hello World!\n", count=10;
// for(i=0;i<count;i++){
// 	fileWriterStream.write(data, "utf-8");
// }

// fileWriterStream.end();
//console.log(fileWriterStream);
// WriteStream {
//   _writableState: WritableState {
//     objectMode: false,
//     highWaterMark: 16384,
//     finalCalled: false,
//     needDrain: false,
//     ending: true,
//     ended: true,
//     finished: false,
//     destroyed: false,
//     decodeStrings: true,
//     defaultEncoding: 'utf8',
//     length: 12,
//     writing: true,
//     corked: 0,
//     sync: false,
//     bufferProcessing: false,
//     onwrite: [Function: bound onwrite],
//     writecb: [Function: nop],
//     writelen: 12,
//     afterWriteTickInfo: null,
//     buffered: [],
//     bufferedIndex: 0,
//     allBuffers: true,
//     allNoop: true,
//     pendingcb: 1,
//     prefinished: false,
//     errorEmitted: false,
//     emitClose: true,
//     autoDestroy: true,
//     errored: null,
//     closed: false
//   },
//   _events: [Object: null prototype] {
//     open: [Function: bound onceWrapper] { listener: [Function (anonymous)] }
//   },
//   _eventsCount: 1,
//   _maxListeners: undefined,
//   path: 'Sample.txt',
//   fd: null,
//   flags: 'w',
//   mode: 438,
//   start: undefined,
//   autoClose: true,
//   pos: undefined,
//   bytesWritten: 0,
//   closed: false,
//   [Symbol(kFs)]: {
//     appendFile: [Function: appendFile],
//     appendFileSync: [Function: appendFileSync],
//     access: [Function: access],
//     accessSync: [Function: accessSync],
//     chown: [Function: chown],
//     chownSync: [Function: chownSync],
//     chmod: [Function: chmod],
//     chmodSync: [Function: chmodSync],
//     close: [Function: close],
//     closeSync: [Function: closeSync],
//     copyFile: [Function: copyFile],
//     copyFileSync: [Function: copyFileSync],
//     createReadStream: [Function: createReadStream],
//     createWriteStream: [Function: createWriteStream],
//     exists: [Function: exists],
//     existsSync: [Function: existsSync],
//     fchown: [Function: fchown],
//     fchownSync: [Function: fchownSync],
//     fchmod: [Function: fchmod],
//     fchmodSync: [Function: fchmodSync],
//     fdatasync: [Function: fdatasync],
//     fdatasyncSync: [Function: fdatasyncSync],
//     fstat: [Function: fstat],
//     fstatSync: [Function: fstatSync],
//     fsync: [Function: fsync],
//     fsyncSync: [Function: fsyncSync],
//     ftruncate: [Function: ftruncate],
//     ftruncateSync: [Function: ftruncateSync],
//     futimes: [Function: futimes],
//     futimesSync: [Function: futimesSync],
//     lchown: [Function: lchown],
//     lchownSync: [Function: lchownSync],
//     lchmod: undefined,
//     lchmodSync: undefined,
//     link: [Function: link],
//     linkSync: [Function: linkSync],
//     lstat: [Function: lstat],
//     lstatSync: [Function: lstatSync],
//     lutimes: [Function: lutimes],
//     lutimesSync: [Function: lutimesSync],
//     mkdir: [Function: mkdir],
//     mkdirSync: [Function: mkdirSync],
//     mkdtemp: [Function: mkdtemp],
//     mkdtempSync: [Function: mkdtempSync],
//     open: [Function: open],
//     openSync: [Function: openSync],
//     opendir: [Function: opendir],
//     opendirSync: [Function: opendirSync],
//     readdir: [Function: readdir],
//     readdirSync: [Function: readdirSync],
//     read: [Function: read],
//     readSync: [Function: readSync],
//     readv: [Function: readv],
//     readvSync: [Function: readvSync],
//     readFile: [Function: readFile],
//     readFileSync: [Function: readFileSync],
//     readlink: [Function: readlink],
//     readlinkSync: [Function: readlinkSync],
//     realpath: [Function: realpath] { native: [Function (anonymous)] },
//     realpathSync: [Function: realpathSync] { native: [Function (anonymous)] },
//     rename: [Function: rename],
//     renameSync: [Function: renameSync],
//     rm: [Function: rm],
//     rmSync: [Function: rmSync],
//     rmdir: [Function: rmdir],
//     rmdirSync: [Function: rmdirSync],
//     stat: [Function: stat],
//     statSync: [Function: statSync],
//     symlink: [Function: symlink],
//     symlinkSync: [Function: symlinkSync],
//     truncate: [Function: truncate],
//     truncateSync: [Function: truncateSync],
//     unwatchFile: [Function: unwatchFile],
//     unlink: [Function: unlink],
//     unlinkSync: [Function: unlinkSync],
//     utimes: [Function: utimes],
//     utimesSync: [Function: utimesSync],
//     watch: [Function: watch],
//     watchFile: [Function: watchFile],
//     writeFile: [Function: writeFile],
//     writeFileSync: [Function: writeFileSync],
//     write: [Function: write],
//     writeSync: [Function: writeSync],
//     writev: [Function: writev],
//     writevSync: [Function: writevSync],
//     Dir: [class Dir],
//     Dirent: [class Dirent],
//     Stats: [Function: Stats],
//     ReadStream: [Getter/Setter],
//     WriteStream: [Getter/Setter],
//     FileReadStream: [Getter/Setter],
//     FileWriteStream: [Getter/Setter],
//     _toUnixTimestamp: [Function: toUnixTimestamp],
//     F_OK: 0,
//     R_OK: 4,
//     W_OK: 2,
//     X_OK: 1,
//     constants: [Object: null prototype] {
//       UV_FS_SYMLINK_DIR: 1,
//       UV_FS_SYMLINK_JUNCTION: 2,
//       O_RDONLY: 0,
//       O_WRONLY: 1,
//       O_RDWR: 2,
//       UV_DIRENT_UNKNOWN: 0,
//       UV_DIRENT_FILE: 1,
//       UV_DIRENT_DIR: 2,
//       UV_DIRENT_LINK: 3,
//       UV_DIRENT_FIFO: 4,
//       UV_DIRENT_SOCKET: 5,
//       UV_DIRENT_CHAR: 6,
//       UV_DIRENT_BLOCK: 7,
//       S_IFMT: 61440,
//       S_IFREG: 32768,
//       S_IFDIR: 16384,
//       S_IFCHR: 8192,
//       S_IFLNK: 40960,
//       O_CREAT: 256,
//       O_EXCL: 1024,
//       UV_FS_O_FILEMAP: 536870912,
//       O_TRUNC: 512,
//       O_APPEND: 8,
//       F_OK: 0,
//       R_OK: 4,
//       W_OK: 2,
//       X_OK: 1,
//       UV_FS_COPYFILE_EXCL: 1,
//       COPYFILE_EXCL: 1,
//       UV_FS_COPYFILE_FICLONE: 2,
//       COPYFILE_FICLONE: 2,
//       UV_FS_COPYFILE_FICLONE_FORCE: 4,
//       COPYFILE_FICLONE_FORCE: 4
//     },
//     promises: [Getter]
//   },
//   [Symbol(kCapture)]: false,
//   [Symbol(kIsPerformingIO)]: false
// }
// console.log("Write complete")
// -------------------------------------------------
//Code for routing
// const http = require('http');
// const url = require('url');
// var requestedURL = "http://127.0.0.1:800/hello";
// var pathName = url.parse(requestedURL).pathname;

// //  if(pathName == "/hi"){
// //     console.log("Hi");
// //   }
// //   else if(pathName == "/hello"){
// //     console.log("Hello");
// //   }

// http.createServer(function(req, res){
//   var pathName = url.parse(req.url).pathname;
//   if(pathName == "/hi"){
//     res.writeHead(200, {"content-type":"text/plain"});
//     res.write("Hi");
//     res.end();
//   }
//   else if(pathName == "/hello"){
//     res.writeHead(200, {"content-type":"text/plain"});
//     res.write("Hello Buddy");
//     res.end();
//   }

// }).listen(8000);
// console.log(pathName);

//-----------------------------------------------------
// # cat App.js | grep -e "Hi Welcome" -e "Hello Buddy" -e "404 File not found error"
// # TEST_1=$( cat App.js | grep -e "Hi Welcome" -e "Hello Buddy" -e "404 File not found error" | wc -l )
// # if [ $TEST_1 -ge 3 ]
// # then PASS=$((PASS + 1))
// # fi;

// const http = require('http');
// const url = require('url');
// var requestedURL = "http://127.0.0.1:800/hello";
// var pathName = url.parse(requestedURL).pathname;

// //  if(pathName == "/hi"){
// //     console.log("Hi");
// //   }
// //   else if(pathName == "/hello"){
// //     console.log("Hello");
// //   }

// http.createServer(function(req, res){
//   var pathName = url.parse(req.url).pathname;
//   if(pathName == "/hi"){
//     res.writeHead(200, {"content-type":"text/plain"});
//     res.write("Hi Welcome");
//     res.end();
//   }
//   else if(pathName == "/hello"){
//     res.writeHead(200, {"content-type":"text/plain"});
//     res.write("Hello Buddy");
//     res.end();
//   }
//   else{
//     res.writeHead(400, {"content-type":"text/plain"});
//     res.write("404 File not found error");
//     res.end();
//   }

// }).listen(8000);
// console.log(pathName);

//-------------------------------------------------------------
// const http = require('http');
// const url = require('url');
// const queryString = require('querystring');
// const fs =require('fs');
// const fileStreamWriter = fs.createWriteStream("output1.txt");

// http.createServer(function(req, res){
//     var pathName = url.parse(req.url).pathname;
//     var postData = "";
//     req.addListener("data", function(chunk){
//         postData += chunk;
//     });
//     req.addListener("end", function(){
//         if(pathName == "/"){
//             var htmlfile = '<!doctype html>'+
//             '<html>'+
//             '<head>'+
//                 '<title>Review Form</title>'+
//             '</head>'+
//             '<body>'+
//                 '<form action="/save" method="post">'+
//                     '<label for="fname">Enter first name</label><br>'+
//                     '<input type="text" id="fname" name="fname"/><br>'+
//                     '<label for="age">Enter the age</label><br>'+
//                     '<input type="text" id="age" name="age"/><br><br>'+
//                     '<label for="lname">Enter last name</label><br>'+
//                     '<input type="text" id="lname" name="lname"/><br><br>'+
//                     '<input type="submit" value="Save"/>'+
//                 '</form>'+
//             '</body>'+
//             '</html>';
//             res.writeHead(200, {"content-type":"text/html"});
//             res.write(htmlfile);
//             res.end();
//           }
//           else if(pathName == "/save"){
//             var x = queryString.parse(postData);
//             //var value = "";
//             var value = JSON.stringify(x);
//             fileStreamWriter.write(value,"utf-8");
//             console.log(value);
//             // console.log(JSON.stringify(x));
//             // console.log(JSON.parse(JSON.stringify(x)).toString());
//             // console.log(x);
//             // for(y in x){
//             //     value = y+": "+x[y]+"\n";
//             //     console.log(value);
//             //     fileStreamWriter.write(value,"utf-8");
//             // }
//             fileStreamWriter.end();
//             res.writeHead(200, {"content-type":"text/plain"});
//             res.write("Hello Buddy");
//             res.end();
//           }
//           else{
//             res.writeHead(400, {"content-type":"text/plain"});
//             res.write("404 File not found error");
//             res.end();
//           }
//     });
// }).listen(8000);
// console.log("Server started at port 8000");
// -------------------------------------------------------------
// var x = setInterval(()=>{
//     console.log("TCS");
// }, 2000);
// setInterval(stop, 10000);
// function stop(){
//     clearInterval(x);
// }
//------------------------------------------------------------
// function display(sum){
//     console.log(sum);
//   }
//   function findSum(num1, num2, func){
//     sum = 0;
//     for(i=1;i<=1000;i++){
//       if(i%num1 == 0 || i%num2 == 0){
//         sum += i;
//         //console.log(i);
//       }
//     }
//     func(sum);
//   }
//   findSum(3, 5, display);
//----------------------------------------------------------------
// var readline = require('readline');
// var x = require("./module.js");
// var rl = readline.createInterface(process.stdin, process.stdout);
// rl.question("Enter 2 numbers\n",(num1, num2)=>{
//   //console.log();
// //   x.add(num1, num2)
// //   console.log(process.stdin);
// //   console.log(process.stdout);
//     console.log(num1);
//     console.log(num2);
//     console.log(process.argv);
//   rl.close();
// });
// //console.log(x.add(4,5));
//-------------------------------------------------------------------------------

var readline = require('readline');
var module = require("./module.js");
var rl = readline.createInterface(process.stdin, process.stdout);
var arr = new Array();

rl.on('close',()=>{
  //console.log(arr);
  console.log(module.add(arr));
  console.log(module.multiply(arr));
});
rl.on('line',(num)=>{
  arr.push(Number(num));
  //console.log(arr.length);
  if(arr.length>=2){
    rl.close();
  }
});

