var fs = require("fs");
/*
//sync process
var data = fs.readFileSync("readMe.txt", "utf8"); //it will first read all the things underneath the file before moving to further code
//we deal with binary data for reading files so we pass the charincode
fs.writeFileSync("writeMe.txt", data);
*/

//async
fs.readFile("readMe.txt", "utf8", function (err, data) {
  fs.writeFile("writeMe.txt", data, function (err) {
    console.log("the data is written");
  });
});
