class BasePage {
  checkText(query, element) {
    cy.get(`#content ${element}`).should('contain', query)
  }
}

export default new BasePage()
