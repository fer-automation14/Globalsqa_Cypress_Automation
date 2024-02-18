export class CustomerPage {
  public getUserSelect() {
    return cy.get("#userSelect");
  }

  public getUserSelectButton() {
    return cy.get(".btn-default");
  }

  public getAccountSelect() {
    return cy.get("#accountSelect");
  }

  public getBalance() {
    return cy.get(".borderM > :nth-child(3) > :nth-child(2)");
  }

  public getBalanceAmount() {
    return cy.get(".borderM > :nth-child(3) > :nth-child(2)");
  }

  public getMenuTransactionButton() {
    return cy.get(".borderM > .center:nth-child(5) > .btn:nth-child(1)");
  }

  public getTransactionsStartDate() {
    return cy.get("#start");
  }

  public getTransactionsTableBody() {
    return cy.get(".table > tbody");
  }

  public getTableBodyRowCell(rowIndex, cellIndex) {
    return cy.get(
      `.table > tbody > tr:nth-child(${rowIndex}) > td:nth-child(${cellIndex})`
    );
  }

  public getBackButton() {
    return cy.get('.fixedTopBox > [style="float:left"]');
  }

  public getDepositMenuButton() {
    return cy.get(".borderM > .center:nth-child(5) > .btn:nth-child(2)");
  }

  public getAmountInput() {
    return cy.get(".form-control");
  }

  public getDepositButton() {
    return cy.get(".btn-default");
  }

  public getDepositSuccesfulMessage() {
    return cy.get(".error");
  }

  public getMenuWithdrawnButton() {
    return cy.get(".borderM > .center:nth-child(5) > .btn:nth-child(3)");
  }

  public getWithdrawnlButton() {
    return cy.get(".btn-default");
  }

  public getWithdrawnSuccesfulMessage() {
    return cy.get(".error");
  }

  public getWithdrawnErrorMessage() {
    return cy.get(".error");
  }

  public getResetButton() {
    return cy.get('[style="float:right;margin-top:-30px;"]');
  }

  public getLogoutButton() {
    return cy.get(".logout");
  }

  public getCustomerNameLabel() {
    return cy.get("label");
  }
}
