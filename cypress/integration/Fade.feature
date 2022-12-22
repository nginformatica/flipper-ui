Feature: Fade

    I want to use Fade

    @focus
    Scenario: I should render fade,validate mock, expand, revalidate and colapse
        Given I render Fade
        Then I expect element 'fade-test-id' to be visible
        And I expect 'fade-content' mock to exist

        When I click on 1th button
        Then I expect element 'fade-test-id' to be hidden

    @focus
    Scenario: I should get element by cy selector
        Given I render Fade
        Then I should find a cy selector named 'fade-container'
