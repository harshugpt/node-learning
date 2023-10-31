var fs = require("fs");
/*
//delete the file or directory
fs.unlink("writeMe.txt", function (err) {
  console.log("file is deleted");
});
*/
/*
//sync
fs.mkdirSync("stuff");
fs.rmdirSync("stuff");
*/
/*
//async CREATING 
fs.mkdir("stuff", function () {
  fs.readFile("readMe.txt", "utf8", function (err, data) {
    fs.writeFile("./stuff/writeMe.txt", data, function (err) {
      console.log("writeMe file is written in stuff directory");
    });
  });
});
*/
//deletion first file in the directory and then the directory itself
fs.unlink("./stuff/writeMe.txt", function () {
  fs.rmdir("stuff", function () {
    console.log("file as well as dir is deleted");
  });
});
