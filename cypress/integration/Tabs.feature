Feature: Tabs

    I want to use Tabs

    @focus
    Scenario: I see a Tabs and its elements
        Given I render Tabs
        Then I expect 'Profile' to be selected

        When I click on 2th button
        Then I expect 'Enterprise' to be selected

        When I click on 3th button
        Then I expect 'Billing' to be selected

        When I click on 1th button
        Then I expect 'Profile' to be selected
