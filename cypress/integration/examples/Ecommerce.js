///<reference types ='cypress'/>

it('Control login', ()=> {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    //:visible for getting only visble items
    cy.get('.product:visible').should('have.length',4)

    //Parent to child
    cy.get('.products').find('.product').should('have.length',4)

    // Select 2nd elemnt to add in cart using indexing
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function()
    {
        console.log('abc');// tell it manually to print this after upper commancd is executed as this isnot cypress commancd
    })


    // Grab text of elemnt for  identifying location/validation and then click
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        
        // Here index is resolved for promise ( each element retured is resolved promise) so we are abel to use text()
        const textVeg=$el.find('h4.product-name').text() //css path with tag name
        if(textVeg.includes('Cashews')) //includes also searches for substring
        {
        cy.wrap($el).find('button').click() // use wrap as sel click is depriciated
        }
        })
         
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')
         
        //this is to print in logs
        cy.get('.brand').then(function(logoelement) // use .then() to resolve promise to acheive async.
        {
            cy.log(logoelement.text())  //cypress command
            console.log('abc') // not a cypress func this will be displayed in inspect console 
         
        })

        // storing value in variable is not a cypress command so it doesn't have any resolve promise abality
        // (it only returns promise but doesn't resolve it) due to ehich execution fails

        //const logo=cy.get('.brand')   
        //cy.log(cy.get('.brand').text())
        // cy.log(logo.text())
    
        // When one locator is being called many times throw it into a variable one time and call it (promise alternate )
        cy.get('.products').as('product') //as is called alising
        cy.get('@product')

       // Assert if logo rext is correctly displayed
       cy.get('.brand').should('have.text','GreenKart')
       cy.get('.products').find('.product').should('have.length',4)
})