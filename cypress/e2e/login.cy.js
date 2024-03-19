describe('Login Test', () => {
  it('Existent login and password test', () => {
    cy.fixture('login_test').then(data => {
      cy.log('Переход на страницу авторизации')
      cy.visit(data.main_url)

      cy.log('Существующий логин')
      cy.get('input[class="form-input--text form-input"]').type(data.login)

      cy.log('Существующий пароль')
      cy.get('input[class="form-input--password form-input"]').type(data.password)

      cy.log('Клик по кнопке "Войти"')
      cy.get('.button__background-color-green').click()
    })
  })

  it('None existent login and password test', () => {
    cy.fixture('login_test').then(data => {
      cy.log('Переход на страницу авторизации')
      cy.visit(data.main_url)

      cy.log('Не существующий логин')
      cy.get('input[class="form-input--text form-input"]').type(data.none_existent_login)

      cy.log('Не существующий пароль')
      cy.get('input[class="form-input--password form-input"]').type(data.none_existent_password)

      cy.log('Клик по кнопке "Войти"')
      cy.get('.button__background-color-green').click()

      cy.log('Вывод ошибки')
      cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
    })
  })

  it('None existent login test', () => {
    cy.fixture('login_test').then(data => {
      cy.log('Переход на страницу авторизации')
      cy.visit(data.main_url)

      cy.log('Не существующий логин')
      cy.get('input[class="form-input--text form-input"]').type(data.none_existent_login)

      cy.log('Существующий пароль')
      cy.get('input[class="form-input--password form-input"]').type(data.password)

      cy.log('Клик по кнопке "Войти"')
      cy.get('.button__background-color-green').click()

      cy.log('Вывод ошибки')
      cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
    })
  })
    it('None existent password test', () => {
      cy.fixture('login_test').then(data => {
        cy.log('Переход на страницу авторизации')
        cy.visit(data.main_url)

        cy.log('Существующий логин')
        cy.get('input[class="form-input--text form-input"]').type(data.login)

        cy.log('Не существующий пароль')
        cy.get('input[class="form-input--password form-input"]').type(data.none_existent_password)

        cy.log('Клик по кнопке "Войти"')
        cy.get('.button__background-color-green').click()

        cy.log('Вывод ошибки')
        cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
      })
    })
})


