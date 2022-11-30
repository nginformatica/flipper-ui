Feature: List

    I want to use List

    @focus
    Scenario: I should render
        Given I render List
        When I click in all itens on the list
        Then I expect all spies to have been called on the list
