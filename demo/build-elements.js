const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/tooltip/runtime.js',
    './dist/tooltip/polyfills.js',
    './dist/tooltip/scripts.js',
    './dist/tooltip/main.js'
  ];
  await concat(files, './demo/tooltip-element.js');
})();
