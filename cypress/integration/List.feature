Feature: List

    I want to use List

    @focus
    Scenario: I should render
        Given I render List
        When I click in all itens on the list
        Then I expect all spies to have been called on the list

    @focus
    Scenario: I should get element by cy selector
        Given I render List
        Then I should find a cy selector named 'list-container'
