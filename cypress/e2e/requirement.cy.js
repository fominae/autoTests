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

            cy.log('Ввод обязанности')
            cy.get('.desktop-modal .labels .label:nth-child(3) div textarea').type(data.responsibilities)

            cy.log('Ввод требований')
            cy.get('.desktop-modal .labels .label:nth-child(4) div textarea').type(data.requirements)
        })
    })

    it('Test requirement negative', () => {
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
            cy.get('.desktop-modal .labels .label:first div input').clear()

            cy.wait(1000)

            cy.log('Вывод ошибки')
            cy.get('.desktop-modal .labels .label:first div:nth-child(2)').should('exist')

            cy.log('Ввод обязанности')
            cy.get('.desktop-modal .labels .label:nth-child(3) div textarea').type(data.responsibilities)
            cy.get('.desktop-modal .labels .label:nth-child(3) div textarea').clear()

            cy.wait(1000)

            cy.log('Вывод ошибки')
            cy.get('.desktop-modal .labels .label:nth-child(3) div:nth-child(2)').should('exist')

            cy.log('Ввод требований')
            cy.get('.desktop-modal .labels .label:nth-child(4) div textarea').type(data.requirements)
            cy.get('.desktop-modal .labels .label:nth-child(4) div textarea').clear()

            cy.wait(1000)

            cy.log('Вывод ошибки')
            cy.get('.desktop-modal .labels .label:nth-child(4) div:nth-child(2)').should('exist')
        })
    })

    it('Test requirement negative name', () => {
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
            cy.get('.desktop-modal .labels .label:first div input').clear()

            cy.wait(1000)

            cy.log('Вывод ошибки')
            cy.get('.desktop-modal .labels .label:first div:nth-child(2)').should('exist')

            cy.log('Ввод обязанности')
            cy.get('.desktop-modal .labels .label:nth-child(3) div textarea').type(data.responsibilities)

            cy.log('Ввод требований')
            cy.get('.desktop-modal .labels .label:nth-child(4) div textarea').type(data.requirements)

        })
    })

    it('Test requirement negative responsibilities', () => {
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

            cy.log('Ввод обязанности')
            cy.get('.desktop-modal .labels .label:nth-child(3) div textarea').type(data.responsibilities)
            cy.get('.desktop-modal .labels .label:nth-child(3) div textarea').clear()

            cy.wait(1000)

            cy.log('Вывод ошибки')
            cy.get('.desktop-modal .labels .label:nth-child(3) div:nth-child(2)').should('exist')

            cy.log('Ввод требований')
            cy.get('.desktop-modal .labels .label:nth-child(4) div textarea').type(data.requirements)

        })
    })

    it('Test requirement negative requirements', () => {
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

            cy.log('Ввод обязанности')
            cy.get('.desktop-modal .labels .label:nth-child(3) div textarea').type(data.responsibilities)

            cy.log('Ввод требований')
            cy.get('.desktop-modal .labels .label:nth-child(4) div textarea').type(data.requirements)
            cy.get('.desktop-modal .labels .label:nth-child(4) div textarea').clear()

            cy.wait(1000)

            cy.log('Вывод ошибки')
            cy.get('.desktop-modal .labels .label:nth-child(4) div:nth-child(2)').should('exist')
        })
    })
})

