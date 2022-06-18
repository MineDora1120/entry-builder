module.exports = {
    information : function(title, dirnameicon, electrons, files) {
    //코드 변경시 문제가 발생할 수 있습니다.
    //기본 설정된 값이 불편하신분만 변경해주세요
    const {app, BrowserWindow} = electrons//require('electron')
    const path = require('path')
    const url = require('url')

    let win
    console.log("* ENTRY BUILDER ELECTRON - Ready Module. (1/3)")

    function createWindow() {
    win = new BrowserWindow({width: 1105, height: 700, resizable: false, autoHideMenuBar:true, title : `${title}`, icon: path.join(__dirname, `${dirnameicon}`)})

    win.loadURL(url.format({
        pathname: files,
        protocol: 'file:',
        slashes: true
    }))
    console.log("* ENTRY BUILDER ELECTRON - REGISTERING! (3/3)")

    win.on('closed', () => {
        win = null
    })
    }
    app.on('ready', createWindow)
    console.log("* ENTRY BUILDER ELECTRON - Started... (2/3)")

    app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
            }
        })
    }
}
