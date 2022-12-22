Feature: Tree

    I want to use Tree

    @focus
    Scenario: I should render
        Given I render Tree
        When I expand all nodes
        Then I expect to see all Node names from mocked values

    @focus
    Scenario: I should get element by cy selector
        Given I render Tree
        Then I should find a cy selector named 'tree-container'
