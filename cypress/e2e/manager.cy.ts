import { HelperMethods } from '../util/helper-methods';

const { HomePage } = require('../pages/home.po');

describe('Manager', () => {
  beforeEach(function () {
    HelperMethods.testSetup();
  });

  it('should add customer ', () => {
    // act
    const managerPage = new HomePage().goBankManagerPage();

    // assert
    managerPage.getAddCustomerMenuButton().click();
    managerPage.getFirstNameInput().type('Maria');
    managerPage.getLastNameInput().type('Araya');
    managerPage.getPostCodeInput().type('30101');
    managerPage.getAddCustomerButton().click();
    managerPage.getCustomersMenuButton().click();
    managerPage.getSearchCustomerInput().type('Maria');
    managerPage.getCustomersTableBody().find('tr').should('have.length', 1);
    managerPage.getTableBodyRowCell(1, 1).should('have.text', 'Maria');
    managerPage.getTableBodyRowCell(1, 2).should('have.text', 'Araya');
    managerPage.getTableBodyRowCell(1, 3).should('have.text', '30101');
    managerPage.getTableBodyRowCell(1, 4).should('have.text', '');
    managerPage.getTableBodyRowCell(1, 5).find('button').should('be.visible');
    managerPage
      .getTableBodyRowCell(1, 5)
      .find('button')
      .should('have.text', 'Delete');
  });

  it('should delete customer ', () => {
    // act
    const managerPage = new HomePage().goBankManagerPage();

    // assert
    managerPage.getAddCustomerMenuButton().click();
    managerPage.getFirstNameInput().type('Maria');
    managerPage.getLastNameInput().type('Araya');
    managerPage.getPostCodeInput().type('30101');
    managerPage.getAddCustomerButton().click();
    managerPage.getCustomersMenuButton().click();
    managerPage.getSearchCustomerInput().type('Maria');
    managerPage.getCustomersTableBody().find('tr').should('have.length', 1);
    managerPage.getTableBodyRowCell(1, 1).should('have.text', 'Maria');
    managerPage.getTableBodyRowCell(1, 2).should('have.text', 'Araya');
    managerPage.getTableBodyRowCell(1, 3).should('have.text', '30101');
    managerPage.getTableBodyRowCell(1, 4).should('have.text', '');
    managerPage.getTableBodyRowCell(1, 5).find('button').should('be.visible');
    managerPage
      .getTableBodyRowCell(1, 5)
      .find('button')
      .should('have.text', 'Delete');
    managerPage.getDeleteCustomerButton().click();
    managerPage.getSearchCustomerInput().clear();
    managerPage.getSearchCustomerInput().type('Maria');
    managerPage.getCustomersTableBody().find('tr').should('have.length', 0);
  });

  it('should open account for new customer ', () => {
    // act
    const managerPage = new HomePage().goBankManagerPage();

    //assert
    managerPage.getAddCustomerMenuButton().click();
    managerPage.getFirstNameInput().type('Maria');
    managerPage.getLastNameInput().type('Araya');
    managerPage.getPostCodeInput().type('30101');
    managerPage.getAddCustomerButton().click();
    managerPage.getCustomersMenuButton().click();
    managerPage.getSearchCustomerInput().type('Maria');
    managerPage.getCustomersTableBody().find('tr').should('have.length', 1);
    managerPage.getTableBodyRowCell(1, 1).should('have.text', 'Maria');
    managerPage.getTableBodyRowCell(1, 2).should('have.text', 'Araya');
    managerPage.getTableBodyRowCell(1, 3).should('have.text', '30101');
    managerPage.getTableBodyRowCell(1, 4).should('have.text', '');
    managerPage.getTableBodyRowCell(1, 5).find('button').should('be.visible');
    managerPage
      .getTableBodyRowCell(1, 5)
      .find('button')
      .should('have.text', 'Delete');

    managerPage.getOpenAccountMenuButton().click();
    managerPage.getUserSelect().select(6);
    managerPage.getCurrencySelect().select(1);
    managerPage.getProcessButton().click();

    managerPage.getCustomersMenuButton().click();
    managerPage.getSearchCustomerInput().type('Maria');
    managerPage.getCustomersTableBody().find('tr').should('have.length', 1);
    managerPage.getTableBodyRowCell(1, 1).should('have.text', 'Maria');
    managerPage.getTableBodyRowCell(1, 2).should('have.text', 'Araya');
    managerPage.getTableBodyRowCell(1, 3).should('have.text', '30101');
    managerPage.getTableBodyRowCell(1, 4).should('not.have.text', '');
    managerPage.getTableBodyRowCell(1, 5).find('button').should('be.visible');
    managerPage
      .getTableBodyRowCell(1, 5)
      .find('button')
      .should('have.text', 'Delete');
  });

  it('should search customer by name or by lastname ', () => {
    // act
    const managerPage = new HomePage().goBankManagerPage();

    // assert
    managerPage.getCustomersMenuButton().click();
    managerPage.getSearchCustomerInput().type('Hermoine');
    managerPage.getSearchCustomerInput().clear();
    managerPage.getSearchCustomerInput().type('Granger');
    managerPage.getCustomersTableBody().find('tr').should('have.length', 1);
    managerPage.getTableBodyRowCell(1, 1).should('have.text', 'Hermoine');
    managerPage.getTableBodyRowCell(1, 2).should('have.text', 'Granger');
    managerPage.getHomeButton().click();
  });

});
