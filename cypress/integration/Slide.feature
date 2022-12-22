Feature: Slide

    I want to use Slide

    @focus
    Scenario: I should render slide,validate mock, expand, revalidate and colapse
        Given I render Slide
        Then I expect element 'slide-test-id' to be visible
        And I expect 'slide-content' mock to exist

        When I click on 1th button
        Then I expect element 'slide-test-id' to be hidden

    @focus
    Scenario: I should get element by cy selector
        Given I render Slide
        Then I should find a cy selector named 'slide-container'
