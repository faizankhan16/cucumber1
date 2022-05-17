import selectors from "../../fixtures/selectors.json"
class ChangePassword {
    
    changePass (oldPass, newPass) {
    cy.get(selectors.dropDown).contains(/.+settings.+/i).click({force: true})
    cy.get(selectors.oldPassword).type(oldPass).should('have.value', oldPass)
    cy.get(selectors.newPassword).type(newPass).should('have.value', newPass)
    cy.get(selectors.confirmNewPass).type(newPass).should('have.value', newPass)
    cy.get(selectors.saveNewPass).click()
}
}

export default ChangePassword