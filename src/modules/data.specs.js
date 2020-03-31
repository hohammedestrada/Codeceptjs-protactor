const AutomationUtil = require('../utils/AutomationUtil')
const path = require('path');
let config = AutomationUtil.parseFileSync('sb3.config.json');
const { I } = inject();

module.exports = {
    setFeature : (feature) => {
        Feature(feature);
    },
    getDataTest : (state) => {
        
        BeforeSuite(async (I) => {
            //await dataStep.givenDataTest(state);

            /*Usando archivo fisico*/
            //state.data = AutomationUtil.parseFileSync('sb3.data.json').login;

            /*Usando api rest, para que funcione el ejemplo ejecutar el script initApiRest del package.json*/
            //I.haveRequestHeaders({auth: "${token}"});
            let request = await I.sendGetRequest(config.urlData);
            Object.assign(state,request.data);
        });

        
    }
}