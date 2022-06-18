module.exports = {
    information : function(title, dirnameicon, electrons, files) {
        const fs = require('fs')

    //코드 변경시 문제가 발생할 수 있습니다.
    //기본 설정된 값이 불편하신분만 변경해주세요
    const {app, BrowserWindow} = electrons//require('electron')
    const path = require('path')
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
    win = new BrowserWindow({width: 1105, height: 700, resizable: false, autoHideMenuBar:true, title : `${title}`, icon: `${dirnameicon}`})
 
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
    }
    app.on('ready', createWindow)
    app.on('ready', onlineWindow)
    console.log("* ENTRY BUILDER ELECTRON - SUSSESSFUL LOAD (2/3)")
    
    app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
            }
        })
    }
}
