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

    it('can not respond to a need', () => {
        cy.fixture('requirement').then(data => {
            cy.log("Переход на страницу авторизации")
            cy.visit(data.main_url)

            cy.log("Ввод существующего логина")
            cy.get('input[class="form-input--text form-input"]').type(data.student_login)

            cy.log('Ввод существующего пароля')
            cy.get('input[class="form-input--password form-input"]').type(data.student_password)

            cy.log("Клик по кнопке 'Войти' ")
            cy.get('.button__background-color-green').click()
            cy.wait(2000)

            cy.log("Выбор пункта меню 'Потребности' ")
            cy.get('nav[class="header__nav"] a:nth-child(2)').click()
            cy.wait(2000)


            cy.get('.need-item--approved').each(($needItem) => {
                cy.wrap($needItem).within(() => {
                    cy.get('.button__background-color-light-blue').should('be.disabled');
                });
            });
        })
    })

    it('Viewing notifications', () => {
        cy.fixture('requirement').then(data => {
            cy.log("Переход на страницу авторизации")
            cy.visit(data.main_url)

            cy.log("Ввод существующего логина")
            cy.get('input[class="form-input--text form-input"]').type(data.login_students)

            cy.log('Ввод существующего пароля')
            cy.get('input[class="form-input--password form-input"]').type(data.password_students)

            cy.log("Клик по кнопке 'Войти' ")
            cy.get('.button__background-color-green').click()
            cy.wait(2000)

            cy.log("Выбор пункта меню 'Уведомления' ")
            cy.get('nav[class="header__nav"] a:nth-child(4)').click()
            cy.wait(2000)

            cy.get('div.notification-list-wrapper').first().find('button[type="submit"]').click()

            cy.wait(2000)

        })
    })
})