import DashboardActions from "../../e2e/actions/dashboardActions";
import IssueDetailsPage from "../pageObject/IssueDetails.page";
import IssueDetailsActions from "../../e2e/actions/issueDetailsActions";
import ReportIssueActions from "../../e2e/actions/reportIssueActions";
import Actions from "../../e2e/actions/actions";
import StoreContent from "../pageObjectContent/storeContent";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

  When("Clicks the first reported issue on the dashboard", () => {
    DashboardActions.clickFirstIssueOnDashboard();
  });

  When("Clicks the last reported issue on the dashboard", () => {
    DashboardActions.clickLastIssueOnDashboard();
  });

  When("The user is in the issue details of the reported issue", () => {
    Actions.verifyViewIssueUrl();
  });

  When("Saves the data of the displayed issue", () => {
    IssueDetailsActions.saveIssueDetailsDisplayed();
  });

  When("Saves the copied data to clone", () => {
    ReportIssueActions.saveCopiedIssueDetailsToClone();
  });

  When("Clicks the Clone button", () => {
    IssueDetailsPage.cloneIssueButton.click();
  });

  When("Check if all the issue data has been copied to the new issue to be created", () => {
    ReportIssueActions.compareTheCopiedIssueDetailsToClone();
  });

  When("The cloned issue contains the same information as the previous one", () => {
    IssueDetailsActions.saveClonedIssueDetailsDisplayed();
    IssueDetailsActions.compareClonedIssueDetails();
  });

  When("The saved data is removed", () => {
    StoreContent.clearVariables();
  });
