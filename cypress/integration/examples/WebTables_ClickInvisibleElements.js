<reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//Check if Price is 25 for a xyz Python course
 
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {  // get 2nd child ise :nth-child(2)
 
    const text=$e1.text()
    if(text.includes("Python"))
    {       
        //Redirect to next column against this column  use next () JQuery method which can only work with .get
            //https://docs.cypress.io/api/commands/next

        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)  //get index of same row in next column 
        {
          const priceText=   price.text()  // text is JQery method so resolve promise
          expect(priceText).to.equal('26')
        })
    }

    //Handle Mouse Hover
     // Cypress doesn't support mouse hover so use JQery method show() to make it visible
       //https://docs.cypress.io/api/commands/invoke#Syntax

     cy.get('#mousehandle').invoke('show')  // invoke('show') gets all hidden elements (hover pe 2,3 text ho ya kuch b )
     cy.contains('Top').click(); //hovers showed top and click it.
     cy.url().should('include','top')  // url should have top in it
       
     //Cypress can also click on hover elements without invoking/show/opening them (only Cypress has this functionality)
     // For this forcetrue command is used

     cy.contains('Top').click({force:true})
     cy.url().should('include','top')

 
})
 
 
})
 
 
})