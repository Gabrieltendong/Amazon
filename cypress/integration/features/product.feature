Feature: Feature Products

@severity=critical
@bug_1324

    Scenario: Redirection to the home page
        Given go to the home page
        When click on "toutes" and select "Meilleures ventes"
        And in "Offres reconditionnées" click on "Téléphonie"
        Then Redirection to the home page