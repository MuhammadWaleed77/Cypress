/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{

// Switch to second tab and Handle Child TAB
  // Cypress doesn't have functionality of child/seperate tab 
   // For this  check if target attribute (tells to open link in new tab) is present , remove it for this we need Jquery function removeAttr

   //https://docs.cypress.io/api/commands/invoke

   cy.get('#opentab').invoke('removeAttr','target').click()  // this will open child window in same page
 

   // Check if we are directed on correct url
   cy.url().should('include','qaclickacademy')
    
   // Redirect back to parent page
      //https://docs.cypress.io/api/commands/go
   cy.go('back')

  //****************************************************************************** */
   //OTHER METHOD
      //Grab href attribute and get url fron it and use .visit()

 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('#opentab').then(function(e1)
{
    const url = e1.prop('href') // prop is Jquery method used to get property
    cy.visit(url)  // use come code to adjust this as cypress doesn't allow to overrite parent visit url
})
 

})
 
 
})