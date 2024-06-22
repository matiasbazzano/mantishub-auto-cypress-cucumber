import IssuesListPage from "../../support/pageObject/issuesList.page"
import StoreContent from "../../support/pageObjectContent/storeContent";

const IssuesListActions = {
    verifyRemovedIssueInList() {
        const issueNumber = StoreContent.getVariable("issueNumber");
        IssuesListPage.getIssueLinkByNumber(issueNumber).should('not.exist');
    }
};

export default IssuesListActions;