const automationUtil = require("./automationUtil");
const Helper = codeceptjs.helper;
const path = require("path");

class AutomationHelper extends Helper {
  async saveScreenshotWithMocha(baseName,fileName) {
    let scenario = path.basename(baseName);
    codeceptjs.actor().retry(automationUtil.wait).saveScreenshot(scenario+"-"+fileName + '.png');
    codeceptjs.actor().addMochawesomeContext(scenario+"-"+fileName);
    codeceptjs.actor().addMochawesomeContext(scenario+"-"+fileName + '.png');
  }
}

module.exports = AutomationHelper;