describe('Login Test', () => {
  it('Existent login test', () => {
    cy.fixture('login_test').then(data => {
      cy.log('Переход на страницу авторизации')
      cy.visit(data.main_url)

      cy.log('Существующий логин')
      cy.get('input[class="form-input--text form-input"]').type(data.login)

      cy.log('Существующий пароль')
      cy.get('input[class="form-input--password form-input"]').type(data.password)

      cy.log('Клик по кнопке "Войти"')
      cy.get('div[class="login-form__button"] button[type="submit"]').click()

    })
  })
})