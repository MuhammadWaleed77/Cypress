// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('selectProduct', (productName) => {  //selectProduct is command name
    cy.get('.ui-menu-item div').each(($e1, index, $list) => {   // get entire list elements
 
        if($e1.text().includes(productName)) 
        {
            cy.get('buttonbtn.btn.btn-info').eq(index).click()   // get blackberry index number
        }
     
     
    })
 }) 
  //Making a command as login will be used in different tc
  Cypress.Commands.add('LoginAPI',()=> {
    cy.request("POST","https://rahulshettyacademy.com/client/auth/login", 
       {"userEmaail":"rahulshetty@gmail.com","userPassword":"Iamking@00"}). // type, url ,payload(username, pass)
       then(function(responce){
            expect(responce.status).to.be.eq(200)
             //responce has token in it which is having 3 objets use json formatter to see
            Cypress.env('token',responce.body.token) // env is used so this token is accessible in entire project in any tc made it global
                                                     // created an env variable token and pushed the responce token value in it
      // inject responce token into cookie, which is done in tc named sessiontest
   })
    })
//   import sqlServer from 'cypress-sql-server';
//sqlServer.loadDBCommands();
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })