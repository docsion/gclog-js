const { GcLog } = require('../../index.js');

const gc = new GcLog();
gc.log("curl 'https://mocha.lozi.vn/v6/search/eateries/promoted?cityId=50&limit=12&page=1&superCategoryId=1&lat=10.7765194&lng=106.700987' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:99.0) Gecko/20100101 Firefox/99.0' -H 'Accept: */*' -H 'Accept-Language: vi_VN' -H 'Accept-Encoding: gzip, deflate, br' -H 'X-Access-Token: unknown' -H 'X-City-ID: 50' -H 'X-Lozi-Client: 1' -H 'Origin: https://loship.vn' -H 'DNT: 1' -H 'Connection: keep-alive' -H 'Referer: https://loship.vn/' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: cross-site' -H 'TE: trailers'");
