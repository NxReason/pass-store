const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('IPC', {
  login: (name, pass) => ipcRenderer.invoke('login', name, pass),
});
