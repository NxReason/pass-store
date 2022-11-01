const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const login = require('./backend/login');

const isDev = process.env.NODE_ENV === 'dev';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  ipcMain.handle('ping', () => 'pong');

  if (isDev) {
    win.loadURL('http://localhost:3000');
  } else {
    win.loadFile('./ui/index.html');
  }
};

app.whenReady().then(() => {
  ipcMain.handle('login', login);
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
