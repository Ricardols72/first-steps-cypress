class MyInfoPage {

    selectorList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            selectorNationality: "['.oxd-select-wrapper']",
            genericComboBox: ".oxd-select-text--arrow",
            secondItemComboBox: ".oxd-select-dropdown > :nth-child(2)",
            thirdItemComboBox: ".oxd-select-dropdown > :nth-child(3)",
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName) {

        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
       // cy.get(this.selectorList().genericField).eq(3).clear().type(nickName)
    }

    fillEmployeeDetails(employeeId, otherId, driverLicenseNumber, expiredDate, birthDate) {
        
        cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(driverLicenseNumber)
        cy.get(this.selectorList().genericField).eq(6).clear().type(expiredDate)
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().genericField).eq(7).clear().type(birthDate)
        //cy.get(this.selectorList().genericField).eq(8).clear().type(sinNumber)

    }

    saveForm() {

        cy.get(this.selectorList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus() {

        cy.get(this.selectorList().genericComboBox).eq(0).click({ force: true })
        cy.get(this.selectorList().secondItemComboBox).click()
        cy.get(this.selectorList().genericComboBox).eq(1).click({ force: true })
        cy.get(this.selectorList().thirdItemComboBox).click()
    }
}

export default MyInfoPage