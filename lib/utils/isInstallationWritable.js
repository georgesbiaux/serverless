'use strict';

const path = require('path');
const fs = require('fs');

const licenceFilePath = path.join(__dirname, '../../LICENSE.txt');

/**
 * Check if the installation files are writable by the script
 */
function isInstallationWritable() {
  const testTextToAppend = ' ';
  try {
    const licenseFileContent = fs.readFileSync(licenceFilePath);
    fs.writeFileSync(licenceFilePath, licenseFileContent + testTextToAppend);
    fs.writeFileSync(licenceFilePath, licenseFileContent);

    return true;
  } catch (e) {
    return false;
  }
}

module.exports = isInstallationWritable;
