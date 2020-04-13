const AutomationUtil = require('../utils/AutomationUtil')
const path = require('path');
let config = AutomationUtil.parseFileSync('sb3.config.json');
const { I } = inject();

module.exports = {
    givenDataTest : (state, fileName = '') => {
        let givenText = 'I have data test'
        if(!fileName.isEmpty()){
            givenText = 'I have data test '+path.basename(fileName).formatFeatureJs();
        }
        console.log("givenText",givenText);
        Given(givenText, async () => {
            /*Usando archivo fisico*/
            //let data = AutomationUtil.parseFileSync('sb3.data.json');
            //Object.assign(state,data);

            /*Usando api rest, para que funcione el ejemplo ejecutar el script initApiRest del package.json*/
            //I.haveRequestHeaders({auth: "${token}"});
            let request = await I.sendGetRequest(config.urlData);
            Object.assign(state,request.data);
        });
    }
}