import header from '../pageObjects/header'
import basePage from '../pageObjects/basePage'
import productLayout from '../pageObjects/productLayout'

describe('checking search suite', () => {
  before(() => {
    cy.visit('https://demo.opencart.com/')
  })
  it('should search for an item', () => {
    header.typeInSearch('IPhone')
    header.clickSearchButton()
    productLayout.checkProductTitle('iPhone')
    basePage.checkText('Products meeting the search criteria', 'h2')
    header.clearSearch()
  })

  it('should have message `not found` when no product', () => {
    header.typeInSearch('noProduct')
    header.clickSearchButton()
    basePage.checkText('There is no product that matches the search criteria.', 'p')
  })
})
