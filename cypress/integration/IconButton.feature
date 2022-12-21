Feature: IconButton

    I want to use IconButton

    @focus
    Scenario: I should render default
        Given I render IconButton with 'default' preset
        Then I click on 1th button should be enabled

        When I click on 1th button
        Then I expect 'icon-button-onclick' spy to have been called 1 times

    @focus
    Scenario: I should render primary
        Given I render IconButton with 'primary' preset
        Then I click on 1th button should be enabled

        When I click on 1th button
        Then I expect 'icon-button-onclick' spy to have been called 1 times

    @focus
    Scenario: I should render secondary
        Given I render IconButton with 'secondary' preset
        Then I click on 1th button should be enabled

        When I click on 1th button
        Then I expect 'icon-button-onclick' spy to have been called 1 times

    @focus
    Scenario: I should render disabled
        Given I render IconButton with 'disabled' preset
        Then I click on 1th button should be disabled

    @focus
    Scenario: I should get element by cy selector
        Given I render IconButton with 'default' preset
        When I click on cy 'icon-button'
        Then I expect 'icon-button-onclick' spy to have been called 1 times
