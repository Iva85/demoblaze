import { registerPage } from '../page_objects/register.js'

const data = require("../fixtures/data.json")

describe("Registration test", () => {
    before (() => {
        cy.visit('/index.html')
    })

    it ("Visibility check", () => {
        cy.get('#signin2').should('be.visible')
    })

    it ("Status code check", () => {
        cy.request('https://www.demoblaze.com/index.html').then((response) => {
            expect(response.status).to.eq(200)
        }) 
    })

    it ("Click on Sign up button", () => {
        registerPage.clickSignInButton.click()
    })

    it ("Successful registration", () => {
        registerPage.register(data.register.userName, data.register.password)
    })
    
})