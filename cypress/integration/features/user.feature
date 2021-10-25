Feature: user feature

@severity=minor
@bug_1345
Scenario Outline: 404 error
    Given go to the home page
    And Login with '<email>' and '<password>'
    When click on  "service client" at bottom of page and Scroll to "Naviguez sur nos pages d'Aide"
    And click on "où est ma commande?" and click on "nos transporteurs"
    And In the list of carriers, click on the link of the carrier "DPD Royaume Uni"
    Then 404 error

    Examples: 
    | email                   | password    |
    | ndorichnel@gmail.com    | Nd0r\|chnel |