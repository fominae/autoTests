describe('Requirement Test', () => {
    it('Test requirement', () => {
        cy.fixture('requirement').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Существующий логин')
            cy.get('input[class="form-input--text form-input"]').type(data.login)

            cy.log('Существующий пароль')
            cy.get('input[class="form-input--password form-input"]').type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get('.button__background-color-green').click()

            cy.log('Клик по ссылку "Потребности"')
            cy.get('div[class="page-navigation"] div:first div:nth-child(6) p').click()

            cy.log('Клик по ссылку "Создать потребность"')
            cy.get('div[class="needs-block__content"] div:first button[type="submit"]').click()

            cy.log('Подходящее название потребности')
            cy.get('.desktop-modal .labels .label:first div input').type(data.name)

        })
    })

})