Feature: Sidebar

    I want to use Sidebar

    @focus
    Scenario: I render
        Given I render Sidebar
        When I click in all list options
        Then I expect all options spies to have been called
