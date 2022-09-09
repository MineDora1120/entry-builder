const Builder = require("./local_modules/builder") //자체 모듈 엔트리 구동용 electron 코드 불러오기

Builder.siteinfo({url : "https://playentry.org/iframe/614604f17fe742d742af0bf4"})
//Builder.siteinfo({url : "Link", files : `${__dirname}/temp.html`})
//siteinfo의 주석에 사용법이 입력되어 있습니다.
//url(iframe링크)는 필수로 입력하셔양 합니다.
Builder.info({title : "에엑따"})
//Builder.info({title : "제목", iconFile : `${__dirname}/icon.png`, size : 1.1, files : `${__dirname}/temp.html})
//info의 주석에 사용법이 입력되어 있습니다.
//title(제목)은 필수로 앱력하셔야 합니다.