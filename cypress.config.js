const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: '7nnao2',
  defaultCommandTimeout: 8000,
  reporter : "mochawesome",
  

  customVar: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/*.js",
    "cy:run": "cypress run",
  },

   env: {
    
    url: "https://google.com",
  },

  
  "db": {
    "host": "numuworld-api-staging-database.cip1bixrtalr.eu-west-1.rds.amazonaws.com",
    "user": "numuTestDB",
    "password": "poisonContlearnDB21?"
  
  },
  
  
  retries: {
  
    "runMode": 1,
  },


  e2e: {
    setupNodeEvents(on, config) {
      
        on('file:preprocessor', cucumber())
      
      
    },
    
    
  },
});
