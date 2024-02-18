export class ManagerPage {
  public getHomeButton() {
    return cy.get(".home");
  }
  
  // add customer methods
  public getAddCustomerMenuButton() {
    return cy.get(".border > .center:nth-child(1) > .btn:nth-child(1)");
  }

  public getFirstNameInput() {
    return cy.get(":nth-child(1) > .form-control");
  }

  public getLastNameInput() {
    return cy.get(":nth-child(2) > .form-control");
  }

  public getPostCodeInput() {
    return cy.get(":nth-child(3) > .form-control");
  }

  public getAddCustomerButton() {
    return cy.get("form.ng-dirty > .btn");
  }

  public getCustomersMenuButton() {
    return cy.get(".border > .center:nth-child(1) > .btn:nth-child(3)");
  }

  public getSearchCustomerInput() {
    return cy.get(".form-group > .input-group > .form-control");
  }

  public getCustomersTableBody() {
    return cy.get(".table > tbody");
  }

  public getDeleteCustomerButton() {
    return cy.get(":nth-child(5) > button");
  }
  public getUserSelect() {
    return cy.get("#userSelect");
  }

  // open account methods
  public getOpenAccountMenuButton() {
    return cy.get(".border > .center:nth-child(1) > .btn:nth-child(2)");
  }

  public getCurrencySelect() {
    return cy.get("#currency");
  }

  public getProcessButton() {
    return cy.get("[type=submit]");
  }

  public getCurrency() {
    return cy.get(".borderM > :nth-child(3) > :nth-child(3)");
  }

  public getCurrencyValueLabel() {
    return cy.get(".borderM > :nth-child(3) > :nth-child(3)");
  }
  public getTableBodyRowCell(rowIndex, cellIndex) {
    return cy.get(
      `.table > tbody > tr:nth-child(${rowIndex}) > td:nth-child(${cellIndex})`
    );
  }
}
