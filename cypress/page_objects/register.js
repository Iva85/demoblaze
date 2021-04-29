class RegisterPage {

    get clickSignInButton() {
        return cy.get("#signin2")
    }

    get userNameField() {
        return cy.get('#sign-username')
    }

    get passwordField() {
        return cy.get('#sign-password')
    }

    get signUpButton() {
        return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }

    register(user,pass) {
        this.userNameField.type(user)
        this.passwordField.type(pass)
        this.signUpButton.click()
    }

}

export const registerPage = new RegisterPage()