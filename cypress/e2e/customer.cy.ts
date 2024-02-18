import { HelperMethods } from '../util/helper-methods';

const moment = require('moment');

const { HomePage } = require('../pages/home.po');

describe('Customer', () => {
  beforeEach(function () {
    HelperMethods.testSetup();
  });

  it('should confirm that the transaction is populated and the account balance changes after a successful deposit', () => {
    // arrange
    const currentDate = moment().format('YYYY-MM-DDTHH:mm');
    const currentFormattedDate = moment().format('MMM DD, YYYY');

    // act
    const customersPage = new HomePage().goToCustomerPage();

    // assert
    customersPage.getUserSelect().select(1);
    customersPage.getUserSelectButton().click();
    customersPage.getAccountSelect().select(0);
    customersPage.getBalance().should('be.visible');
    customersPage.getBalanceAmount().should('have.text', '5096');
    customersPage.getMenuTransactionButton().click();
    customersPage.getTransactionsStartDate().type(currentDate);
    customersPage
      .getTransactionsTableBody()
      .find('tr')
      .should('have.length', 0);
    customersPage.getBackButton().click();
    customersPage.getDepositMenuButton().click();
    customersPage.getAmountInput().type(100);
    customersPage.getDepositButton().click();
    customersPage
      .getDepositSuccesfulMessage()
      .should('have.text', 'Deposit Successful');
    customersPage.getBalanceAmount().should('have.text', '5196');

    // the following wait is used to make sure the table data loaded correctly
    cy.wait(1000);

    customersPage.getMenuTransactionButton().click();
    customersPage.getTransactionsStartDate().type(currentDate);
    customersPage
      .getTransactionsTableBody()
      .find('tr')
      .should('have.length', 1);
    customersPage
      .getTableBodyRowCell(1, 1)
      .should('contain.text', currentFormattedDate);
    customersPage.getTableBodyRowCell(1, 2).should('have.text', 100);
    customersPage.getTableBodyRowCell(1, 3).should('have.text', 'Credit');
  });

  it('should confirm that the transaction is populated and the account balance changes after a successful withdraw', () => {
    // arrange
    const currentDate = moment().format('YYYY-MM-DDTHH:mm');
    const currentFormattedDate = moment().format('MMM DD, YYYY');

    // act
    const customersPage = new HomePage().goToCustomerPage();

    // assert
    customersPage.getUserSelect().select(1);
    customersPage.getUserSelectButton().click();
    customersPage.getAccountSelect().select(0);
    customersPage.getBalance().should('be.visible');
    customersPage.getBalanceAmount().should('have.text', '5096');
    customersPage.getMenuTransactionButton().click();
    customersPage.getTransactionsStartDate().type(currentDate);
    customersPage
      .getTransactionsTableBody()
      .find('tr')
      .should('have.length', 0);
    customersPage.getBackButton().click();
    customersPage.getMenuWithdrawnButton().click();
    customersPage.getAmountInput().type(100);
    customersPage.getWithdrawnlButton().click();
    customersPage
      .getWithdrawnSuccesfulMessage()
      .should('have.text', 'Transaction successful');
    customersPage.getBalanceAmount().should('have.text', '4996');

    // the following wait is used to make sure the table data loaded correctly
    cy.wait(1000);

    customersPage.getMenuTransactionButton().click();
    customersPage.getTransactionsStartDate().type(currentDate);
    customersPage
      .getTransactionsTableBody()
      .find('tr')
      .should('have.length', 1);
    customersPage
      .getTableBodyRowCell(1, 1)
      .should('contain.text', currentFormattedDate);
    customersPage.getTableBodyRowCell(1, 2).should('have.text', 100);
    customersPage.getTableBodyRowCell(1, 3).should('have.text', 'Debit');
  });

  it('should display error message when the balance is lower than the amount the user wants to withdrawn ', () => {
    // arrange
    const currentDate = moment().format('YYYY-MM-DDTHH:mm');

    // act
    const customersPage = new HomePage().goToCustomerPage();

    // assert
    customersPage.getUserSelect().select(1);
    customersPage.getUserSelectButton().click();
    customersPage.getAccountSelect().select(0);
    customersPage.getBalance().should('be.visible');
    customersPage.getBalanceAmount().should('have.text', '5096');
    customersPage.getMenuTransactionButton().click();
    customersPage
      .getTransactionsTableBody()
      .find('tr')
      .should('have.length.gt', 0);
    customersPage.getBackButton().click();
    customersPage.getMenuWithdrawnButton().click();
    customersPage.getAmountInput().type('10000');
    customersPage.getWithdrawnlButton().click();
    customersPage
      .getWithdrawnErrorMessage()
      .should(
        'have.text',
        'Transaction Failed. You can not withdraw amount more than the balance.'
      );
    customersPage.getBalanceAmount().should('have.text', '5096');
    customersPage.getMenuTransactionButton().click();
    customersPage.getTransactionsStartDate().type(currentDate);
    customersPage
      .getTransactionsTableBody()
      .find('tr')
      .should('have.length', 0);
  });

  it('should reset all transactions ', () => {
    // arrange
    const currentDate = moment().format('YYYY-MM-DDTHH:mm');

    // act
    const customersPage = new HomePage().goToCustomerPage();

    // assert
    customersPage.getUserSelect().select(1);
    customersPage.getUserSelectButton().click();
    customersPage.getAccountSelect().select(0);
    customersPage.getBalance().should('be.visible');
    customersPage.getBalanceAmount().should('have.text', '5096');
    customersPage.getMenuTransactionButton().click();
    customersPage
      .getTransactionsTableBody()
      .find('tr')
      .should('have.length.gt', 0);
    customersPage.getBackButton().click();
    customersPage.getDepositMenuButton().click();
    customersPage.getAmountInput().type(100);
    customersPage.getDepositButton().click();

    // the following wait is used to make sure the table data loaded correctly
    cy.wait(1000);

    customersPage.getMenuTransactionButton().click();
    customersPage.getTransactionsStartDate().type(currentDate);
    customersPage
      .getTransactionsTableBody()
      .find('tr')
      .should('have.length', 1);
    customersPage.getResetButton().click();
    customersPage
      .getTransactionsTableBody()
      .find('tr')
      .should('have.length', 0);
  });

  it('should logout user account ', () => {
    // act
    const customersPage = new HomePage().goToCustomerPage();

    // assert
    customersPage.getUserSelect().select(1);
    customersPage.getUserSelectButton().click();
    customersPage.getLogoutButton().click();
    customersPage.getCustomerNameLabel().should('have.text', 'Your Name :');
  });
});
