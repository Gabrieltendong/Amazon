import axios from "axios"

class Page {

    static verifyLink(link){
        return axios.get(link).then(res => res.status)
    }

    static clickOn(element){
        cy.get(element).click();
    }

}

export default Page;