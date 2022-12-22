Feature: Zoom

    I want to use Zoom

    @focus
    Scenario: I should render zoom,validate mock, expand, revalidate and colapse
        Given I render Zoom
        Then I expect element 'zoom-test-id' to be visible
        And I expect 'zoom-content' mock to exist

        When I click on 1th button
        Then I expect element 'zoom-test-id' to be hidden

    @focus
    Scenario: I should get element by cy selector
        Given I render Zoom
        Then I should find a cy selector named 'zoom-container'
