import ViewAllIssuesActions from "../../e2e/actions/viewAllIssuesActions";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("The user clicks the View Issues button in the left sidebar", () => {
    ViewAllIssuesActions.clickViewAllIssuesButtonInLeftSidebar();
  });

When("Clicks the Print Reports button", () => {
    ViewAllIssuesActions.clickPrintReportsButton();
  });

Then("The user is in the print all bug page", () => {
    ViewAllIssuesActions.verifyPrintReportsOfProjectUrl();
  });

When("Clicks the Summary button", () => {
    ViewAllIssuesActions.clickSummaryButton();
  });

Then("The user is the project summary page", () => {
    ViewAllIssuesActions.verifySummaryOfProjectUrl();
  });