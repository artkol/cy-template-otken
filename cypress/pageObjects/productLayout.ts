class productLayout {
  checkProductTitle(title) {
    cy.get('.product-layout a img').should('have.attr', 'title', title)
  }
}

export default new productLayout()
