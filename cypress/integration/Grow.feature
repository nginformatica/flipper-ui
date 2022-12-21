Feature: Grow

    I want to use Grow

    @focus
    Scenario: I should render fade,validate mock, expand, revalidate and colapse
        Given I render Grow
        Then I expect element 'grow-test-id' to be visible
        And I expect 'grow-content' mock to exist

        When I click on 1th button
        Then I expect element 'grow-test-id' to be hidden

    @focus
    Scenario: I should get element by cy selector
        Given I render Grow
        Then I should find a cy selector named 'grow-container'
