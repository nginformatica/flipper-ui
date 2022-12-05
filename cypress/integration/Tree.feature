Feature: Tree

    I want to use Tree

    # FIXME: Test is inconsistent, new test will be made after component refactor
    # @focus
    Scenario: I should render
        Given I render Tree
        When I expand all nodes
        Then I expect to see all Node names from mocked values
