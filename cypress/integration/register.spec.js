import { registerPage } from '../page_objects/register.js'

const data = require("../fixtures/data.json")

describe("Registration test", () => {
    before (() => {
        cy.visit('/index.html')
        //cy.get(locators.register.navRegister).click()
    })

    /*it('Visit demoblaze page', () => {
        cy.visit('/')
    })*/

    it ("Visibility check", () => {
        cy.get('#signin2').should('be.visible')
    })

    it ("Status code check", () => {
        cy.request('https://www.demoblaze.com/index.html').then((response) => {
            expect(response.status).to.eq(200)
            /*expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')*/
        }) 
    })

    it ("Click on Sign up button", () => {
        registerPage.clickSignInButton.click()
    })

    it ("Successful registration", () => {
        registerPage.register(data.register.userName, data.register.password)
    })
    
})