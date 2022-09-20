/// <reference types="Cypress" />

 const neatCSV =require ('neat-csv')
 let productName
//Login with token and then download csv and match if element clicked as the once present in CSV assertion
// add plugin "neat-csv": "5.1.0"

describe('Inject Session token into browser cookie', function() 
{
 // send only 1 data from api rather then all the data 
it('is logged in thorugh local storage ',function()  {
 
    cy.LoginAPI().then(function()
    {
        cy.visit("https://rahulshettyacademy.com/client",  
        {    //for second option in visit we need to create bracket and enter data
               onBeforeLoad : function(window){ // event executes before executing above url 
                   window.localStorage.setItem('token',Cypress.env('token')) // set token, and second arg is the value of token
               }  
        })
        

    })
    cy.get(".card-body b:last-of-type").eq(1).then(function(ele) 
    {
    productName =  ele.text();  // get clicked product name so it can ve verified with name in CSV
    })

  cy.get(".card-body button:last-of-type").eq(1).click(); //selects last button i.e. 2nd 3rd eq(1) is for product on 2nd index
  cy.get("[routerlink*='cart']").click();
  cy.contains("Checkout").click();
  cy.get("[placeholder*='Country']").type("ind")
  cy.get('.ta-results button').each(($e1, index, $list) => {
    if($e1.text()===" India")
    {
        cy.wrap($e1).click()
    }
})
  cy.get(".action__submit").click();
  cy.wait(2000)
  cy.get(".order-summary button").click();

  //Cypress.config("fileServerFolder") gets the location os your project like in selenium
  cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_rahul.csv")  // reads file and converts into text form
     .then(async(text)=>{// when await is used function should be async else it will not work error would occour
              const csv =  await neatCSV(text)  // pas csv as js obj  //https://www.npmjs.com/package/neat-csv wait is recommended by them
              console.log(csv)
            const actualProductCSV = csv[0]["Product Name"] // refer in console obj is created and 0 index has data
                             // when there is space in property name use " " else directly use csv[0].ProductName
             expect(productName).to.equal(actualProductCSV)

    })
})
})