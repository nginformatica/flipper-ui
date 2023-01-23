Feature: ExpansionPanel

    I want to use ExpansionPanel

    @focus
    Scenario: I should render panel, expand by clicking on the bar and validate mock
        Given I render ExpansionPanel with 'default' preset
        Then I expect Collapse to be hidden

        When I click on Mui ExpansionPanel
        Then I expect Collapse to be visible
        And I expect 'expansion-panel-content' mock to exist

        When I hover mocked text 'expansion-panel-content' on pos 0
        And I click on 1th button
        Then I expect 'expansion-panel-on-helper-click' spy to have been called 1 times

        When I click on 2th button
        Then I expect 'expansion-panel-on-confirm-click' spy to have been called 1 times

        When I click on Mui ExpansionPanel
        Then I expect Collapse to be hidden

    @focus
    Scenario: I should get element by cy selector
        Given I render ExpansionPanel with 'default' preset
        Then I should find a cy selector named 'expansion-panel-container'

    @focus
    Scenario: I should render panel with editable
        Given I render ExpansionPanel with 'with-editable' preset
        Then I should find a cy selector named 'expansion-panel-container'

        When I hover cy 'expansion-panel-header'
        Then I should see cy 'edit-button'

        When I click on cy 'edit-button'
        Then I should see cy 'save-button'

        When I click on cy 'save-button'
        Then I should see cy 'edit-button'

    @focus
    Scenario: I should render panel with editable and edit description
        Given I render ExpansionPanel with 'with-editable' preset
        Then I should find a cy selector named 'expansion-panel-container'

        When I click on Mui ExpansionPanel
        Then I expect Collapse to be visible

        When I hover cy 'expansion-panel-header'
        Then I click on cy 'edit-button'

        When I type 'New description' on input
        And I press enter
        Then I should see 'New description'

        When I hover cy 'expansion-panel-header'
        Then I click on cy 'edit-button'
        And I press esc
        Then I should see 'New description'
