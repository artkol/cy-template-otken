class Header {
  typeInSearch(query) {
    cy.get('#search input').type(query)
  }
  clearSearch() {
    cy.get('#search input').clear()
  }
  clickSearchButton() {
    cy.get('#search button').click()
  }
}

export default new Header()
