Feature: ExpansionPanel

    I want to use ExpansionPanel

    @focus
    Scenario: I should render panel, expand by clicking on the bar and validate mock
        Given I render ExpansionPanel
        Then I expect Collapse to be hidden

        When I click on Mui ExpansionPanel
        Then I expect Collapse to be visible
        And I expect 'expansion-panel-content' mock to exist

        When I click on 1th button
        Then I expect 'expansion-panel-on-helper-click' spy to have been called 1 times

        When I click on 2th button
        Then I expect 'expansion-panel-on-confirm-click' spy to have been called 1 times

        When I click on Mui ExpansionPanel
        Then I expect Collapse to be hidden

    @focus
    Scenario: I should get element by cy selector
        Given I render ExpansionPanel
        Then I should find a cy selector named 'expansion-panel-container'
