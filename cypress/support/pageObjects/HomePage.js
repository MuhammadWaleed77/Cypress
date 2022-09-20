class HomePage
{
    getEditBox() {
        return cy.get('input[name="name"]:nth-child(2)')
    }
    getGender() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getEntrepeeneaur(){
        cy.get('#inlineradio3')
    }
 
}

export default HomePage; // make all page obj avaliable in other files in framework