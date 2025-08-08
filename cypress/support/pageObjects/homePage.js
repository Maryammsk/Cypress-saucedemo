class HomePage {
  getTitle() {
    return cy.contains('Products');
  }

  getProductList() {
    return cy.get('.inventory_item');
  }

  selectFirstProduct() {
    return cy.get('.inventory_item').first().find('a').click();
  }
}

export default HomePage;
