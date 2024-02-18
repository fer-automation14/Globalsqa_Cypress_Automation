import { CustomerPage } from "./customer.po";
import { ManagerPage } from "./manager.po";

export class HomePage {
  public getHomeButton() {
    return cy.get(".home");
  }

  public goToCustomerPage() {
    cy.get(".borderM > :nth-child(1) > .btn").click();
    return new CustomerPage();
  }

  public goBankManagerPage() {
    cy.get(":nth-child(3) > .btn").click();
    return new ManagerPage();
  }
}
