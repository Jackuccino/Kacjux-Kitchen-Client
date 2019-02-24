const { app, BrowserWindow, Menu } = require("electron");
const url = require("url");
const path = require("path");

let mainWindow;

// Listen for app to be ready
app.on("ready", () => {
  // Create new window
  mainWindow = new BrowserWindow({});
  // Load html into window
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "/app/components/mainWindow.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
});

// Create menu template
const mainMenuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Quit",
        accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        }
      }
    ]
  }
];
