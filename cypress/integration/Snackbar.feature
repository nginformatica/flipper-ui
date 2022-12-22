Feature: Snackbar

    I want to use Snackbar

    @focus
    Scenario: I see a normal snackbar
        Given I render Snackbar with 'default' preset

        When I click on 1th button
        Then I should see 'This is a normal message'


    @focus
    Scenario: I see a success snackbar
        Given I render Snackbar with 'success' preset

        When I click on 1th button
        Then I should see 'This is a success message'
        And The snackbar should have Mui background 'success'

    @focus
    Scenario: I see a warning snackbar
        Given I render Snackbar with 'warning' preset

        When I click on 1th button
        Then I should see 'This is a warning message'
        And The snackbar should have Mui background 'warning'


    @focus
    Scenario: I see a error snackbar
        Given I render Snackbar with 'error' preset

        When I click on 1th button
        Then I should see 'This is an error message'
        And The snackbar should have Mui background 'error'

    @focus
    Scenario: I should get element by cy selector
        Given I render Snackbar with 'default' preset
        When I click on 1th button
        Then I should find a cy selector named 'snackbar-container'
