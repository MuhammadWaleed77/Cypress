///<reference types ="cypress"/> 
// allows to do autocompletion of code from node library as per cypress commands

//To wite test function we need load runner we will use moca buitin

it('google test case',()=>{
    cy.visit('https://google.com')
   cy.get('.gLFyf').type('cypress{enter}')
    // custom time to wait
  //  cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > a > .LC20lb',{timeout:6000}).click()
  
  // GEt element via text
  cy.wait(2000) // hardcoded wait
  cy.contains('Videos').click()
    

})


