import ReportIssueActions from "../../e2e/actions/reportIssueActions";
import IssueDetailsActions from "../../e2e/actions/issueDetailsActions";
import Actions from "../../e2e/actions/actions"
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


  When("The user clicks the report issue button in the header", () => {
    ReportIssueActions.clickReportIssueButtonInHeader();
  });

  When("Selects {string} in the severity dropdown", (severity) => {
    ReportIssueActions.selectSeverityInDropdown(severity);
  });

  When("Selects {string} in the priority dropdown", (priority) => {
    ReportIssueActions.selectPriorityInDropdown(priority);
  });

  When("Selects {string} in the assign to dropdown", (assignToValue) => {
    ReportIssueActions.selectAssignToInDropdown(assignToValue);
  });

  When("Enters {string} in the summary text field", (summaryText) => {
    ReportIssueActions.fillSumaryTextField(summaryText);
  });

  When("Enters {string} in the description text area", (descriptionText) => {
    ReportIssueActions.fillDescriptionTextArea(descriptionText);
  });

  When("Marks the issue as public", () => {
    ReportIssueActions.markIssuePublic();
  });

  When("Marks the issue as private", () => {
    ReportIssueActions.markIssuePrivate();
  });

  When("Submits the issue clicking the Submit issue button", () => {
    ReportIssueActions.clickSubmitButton();
  });

  Then("The public issue is created correctly", () => {
    Actions.verifyViewIssueUrl();
    IssueDetailsActions.verifyPublicLabel();
  });

  Then("The private issue is created correctly", () => {
    Actions.verifyViewIssueUrl();
    IssueDetailsActions.verifyPrivateLabel();
  });

  Then("The public issue with image is created correctly", () => {
    Actions.verifyBugReportUrl();
    IssueDetailsActions.verifyPublicLabel();
  });

  Then("The private issue with image is created correctly", () => {
    Actions.verifyBugReportUrl();
    IssueDetailsActions.verifyPrivateLabel();
  });

  When("Uploads an image", () => {
    ReportIssueActions.uploadImage();
  });

  When("The image is attached correctly", () => {
    ReportIssueActions.verifyAttachedImage();
  })

  When("The image is uploaded correctly", () => {
    IssueDetailsActions.verifyUploadedImage();
  })