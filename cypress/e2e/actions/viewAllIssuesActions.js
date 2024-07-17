import ViewAllIssuesPage from "../../support/pageObject/viewAllIssues.page";
import LeftSidebar from "../../support/pageObject/leftSideBar.page"
import DeepUrl from "../../data/deepUrl";

const ViewAllIssuesActions = {
    clickViewAllIssuesButtonInLeftSidebar() {
        LeftSidebar.viewIssuesButton.click();
    },

    clickPrintReportsButton() {
        ViewAllIssuesPage.printReportsButton.click();
    },

    clickCsvExportButton() {
        ViewAllIssuesPage.csvExportButton.click();
    },

    clickExcelExportButton() {
        ViewAllIssuesPage.excelExportButton.click();
    },

    clickSummaryButton() {
        ViewAllIssuesPage.summaryButton.click();
    },

    verifyPrintReportsOfProjectUrl() {
        cy.url().should("include", DeepUrl.printReportsOfProject);
    },

    verifySummaryOfProjectUrl() {
        cy.url().should("include", DeepUrl.summaryOfProject);
    }
};

export default ViewAllIssuesActions;