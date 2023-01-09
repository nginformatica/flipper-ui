Feature: Tooltip

    I want to use Tooltip

    @focus
    Scenario: I see a Tooltip and its elements
        Given I render Tooltip
        When I wait for 1 seconds
        And I focus 1th button
        Then I should see 'Tooltip'
        And I expect 'tooltip-onopen' spy to have been called 1 times

        When I exit focus
        Then I expect 'tooltip-onclose' spy to have been called 1 times

    @focus
    Scenario: I should get element by cy selector
        Given I render Tooltip
        Then I should find a cy selector named 'tooltip-container'
