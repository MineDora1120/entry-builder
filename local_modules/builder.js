const fs = require('fs');
module.exports = {
    /**
     * 엔트리 빌더의 정보를 설정합니다.
      @param {String} iconFile 프로그램의 제목을 입력하는 란입니다.
      @param {String} title 프로그램에 아이콘을 적용할 위치를 설정하는 란입니다. (필수)
      @param {String} files 연결용 html을 불러올 경로를 지정하는 란입니다.
      @param {String} size 프로그램 크기를 설정합니다. 기본 크기는 10이며, 소수를 사용할 수 있습니다.  (주의! 사이즈가 20초과시 창이 이상하게 나타날 수 있습니다. )
      @todo 이 항목들(title 제외)은 입력하지 않을 경우 기본데이터로 대체됩니다.
     */
    info : function({title, iconFile, files, size}) {
        if(!title) {
            new Error("title is not found.");
        }
        if(isNaN(size)) var size = 10
        if(!iconFile) var iconFile = `${__dirname}/entry.png`
        if(!files) var files = `${__dirname}/temp.html`
        var size = size*0.1
    

    //코드 변경시 문제가 발생할 수 있습니다.
    //기본 설정된 값이 불편하신분만 변경해주세요
    const dns = require('dns')
    const {app, BrowserWindow, dialog } = require('electron')
    const url = require('url')

    let win
    console.log("* ENTRY BUILDER ELECTRON - Ready Module. (1/3)")     
    function createWindow() {
    win = new BrowserWindow({width: 1105*size, height: 690*size, resizable: false, autoHideMenuBar:true, title : `${title}`, icon: `${iconFile}`, fullscreenable: false})
 
    win.loadURL(url.format({
        pathname: files,
        protocol: 'file:',
        slashes: true
    }))

    dns.resolve('playentry.org', function(err, addr){
      if(err) return dialog.showMessageBox(null,{type:'warning',title:'오류', message:'엔트리에 연결할 수 없어요.'}) })

    console.log("* ENTRY BUILDER ELECTRON - REGISTERING! (3/3)")
    win.on('closed', () => {
        win = null
        app.quit();
    })
    console.log("* ELECTRON is ON!")

win.on('page-title-updated', (evt) => {
  evt.preventDefault();
});
    }
    app.on('ready', createWindow)
    console.log("* ENTRY BUILDER ELECTRON - SUSSESSFUL LOAD (2/3)")
    
    app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
            }
        })
    },
        /**
     * URL을 연결할 파일을 생성하는 함수입니다.
      @param {String} id 엔트리 작품의 id를 입력하는 란입니다.
      @param {String} files 연결용 html을 생성할 경로를 지정하는 란입니다.
      @todo 이 항목들(title 제외)은 입력하지 않을 경우 기본데이터로 대체됩니다.
     */
     siteinfo : function({id, files}) {
        if(!files) var files = `${__dirname}/temp.html`

        if(!id) {
            throw new Error("Project ID is not found.");
        }
        console.log("* ENTRY BUILDER HTML - Ready Module.")
      const content = `
      <body style="overflow:hidden;">
      <script>
      window.location.href = "${encodeURI(`https://playentry.org/iframe/${id}`)}"
      </script> 
      </body>
      `
      fs.writeFile(files, content, err => {
              if(err) throw new Error("ERROR! : Could not create html.\n임시파일을 만들 수 없었습니다.");
            })
            console.log("* ENTRY BUILDER HTML - SUSSESSFUL!")
      },
    /**
     * 엔트리 빌더의 정보를 설정합니다. (구형)
     * @deprecated 이 함수는 entry-builder v2.0부터는 지원되지 않습니다. 대신 info를 사용하실 수 있습니다. 자세한 내용은 info의 설명을 참고하세요.
     */
      infomation : function(title, dirnameicon, files) {
        throw new Error("이 코드는 사용되지 않습니다. 대신 info를 사용하실 수 있습니다.\nThis code is deprecated. You can use 'info' instead.");
      },
    /**
     * 엔트리 빌더의 정보를 설정합니다. (구형)
     * @deprecated 이 함수는 entry-builder v2.0부터는 지원되지 않습니다. 대신 siteinfo를 사용하실 수 있습니다. 자세한 내용은 siteinfo의 설명을 참고하세요.
     */
      Makehtml : function(url, files) {
        throw new Error("이 코드는 사용되지 않습니다. 대신 siteinfo를 사용하실 수 있습니다.\nThis code is deprecated. You can use 'siteinfo' instead.");
      }
}