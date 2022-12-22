Feature: Node

    I want to use Node

    @focus
    Scenario: I should render
        Given I render Node
        When I expand all nodes
        Then I expect to see all Node names from mocked values

    @focus
    Scenario: I should get element by cy selector
        Given I render Node
        Then I should find a cy selector named 'node-container'
