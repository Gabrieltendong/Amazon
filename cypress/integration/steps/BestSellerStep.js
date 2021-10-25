import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import BestSellerPage from "../../Pages/BestSellerPage";
import HomePage from "../../Pages/HomePage";
import { testStore } from '../../support/commands';

And('in "Offres reconditionnées" click on "Téléphonie"', ()=> {
    BestSellerPage.clickOnProductPhone();
})

Then('Redirection to the home page', ()=> {
    HomePage.getUrl().should("not.contain", testStore.url)
})