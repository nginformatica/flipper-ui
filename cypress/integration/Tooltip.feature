Feature: Tooltip

    I want to use Tooltip

    @focus
    Scenario: I see a Tooltip and its elements
        Given I render Tooltip
        When I focus 1th button
        Then I should see 'Tooltip'
        And I expect 'tooltip-onopen' spy to have been called 1 times

        When I exit 1th button
        Then I expect 'tooltip-onclose' spy to have been called 1 times
