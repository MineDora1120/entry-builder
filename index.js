const electron = require("electron") //electron 불러오기
const  MakeHTML= require("./local_modules/html-builder") //자체 모듈 엔트리 구동용 html 코드 불러오기
const  Builder = require("./local_modules/builder") //자체 모듈 엔트리 구동용 electron 코드 불러오기

const file = "./index.html"; //엔트리 구동용 html의 파일 위치를 지정합니다.
MakeHTML.html("https://playentry.org/iframe/614604f17fe742d742af0bf4", file)
//엔트리 URL을 file(./index.html)에 알맞게 작성하여 html의 형식에 맞게 코드를 구성합니다.
//순서대로 엔트리 iframe링크, 파일위치 입니다.

Builder.information("제목", "./local_modules/entry.png",file)
//프로그램의 제목("제목")을 지정하고, 아이콘의 사진을 정해 file(./index.html)과 electron을 구성시킵니다.
//순서대로 제목, 아이콘위치, 파일위치 입니다.