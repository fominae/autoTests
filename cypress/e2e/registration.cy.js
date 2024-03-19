describe('Registration Test', () => {
    it('Existent registration test', () => {
        cy.fixture('registration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)

            cy.log('Подходящий логин')
            cy.get('div[class="form__labels"] input:first').type(data.login)

            cy.log('Подходящая почта')
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').type(data.email)

            cy.log('Подходящий пароль')
            cy.get('div[class="form__labels"] div:first div:nth-child(3) input').type(data.password)

            cy.log('Верный повтор пароля')
            cy.get('div[class="form__labels"] div:first div:nth-child(4) input').type(data.confirm_password)

            cy.log('Клик по кнопке "Далее"')
            cy.get('div[class="form__buttons"] div:last button[type="submit"]').click()
        })
    })

})