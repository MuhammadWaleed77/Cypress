 //<reference types="Cypress" />
 <reference types="cypress-iframe"/>
import cypress from 'cypress'
 import 'cypress-iframe'
 import HomePage from '../../support/pageObjects/HomePage'

describe('My Second Test Suite', function() 
{
    before(function(){
        cy.fixture('example').then(function(data){ // this method gets data from fixture folder enter json file name and resolve promise
            this.data=data // makes scope of this variable to be global (use this.)to be used in entire class else it would be used only inside a function

        })  
        // .button:last-of-type   this selects the last 2nd button when there are two buttons 

    })

    it ('MyTestCAse', function() {
     
        cy.visit(Cypress.env('url')+"abc") 
          
        cy.contains('CheckOut').click(); // click using text of button

      //  cy.get('input[name="name"]:nth-child(1)').type("Bob")
        cy.get('form input.form-control:nth-child(1)').type(this.data.name)
        cy.get('select').select(this.data.gender)

        //Validate if text is present
        cy.get('ffd').should('have.value',this.data.name)   // 2nd method to validate , no use of promise
        cy.get('ffd').should('have.attr','minlength','2') // minlength is html attribute , 2nd method is use prop()
        cy.get('ffd').should('be.disabled') // check if button is disabled

        cy.pause() //pauses test use it on runtime when tc fails at some point 
        cy.debug() // same
        //************************** */
        //select on specific item from list and click on its Add to Cart
         //**MEHOD 1 GENERAL */
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {   // get entire list elements
 
            if($e1.text().includes('Blackberry')) 
            {
                cy.get('buttonbtn.btn.btn-info').eq(index).click()   // get blackberry index number
            }
         
         
        })
          // Goto support|Command to see a generic command for this
        //******************************************* */
        // **METHOD 2 FRAMEWORK MAKE GENERIC
       cy.selectProduct('BlackBerry')  // call custom function/command
       cy.selectProduct('Nokia Edge')
       
       //**************USE DATA DRIVEN FOR THIS *********************** */
         // make array in json
         this.data.productName // this will return entire array
        
          //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
          this.data.productName.forEach(element => 
            cy.selectProduct(element)   // it will select both elements (blackberry and nokia)
            );  //for loop in js see link above    
       
    })

    it ('MyFrameworkPageObj USe', function() {
      
       
    const homePage=  new HomePage()
    cy.visit('https://rahulshettyacademy.com/angularpractice')

    homePage.getEditBox().type(this.data.name)
    homePage.getEditBox().should('have.attr','minlength','2') 
    homePage.getGender().should('be.disabled')
    Cypress.config('defaultCommandTimeout',8000) // custom wait for this tc  this will apply to all commands
    homePage.should('have.value',this.data.name)   // 2nd method to validate , no use of promise
    homePage.getEntrepeeneaur().click('force:true') // use when not interactable error/ being covered by another element
    cy.get('xb').should('have.text',"Succes .") // Sometime this will not work as extra sapces are there so use include method
    cy.get('xb').then(function(element){
      const actualtext= element.text()
        //https://docs.cypress.io/guides/references/assertions
       
         //User assertion of true
         expect(actualtext.includes("Success")).to.be.true
      
    })
    //****************************************************************************** */
    // Sum of shopping items on a cart
    sum = 0;

    cy.get('eys').each(($e1, index, $list) => {

      var res= actualtext.split(" ") // when there is space/extra values $2000 for removving it incase we need to add two values 
        // after this we have values as res[0] =$. and res[1]=5000
    res= res[1].trim() // remove any spaces if any

   sum= Number(sum)+Number(res) // convert arry to int , sum is declared as 0 but js treats it as string so also convert it

    }).then(function(){
      cy.log(sum) // js is not async so it will run this as its valus is ready first as will print 0 so how to make it 
      //execute coomands in sequence (use .then)
    })
    
    cy.get('sumShower').then(function(element){
      const amount = element.text() //get price shown for comparison
      var res= actualtext.split(" ")
      res= total[1].trim()
      expect(Number(total)).to.equal(sum)  // assertion to see calculated is equl to origional

    })
    
    cy.get('fd').contains('checkout').click()
    
    })

})