Feature: Fab

    I want to use Fab

    @focus
    Scenario: I should render panel, expand by clicking on the bar and validate mock
        Given I render Fab
        When I click on 1th button
        Then I expect 'fab-onclick' spy to have been called 1 times

    @focus
    Scenario: I should get element by cy selector
        Given I render Fab
        Then I should find a cy selector named 'fab-container'
