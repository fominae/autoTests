describe('Requirement Test Students', () => {
    it('Test requirement', () => {
        cy.fixture('requirement').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Существующий логин')
            cy.get('input[class="form-input--text form-input"]').type(data.login_students)

            cy.log('Существующий пароль')
            cy.get('input[class="form-input--password form-input"]').type(data.password_students)

            cy.log('Клик по кнопке "Войти"')
            cy.get('.button__background-color-green').click()

            cy.wait(3000)

            cy.log('Клик по ссылку "Потребности"')
            cy.get('nav[class="header__nav"] a:nth-child(2)').click()

            cy.wait(3000)

            cy.get('.need-item--approved').find('.button__background-color-green') // Находим кнопку отклика
                .not('[disabled]') // Фильтруем только активные кнопки
                .first() // Берем первую активную кнопку
                .click()

            cy.wait(3000)
        })
    })
})