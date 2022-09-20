///<reference types ='cypress'/>

it('Control login', ()=> {
    cy.visit("https://test.control.numuworld.com")

    cy.get(':nth-child(1) > .input').type("muhammad.waleed@numumail.com")
    cy.get(':nth-child(3) > .input').type("123456")
    cy.get('.sc-idiyUo').click()

})