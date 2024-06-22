import IssueDetailsPage from "../pageObject/IssueDetails.page";
import ConfirmIssueDeletePage from "../pageObject/confirmIssueDelete.page";
import ConfirmIssueDeleteActions from "../../e2e/actions/confirmIssueDeleteActions";
import IssuesListActions from "../../e2e/actions/issuesListActions";
import Actions from "../../e2e/actions/actions";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

  When("Clicks the Delete button", () => {
    IssueDetailsPage.deleteIssueButton.click();
  });

  When("Confirms deleting the issue by clicking on the Delete Issues button", () => {
    ConfirmIssueDeletePage.deleteIssuesButton.click();
  });

  When("Save the issue number", () => {
    ConfirmIssueDeleteActions.saveIssueNumber();
  });

  Then("The user is in the list of all issues", () => {
    Actions.verifyListOfAllIssuesUrl();
  });

  When("The deleted issue is not displayed in the list", () => {
    IssuesListActions.verifyRemovedIssueInList();
  });