import IssueDetailsPage from "../pageObject/IssueDetails.page";
import CloseIssuePage from "../pageObject/closeIssue.page";
import CloseIssueActions from "../../e2e/actions/closeIssueActions";
import Actions from "../../e2e/actions/actions"
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


  When("Selects {string} in the resolution dropdown", (resolution) => {
    CloseIssueActions.selectResolutionInDropdown(resolution);
  });

  When("Selects {string} in the assigned to dropdown", (assignedTo) => {
    CloseIssueActions.selectAssignedToInDropdown(assignedTo);
  });

  When("Writes {string} in the Add Note text area", (note) => {
    CloseIssueActions.addTextToAddNoteTextArea(note);
  });

  When("Clicks the Close button", () => {
    IssueDetailsPage.closeIssueButton.click();
  });

  Then("The user is in the issue details of the closed issue", () => {
    Actions.verifyViewIssueUrl();
  });

  When("The issue status label is {string}", (statusLabel) => {
    CloseIssueActions.verifyIssueStatusLabel(statusLabel);
  });

  When("The resolution label is {string}", (resolutionLabel) => {
    CloseIssueActions.verifyIssueResolutionLabel(resolutionLabel);
  });

  When("The issue contains the note {string}", (note) => {
    CloseIssueActions.verifyIssueNoteLabel(note);
  });

  When("Clicks the Close Issue button", () => {
    CloseIssuePage.closeIssueButton.click();
  });

  When("The user is redirected to the dashboard panel", () => {
    Actions.redirectToDashboardPanel();
  });

  When("Enters {string} in the Duplicate ID field", (duplicateId) => {
    CloseIssueActions.enterDuplicateIdToDuplicateIdInput(duplicateId);
  });

  When("Invalid ID message is displayed", () => {
    CloseIssueActions.invalidDuplicateIdMessageIsDisplayed();
  });