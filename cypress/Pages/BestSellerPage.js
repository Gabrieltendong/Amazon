import Page from "./Page";

const PRODUCT_PHONE = 'div#nav-flyout-anchor>div:nth-child(13) ul.generic-subnav-flyout-itemgroup > li:nth-child(2)';
const MENU_OFFER = '[href="/b/?ie=UTF8&node=1325595031&ref_=sv_x_5"] > .nav-a-content'

class BestSellerPage extends Page{

    static clickOnProductPhone(){
        cy.get(MENU_OFFER).trigger('mouseover');
        this.clickOn(PRODUCT_PHONE);
    }

}

export default BestSellerPage