import ConfirmIssueDeletePage from "../../support/pageObject/confirmIssueDelete.page";
import StoreContent from "../../support/pageObjectContent/storeContent";

const ConfirmIssueDeleteActions = {
    saveIssueNumber() {
        const issueNumberLinkLocator = ConfirmIssueDeletePage.issueNumberLink;
        StoreContent.saveText(issueNumberLinkLocator, "issueNumber");
    }
};

export default ConfirmIssueDeleteActions;