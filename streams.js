


// stream normal
var fs = require("fs")

var readStream = fs.createReadStream('demofile.txt' , {
   encoding : 'utf-8'
});

var writeStream = fs.createWriteStream(__dirname + "/writeStream.txt", {
   // encoding : 'utf-8'
});

// open file 'demofile.txt'
// readStream.on('open' , function(){
//    console.log('open file');
// });

//  error open file 'demofile.txt'
// readStream.on('error' , function(){
//    console.log('error open file');
// });



// close Stream after read
// readStream.on('end', function () {
//    console.log('All the data in the file has been read');
// })




// read data WAY 1
readStream.on('data' , function(chunk){
   writeStream.write(chunk)
});


 // close Stream after read
// readStream.on('end', function () {
//    readStream.close();
//    writeStream.close();
// })



// read data WAY 2

//var data = readStream.pipe(writeStream)

// fs.appendFile('mynewfile1.txt', readStream.pipe(writeStream), function (err) {
//    if (err) throw err;
//    console.log('Saved!');
//  });


//  fs.unlink('writeStream.txt', function (err) {
//    if (err) throw err;
//    console.log('File deleted!');
//  });

//  fs.rename('writeStream.txt', 'writeStream2.txt', function (err) {
//    if (err) throw err;
//    console.log('File Renamed!');
//  });



 //var fs = require("fs"); 
// Phuong thuc doc file khong dong bo
// fs.readFile('writeStream.txt', function (err, data) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("Phuong thuc doc file khong dong bo: " + data.toString());
// });
// // Phuong thuc doc file dong bo
// var data = fs.readFileSync('input.txt');
// console.log("Phuong thuc doc file dong bo: " + data.toString());
// console.log("Ket thuc chuong trinh.");




// fs.appendFile('mynewfile1.txt', data, function (err) {
//    if (err) throw err;
//    console.log('Saved!');
//  });