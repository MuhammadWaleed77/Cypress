/// <reference types="Cypress" />
 
describe('My First Test Suite', function() 
{
 // send only 1 data from api rather then all the data 
it('Mock http responce from generating entire data to test edge cases ',function() {
 
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
 
    // cy.intercept({reqObj}, {responceObj})  this is pattern of function , both are taken input as json {} obj
    cy.intercept({   //https://docs.cypress.io/api/commands/intercept#Comparison-to-cy-route 
        method : 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    }, //cypress will not make this req rather it will listen to this req on browser when listened it asks to send which responce
    // real or mocked which is defined below

      //{responceObj} 
      // https://docs.cypress.io/api/commands/intercept#Request-object-properties   things gat can be given as responce obj
     {  
         statusCode : 200,
         body : [{
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"   
             }]  // instead of real responce this responce will be send 
          
     }).as('bookretrievals')     // collect this entire thing into one variable

     cy.get("button[class='btn btn-primary']").click() // After click this api is trigerred
     cy.wait('@bookretrievals').should(({request,response})=>  // wait untill bookretrievals mock responnce is sentand  promise is resolved
     {    //length of the response array = rows of the table
         cy.get('tr').should('have.length',response.body.length+1) // compare if api data records is visible on browser completely rows coloumns
                                                                // Test Ui and Back end services (make sure no of records api giced is = to no of rows displayed)
     })            //response.body.length +1 gives the mocked responce and its length i.e 1 record +1 is for the heading row
                    // total 2 rows are displayed
     cy.get('p').should('have.text','Oops only 1 Book available')
 
 
 
     
 
 
 
 
})
 
})
 
 
 
