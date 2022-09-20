 ///<reference types="Cypress" />
// Check if username parameter is changed can you view data of that account or not
describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
   //cy.intercept(method,url,routeHandler) method is being used 
    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
    (req)=> //routeHandler
    {
    req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"  //modify url change name
 
    req.continue((res)=>  // continue will send req to server req is the responce got back from server
    {
        //expect(res.statusCode).to.equal(403)  // verify responce code got from server when username has changed is what
    })
 }
 ).as("dummyUrl")
 
 cy.get("button[class='btn btn-primary']").click()
 cy.wait('@dummyUrl')
 
})
 
})
 