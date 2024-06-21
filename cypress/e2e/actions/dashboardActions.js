import DashboardPage from "../../support/pageObject/dashboard.page";

const DashboardActions = {
    clickFirstIssueOnDashboard() {
        DashboardPage.issueLink.first().click();
    },

    clickLastIssueOnDashboard() {
        DashboardPage.issueLink.last().click();
    }

};

export default DashboardActions;