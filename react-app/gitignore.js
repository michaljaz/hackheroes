var fs;
fs = require("fs");
fs.writeFile(`.gitignore`, '.gitignore\nnode_modules\n.expo\npackage-lock.json', function(err) {
if (err) {
  return console.log(err);
}
});