 //<reference types="Cypress" />
 

describe('Db', function() 
{
    it ('Db test', function() {
    

   //  cy.sqlServer("select secret_key from partnerships where title like  '%FWTest%").then(function(result){
   //     console.log(result)
    // })
    cy.task("queryDb","select secret_key from partnerships where title like  '%FWTest%'").then(function(result){
             console.log(result)
    })

    })
})