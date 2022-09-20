 //<reference types="Cypress" />
 <reference types="cypress-iframe"/>
 import 'cypress-iframe'

describe('My Second Test Suite', function() 
{
    it ('IFRAME', function() {
     //Install a plugin npm install -D cypress-iframe and import it 

     cy.frameLoaded('#cources-iframe')
     cy.iframe().find("'a[href*='mentorship']").eq[0] // switch to iframe mode and select element with 0 index
     cy.iframe().find("'a[href*='pricing-title']").should('have.length',2)



    })
})