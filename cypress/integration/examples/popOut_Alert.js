/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("http://qaclickacademy.com/practice.php")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click() //cypress automatically handles alerts

//We can also trigger browser events on cypress
//window:alert is an alert event
cy.on('window:alert',(str)=>  //on is used to fire  window based event ,we will not see it but cypresss will know
{
    //Mocha ( compare 2 strings)
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
 
cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
 
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
 
 
 
}  )
 
 
 
}  )