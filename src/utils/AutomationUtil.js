const path = require('path');
const fs = require('fs');
const codeceptjs = require("codeceptjs");

class AutomationUtil {
  
  static wait() {
    return { retries: 3, minTimeout: 2000 };
  } 

  static fnGetFiles(dir, filter = '', files_) {
    files_ = files_ || [];
    const files = fs.readdirSync(dir);
    for (let i in files) {
      let name = dir + '/' + files[i];
      if (fs.statSync(name).isDirectory()) {
        this.fnGetFiles(name, filter, files_);
      } else if (name.indexOf(filter) >= 0) {
        files_.push(name);
      }
    }
    return files_;
  }
  
  static saveScreenshotWithMocha(baseName,fileName) {
    let scenario = path.basename(baseName);
    codeceptjs.actor().retry(wait).saveScreenshot(scenario+"-"+fileName + '.png');
    codeceptjs.actor().addMochawesomeContext(scenario+"-"+fileName);
    codeceptjs.actor().addMochawesomeContext(scenario+"-"+fileName + '.png');
  }
}

module.exports = AutomationUtil;
