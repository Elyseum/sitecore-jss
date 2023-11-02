require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { constantCase } = require('constant-case');
const { jssConfigFactory } = require('./config');

/* eslint-disable no-console */

/**
 * REACT_APP is the default prefix for environment variables that will be made available to the app.
 */
const defaultConfig = {
  sitecoreApiKey: process.env[`${constantCase('reactAppSitecoreApiKey')}`],
  sitecoreApiHost: process.env[`${constantCase('reactAppSitecoreApiHost')}`],
  siteName:
    process.env[`${constantCase('reactAppSiteName')}`] ||
    process.env[`${constantCase('reactAppJssAppName')}`],
  graphQLEndpointPath: process.env[`${constantCase('reactAppGraphQLEndpointPath')}`],
  defaultLanguage: process.env[`${constantCase('reactAppDefaultLanguage')}`],
  graphQLEndpoint: process.env[`${constantCase('reactAppGraphQLEndpoint')}`],
  layoutServiceConfigurationName:
    process.env[`${constantCase('reactAppLayoutServiceConfigurationName')}`],
};

generateConfig();

/**
 * Generate config
 * The object returned from this function will be made available by importing src/temp/config.js.
 * This is executed prior to the build running, so it's a way to inject environment or build config-specific
 * settings as variables into the JSS app.
 * NOTE! Any configs returned here will be written into the client-side JS bundle. DO NOT PUT SECRETS HERE.
 */
function generateConfig() {
  try {
    config = jssConfigFactory.create(defaultConfig);
  } catch (error) {
    console.error('Error generating config');
    console.error(error);
    process.exit(1);
  }

  writeConfig(config);
}

function writeConfig(config) {
  let configText = `/* eslint-disable */
// Do not edit this file, it is auto-generated at build time!
// See scripts/generate-config.js to modify the generation of this file.
const config = {};\n`;

  // Set base configuration values, allowing override with environment variables
  Object.keys(config).forEach(prop => {
    configText += `config.${prop} = process.env.REACT_APP_${constantCase(prop)} || "${
      config[prop]
    }",\n`;
  });
  configText += 'module.exports = config;';

  const configPath = path.resolve('src/temp/config.js');
  console.log(`Writing runtime config to ${configPath}`);
  fs.writeFileSync(configPath, configText, { encoding: 'utf8' });
}
