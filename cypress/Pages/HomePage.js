import Page from "./Page";

const BTN_ACCEPT_COOKIE = "#sp-cc-accept";
const TAB_ALL = ".hm-icon-label";
const MENU_BEST_SALE = "div#hmenu-content > ul:nth-child(1) > li:nth-child(2)";

class HomePage extends Page{

    static visit(){
        cy.visit('/');
    }

    static handleCookie(){
        cy.get(BTN_ACCEPT_COOKIE).click();
    }

    static clickOnTabAll(){
        this.clickOn(TAB_ALL);
    }

    static clickOnTabBestSale(){
        this.clickOn(MENU_BEST_SALE);
    }

    static getUrl(){
        return cy.url();
    }

}

export default HomePage;