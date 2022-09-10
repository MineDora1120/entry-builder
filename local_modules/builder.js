const fs = require('fs');
module.exports = {
    /**
     * 엔트리 빌더의 정보를 설정합니다.
      @param {String} iconFile 프로그램의 제목을 입력하는 란입니다.
      @param {String} title 프로그램에 아이콘을 적용할 위치를 설정하는 란입니다. (필수)
      @param {String} files 연결용 html을 불러올 경로를 지정하는 란입니다.
      @param {String} size 프로그램 크기를 설정합니다. 기본 크기는 1이며, 소수를 사용할 수 있습니다.  (주의! 사이즈가 1.3초과시 창이 이상하게 나타날 수 있습니다. )
      @todo 이 항목들(title 제외)은 입력하지 않을 경우 기본데이터로 대체됩니다.
     */
    info : function({title, iconFile, files, size}) {
        if(!title) {
            console.error("ERROR! : title is not found.")
            return process.exit()
        }
        if(isNaN(size)) var size = 1
        if(!iconFile) var iconFile = `${__dirname}/entry.png`
        if(!files) var files = `${__dirname}/temp.html`
    

    //코드 변경시 문제가 발생할 수 있습니다.
    //기본 설정된 값이 불편하신분만 변경해주세요
    const {app, BrowserWindow} = require('electron')
    const url = require('url')

    let win
    let onlineStatusWindow
    console.log("* ENTRY BUILDER ELECTRON - Ready Module. (1/3)")
    function onlineWindow() {
    
          onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false, title : "연결 할 수 없음", icon : "./err.png" })
          onlineStatusWindow.loadURL(`file://${__dirname}/online.html`)
    
          onlineStatusWindow.on('closed', () => {
                onlineStatusWindow = null
                app.quit();
            })        
     console.log("* ELECTRON is ON!")
    }
    function createWindow() {
    win = new BrowserWindow({width: 1105*size, height: 690*size, resizable: false, autoHideMenuBar:true, title : `${title}`, icon: `${iconFile}`, fullscreenable: false})
 
    win.loadURL(url.format({
        pathname: files,
        protocol: 'file:',
        slashes: true
    }))
    console.log("* ENTRY BUILDER ELECTRON - REGISTERING! (3/3)")
    win.on('closed', () => {
        win = null
        app.quit();
    })

win.on('page-title-updated', (evt) => {
  evt.preventDefault();
});
    }
    app.on('ready', createWindow)
    app.on('ready', onlineWindow)
    console.log("* ENTRY BUILDER ELECTRON - SUSSESSFUL LOAD (2/3)")
    
    app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
            }
        })
    },
        /**
     * URL을 연결할 파일을 생성하는 함수입니다.
      @param {String} url 엔트리 작품의 iframe링크를 입력하는 란입니다.
      @param {String} files 연결용 html을 생성할 경로를 지정하는 란입니다.
      @todo 이 항목들(title 제외)은 입력하지 않을 경우 기본데이터로 대체됩니다.
     */
     siteinfo : function({url, files}) {
        if(!files) var files = `${__dirname}/temp.html`

        if(!url) {
            console.error("ERROR! : URL is not found.")
            return process.exit()
        }
        console.log("* ENTRY BUILDER HTML - Ready Module.")
      const content = `
      <body style="overflow:hidden;">
      <script>window.location.href = "${url}"</script> 
      </body>
      `
      fs.writeFile(files, content, err => {
              if(err) return console.log("ERROR! : Could not create html.\n임시파일을 만들 수 없었습니다.");
            })
      const checkHTML = `
      <!DOCTYPE html>
      <html>
      <body>
      <script>
        const alertOnlineStatus = () => {
          if(!navigator.onLine) {
          window.alert('엔트리에 접속할 수 없습니다! \n인터넷 연결을 확인하고 프로그램을 다시 실행해 주세요!')
          }
        }
      
        window.addEventListener('online',  alertOnlineStatus)
        window.addEventListener('offline',  alertOnlineStatus)
      
        alertOnlineStatus()
      </script>
      </body>
      </html>
      `
      fs.writeFile(`${__dirname}/online.html`, checkHTML, err => {
              if(err) return console.log("ERROR! : Could not create CheckOnline.\n온라인 확인파일을 만들 수 없었습니다.");
            })
            console.log("* ENTRY BUILDER HTML - SUSSESSFUL!")
      },
    /**
     * 엔트리 빌더의 정보를 설정합니다. (구형)
     * @deprecated 이 함수는 entry-builder v2.0에서는 지원되지 않습니다. 대신 info를 사용하실 수 있습니다. 자세한 내용은 info의 설명을 참고하세요.
     */
      infomation : function(title, dirnameicon, files) {
        return console.error("이 코드는 사용되지 않습니다. 대신 info를 사용하실 수 있습니다.\nThis code is deprecated. You can use 'info' instead.")
      },
    /**
     * 엔트리 빌더의 정보를 설정합니다. (구형)
     * @deprecated 이 함수는 entry-builder v2.0에서는 지원되지 않습니다. 대신 siteinfo를 사용하실 수 있습니다. 자세한 내용은 siteinfo의 설명을 참고하세요.
     */
      Makehtml : function(url, files) {
        return console.error("이 코드는 사용되지 않습니다. 대신 siteinfo를 사용하실 수 있습니다.\nThis code is deprecated. You can use 'siteinfo' instead.")
      }
}
  
