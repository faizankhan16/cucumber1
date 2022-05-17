import signIn from "../../support/page_objects/signIn.js"
import signOut from "../../support/page_objects/signOut.js"
import changePassword from "../../support/page_objects/changePassword.js"
import credential from "../../fixtures/credential.json"
import selectors from "../../fixtures/selectors.json"
const login = new signIn()
const logout = new signOut()
const chPass = new changePassword()

// describe('Samtrygg login with valid credentials', () => {
    Given('I am on the login page', () => {
        cy.visit('/')
        cy.get(selectors.language).click()
        cy.contains(/sign.in/i).click({force: true})
    })

    //The user is able to login with valid credentials
    When('I enter my', (datatable) => {
        datatable.hashes().forEach(element => {
            login.signIn(element.email, element.password)
        })
    })

    And('I click the login button', () => {
        cy.get(selectors.submitButton).click({force: true})
    })

    Then('I should be logged in', () => {
        cy.get('div[class="dash-content col medium-12 small-12"] a').should('contain', 'Choose time slots for viewings of your home')
    })

    When('I enter my', (datatable) => {
        datatable.hashes().forEach(element => {
            login.signIn(element.email, element.password)
        })
    })

    And('I click the login button', () => {
        cy.get(selectors.submitButton).click({force: true})
    })

    Then('I should not be logged in', () => {
        cy.get(selectors.incorrectLoginHeader).should('contain', 'The e-mail or password you filled in is incorrect')
    })


    When('I do not enter my credentials and I click the login button', () => {
        cy.get(selectors.submitButton).click({force: true})
    })

    Then('I should not be logged in', () => {
        cy.get(selectors.incorrectLoginHeader).should('contain', 'The e-mail or password you filled in is incorrect')
    })

    When('I click the forgot password link', () => {
        cy.get(selectors.forgotPass).should('contain', 'Forgot your password?').click()
    })

    Then('I should be on the forgot password page', () => {
        cy.get(selectors.forgotPassHeader).should('contain', 'Forgot password')
    })

    When('I enter my', (datatable) => {
        datatable.hashes().forEach(element => {
            login.signIn(element.email, element.password)
        })
    })

    And('I click the remember me checkbox', () => {
        cy.get(selectors.rememberMe).check({force: true}).should('be.checked')
        cy.get(selectors.submitButton).click({force: true})
    })

    Then('I should be logged in', () => {
        cy.get('div[class="dash-content col medium-12 small-12"] a').should('contain', 'Choose time slots for viewings of your home')
    })


    When('I enter my', (datatable) => {
        datatable.hashes().forEach(element => {
            login.signIn(element.email, element.password)
        })
    })

    And('I press the enter button', () => {
        cy.get(selectors.password).type('{enter}')
    })

    Then('I should be logged in', () => {
        cy.get('div[class="dash-content col medium-12 small-12"] a').should('contain', 'Choose time slots for viewings of your home')
    })

    When('I enter my', (datatable) =>{
        datatable.hashes().forEach(element => {
            Login.signIn(element.email, element.password)
        })
    })

    And('I click the login button', () => {
        cy.get(selectors.submitButton).click({force: true})
    })

    Then('I should not be logged in', () => {
        cy.get(selectors.incorrectLoginHeader).should('contain', 'The e-mail or password you filled in is incorrect')
    })

    When('I enter my', (datatable) =>{
        datatable.hashes().forEach(element => {
            Login.signIn(element.email, element.password)
        })
    })

    And('I click the login button', () => {
        cy.get(selectors.submitButton).click({force: true})
    })

    And('I change the password', (datatable) => {
        datatable.hashes().forEach(element => {
        chPass.changePass(element.oldpassword, element.newpassword)
    })
})

    And('I log out', () => {
        logout.signOut()
    })

    And('I login with the', (datatable) => {
        datatable.hashes().forEach(element => {
        login.signIn(element.email, element.newpassword)
    })
})

    Then('I should be logged in', () => {
    cy.get('div[class="dash-content col medium-12 small-12"] a').should('contain', 'Choose time slots for viewings of your home')
})