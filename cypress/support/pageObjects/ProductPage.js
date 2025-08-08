class ProductPage {
    getProductTitle() {
        return cy.get('.inventory_details_name');
    }
}

export default new ProductPage();
