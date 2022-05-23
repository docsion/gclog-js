const { GcLog } = require('../../index.js');

const gc = GcLog();
const testCurl = `curl -s 'https://macchiato.lozi.space/v1.2/eateries/username:loship4'`;
gc.log(testCurl);
