 <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') // use check instead of click more reliable, finds and checks checkbox with value label as option1 
cy.get('#checkBoxOption1').uncheck().should('not.be.checked') //uncheck
cy.get('input[type="checkbox"]').check(['option2','option3']) // select multiple with one line of code
 
//Static Dropdown
 
cy.get('select').select('option2').should('have.value','option2')
 
//Dynamic dropdowns
cy.get('#autocomplete').type('ind')
 
cy.get('.ui-menu-item div').each(($e1, index, $list) => {  //parent to child locator give space
 
    if($e1.text()==="India")   //check of text is present, Another method is showin in framework file
    {
        $e1.click()
    }
 
 
})
//autocomplete
cy.get('#autocomplete').should('have.value','India')
//visible invisible
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')
 
//radio buttons
 
cy.get('[value="radio2"]').check().should('be.checked')
 

 
 
}  )
 
 
 
}  )