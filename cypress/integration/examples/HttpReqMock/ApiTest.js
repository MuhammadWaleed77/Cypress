
describe ('My Api test', function(){
    it('APi', function(){

        //cy.request('POST',url,body) //https://docs.cypress.io/api/commands/request
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
            "name":"Learn Appium Automation with Java",
            "isbn":"bcd",
            "aisle":"227",
            "author":"John foe"

        }).then(function(responce){   //get server responce after api hits and apply assertion 
            expect(responce.body).to.have.property("Msg","successfully added")  //https://docs.cypress.io/api/commands/request#Command-Log
            expect(response.status).to.eq(200)
    })
    })
})