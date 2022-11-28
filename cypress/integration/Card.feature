Feature: Card

    I want to use Card

    @focus
    Scenario: I should render default
        Given I render Card
        Then I should see 2 'button'
        And I expect Card component style to match with mock

        When I click on 1th button
        Then I expect 'card-top' spy to have been called 1 times

        When I click on 2th button
        Then I expect 'card-bottom' spy to have been called 1 times

