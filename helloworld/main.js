console.log('main!');


const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


var mainWin = null;

app.on("window-all-closed", function(){
    app.quit();
});


app.on("ready", () => {
   mainWin = new BrowserWindow({
       name: "hello-world",
       width: 600,
       height: 600,
       toolbar: true //,
       //autoHideMenuBar: true
   });

   //mainWin.setMenuBarVisibility(false);
    console.log(__dirname);

   mainWin.loadURL(`file://${__dirname}/window/index.html`);

   //mainWin.webContents.openDevTools({detach:true});

   mainWin.on('closed', () => {
       mainWin = null;
   });

});