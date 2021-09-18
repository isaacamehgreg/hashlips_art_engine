//await require('./brain');
const { startCreating, buildSetup } = require("./src/main.js");

(async() => {
  buildSetup();
  startCreating();
})();
