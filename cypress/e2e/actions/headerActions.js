import Header from "../../support/pageObject/header.page";

const HeaderActions = {
    openAccountOptionMenu() {
        Header.accountOptionsDropdown.click();
    },

    selectMyAccountOptionOfAccountOptionMenu() {
        Header.myAccountOptionLink.click();
    }

};

export default HeaderActions;