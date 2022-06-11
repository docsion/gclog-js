# GCLOG JAVASCRIPT
Log shareable cURL to Developer Console, to Messenging Program (e.g. Telegram, Slack), and more (https://getcurl.app)

## How it works
<img width="786" alt="gc_logger_flow" src="https://user-images.githubusercontent.com/4256921/167043591-8d7e28d6-ed25-4ad8-9af3-26f1df72c286.png">

## Features

✅ Log cURL as a GETCURL link to Developer Console

☑️ Log URLRequest as a GETCURL link to Developer Console

☑️ Log GETCURL link to Telegram

## Installation

GcLog can be installed as a direct dependency, and will work in any ES5 environment. Install GcLog with `NPM` as below:

```
$ npm install gclog
```

or if you prefer `Yarn`:

```
$ yarn add gclog
```

## Using GcLog

### Log cURL

```
const gc = new GcLog();
gc.log("curl 'https://mocha.lozi.vn/v6/search/eateries/promoted?cityId=50&limit=12&page=1&superCategoryId=1&lat=10.7765194&lng=106.700987' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:99.0) Gecko/20100101 Firefox/99.0' -H 'Accept: */*' -H 'Accept-Language: vi_VN' -H 'Accept-Encoding: gzip, deflate, br' -H 'X-Access-Token: unknown' -H 'X-City-ID: 50' -H 'X-Lozi-Client: 1' -H 'Origin: https://loship.vn' -H 'DNT: 1' -H 'Connection: keep-alive' -H 'Referer: https://loship.vn/' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: cross-site' -H 'TE: trailers'");
```

>https://getcurl.app/#body=Y3VybCAnaHR0cHM6Ly9tb2NoYS5sb3ppLnZuL3Y2L3NlYXJjaC9lYXRlcmllcy9wcm9tb3RlZD9jaXR5SWQ9NTAmbGltaXQ9MTImcGFnZT0xJnN1cGVyQ2F0ZWdvcnlJZD0xJmxhdD0xMC43NzY1MTk0JmxuZz0xMDYuNzAwOTg3JyAtSCAnVXNlci1BZ2VudDogTW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTAuMTU7IHJ2Ojk5LjApIEdlY2tvLzIwMTAwMTAxIEZpcmVmb3gvOTkuMCcgLUggJ0FjY2VwdDogKi8qJyAtSCAnQWNjZXB0LUxhbmd1YWdlOiB2aV9WTicgLUggJ0FjY2VwdC1FbmNvZGluZzogZ3ppcCwgZGVmbGF0ZSwgYnInIC1IICdYLUFjY2Vzcy1Ub2tlbjogdW5rbm93bicgLUggJ1gtQ2l0eS1JRDogNTAnIC1IICdYLUxvemktQ2xpZW50OiAxJyAtSCAnT3JpZ2luOiBodHRwczovL2xvc2hpcC52bicgLUggJ0ROVDogMScgLUggJ0Nvbm5lY3Rpb246IGtlZXAtYWxpdmUnIC1IICdSZWZlcmVyOiBodHRwczovL2xvc2hpcC52bi8nIC1IICdTZWMtRmV0Y2gtRGVzdDogZW1wdHknIC1IICdTZWMtRmV0Y2gtTW9kZTogY29ycycgLUggJ1NlYy1GZXRjaC1TaXRlOiBjcm9zcy1zaXRlJyAtSCAnVEU6IHRyYWlsZXJzJw==

## More languages
[Swift, Kotlin, Javascript and 99+ programing languages are supported.](https://github.com/docsion/gclog)


## Contact
https://getcurl.app/hello
