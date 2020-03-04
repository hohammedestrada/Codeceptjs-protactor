const fs = require('fs');

function fnGetFiles(dir, filter = '', files_) {
  files_ = files_ || [];
  const files = fs.readdirSync(dir);
  for (let i in files) {
    let name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      fnGetFiles(name, filter, files_);
    } else if (name.indexOf(filter) >= 0) {
      files_.push(name);
    }
  }
  return files_;
}

module.exports = {
  fnGetFiles,
};
