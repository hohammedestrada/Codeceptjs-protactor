const ConstUtil = require('../../utils/ConstUtil');
const mModule = require('../../modules/LoginModule');
const logoutModule = require('../../modules/LogoutModule');
const dataStep = require('../../modules/data.specs.js');

let state = {};
dataStep.setFeature('@login');
dataStep.getDataTest(state);

Scenario("Doing Login", () => {
    state.logins.forEach((value) => {
        mModule.Scenario('I select my "<country>" and put my "<user>" and my "<password>"',async () => {
            mModule.definedSteps(value.country, value.user, value.password);
            mModule.saveScreenshotWithMocha(__filename,ConstUtil.CAMPOS_LLENADOS_CORRECTOS);
        });
        
        mModule.Scenario('I click on ingresar a tu cuenta', () => {
            mModule.clickButton();
            mModule.saveScreenshotWithMocha(__filename,ConstUtil.ESPERANDO_LOGIN);
        });
        
        mModule.Scenario('I login on system', () => {
            mModule.loginSystem();
            mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
        });
        
        mModule.Scenario('I logout on system', () => {
            logoutModule.doLogout();
            logoutModule.verifyLogout();
            mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
        });

    });
});