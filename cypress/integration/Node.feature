Feature: Node

    I want to use Node

    @focus
    Scenario: I should render
        Given I render Node
        When I expand all nodes
        Then I expect to see all Node names from mocked values
