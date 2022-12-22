Feature: Menu

    I want to use Menu

    @focus
    Scenario: I should render and see menu
        Given I render Menu
        Then I do not expect to see Mui Menu

        When I click on 1th button
        Then I expect to see Mui Menu

    @focus
    Scenario: I should render and validate mocked list
        Given I render Menu
        When I click on 1th button
        Then I expect to see Mui Menu

        When I click in all itens on the list
        Then I expect all spies to have been called on the list

    @focus
    Scenario: I should get element by cy selector
        Given I render Menu
        When I click on 1th button
        Then I should find a cy selector named 'menu-container'
