describe('Registration Test', () => {
    it('Existent registration test', () => {
        cy.fixture('register').then(data => {
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


    it('None existent login registration test', () => {
        cy.fixture('register').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)

            cy.log('Не подходящий логин')
            cy.get('div[class="form__labels"] input:first').type(data.none_existent_login)

            cy.wait(1000)

            cy.log('Вывод ошибки')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
        })
    })

    it('None existent email registration test', () => {
        cy.fixture('register').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)

            cy.log('Подходящий логин')
            cy.get('div[class="form__labels"] input:first').type(data.login)

            cy.log('Не подходящая почта')
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').type(data.none_existent_email)

            cy.wait(1000)

            cy.log('Вывод ошибки')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
        })
    })

    it('None existent password registration test', () => {
        cy.fixture('register').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)

            cy.log('Подходящий логин')
            cy.get('div[class="form__labels"] input:first').type(data.login)

            cy.log('Подходящая почта')
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').type(data.email)

            cy.log('Неподходящий пароль')
            cy.get('div[class="form__labels"] div:first div:nth-child(3) input').type(data.none_existent_password)

            cy.wait(1000)

            cy.log('Вывод ошибки')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
        })
    })

    it('None existent confirm password registration test', () => {
        cy.fixture('register').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)

            cy.log('Подходящий логин')
            cy.get('div[class="form__labels"] input:first').type(data.login)

            cy.log('Подходящая почта')
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').type(data.email)

            cy.log('Подходящий пароль')
            cy.get('div[class="form__labels"] div:first div:nth-child(3) input').type(data.password)

            cy.log('Не верный повтор пароля')
            cy.get('div[class="form__labels"] div:first div:nth-child(4) input').type(data.none_existent_confirm_password)

            cy.wait(1000)

            cy.log('Вывод ошибки')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
        })
    })

    it('None existent confirm surname registration test', () => {
        cy.fixture('register').then(data => {
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

            cy.log('Непдходящяя фамилия')
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input').type(data.none_existent_surname)

            cy.wait(1000)

            cy.log('Вывод ошибки')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')


        })
    })
})
