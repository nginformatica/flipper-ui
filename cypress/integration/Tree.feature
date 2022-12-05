Feature: Tree

    I want to use Tree

    @focus
    Scenario: I should render
        Given I render Tree
        When I expand all nodes
        Then I expect to see all Node names from mocked values
