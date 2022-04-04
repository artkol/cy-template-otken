/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// import * as allureWriter from "@shelex/cypress-allure-plugin/writer";

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  // dev
  if (config.env.upstream === 'dev') {
    config.baseUrl = 'http://devurl.com'
    config.env.email = 'email@email.com'
    config.env.login = 'login'
    config.env.password = 'password'
    config.env.environment = 'dev'

    // prod
  } else if (config.env.upstream === 'prod') {
    config.baseUrl = 'http://produrl.com'
    config.env.email = 'email@email.com'
    config.env.login = 'login'
    config.env.password = 'password'
    config.env.environment = 'prod'
  }

  if (config.testingType === 'component') {
    require('@cypress/react/plugins/react-scripts')(on, config)
  }

  return config
}
