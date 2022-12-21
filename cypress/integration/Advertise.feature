Feature: Advertise - Default

    I want to use default Advertise

    Background: Render component
        Given  I render Advertise

    @focus
    Scenario: I should see mocked Author and comment correctly
        Then I expect 'advertise-author' mock to exist
        And I expect 'advertise-comment' mock to exist

    @focus
    Scenario: I should get element by cy selector
        Then I should find a cy selector named 'advertise-container'

