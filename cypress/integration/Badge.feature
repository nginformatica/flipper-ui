Feature: Badge

    I want to use Badge

    @focus
    Scenario: I should render default
        Given I render Badge with 'default' preset
        Then I expect 'badge-counter' mock to exist
        And I should see 'Badge'

    @focus
    Scenario: I should render primary
        Given I render Badge with 'primary' preset
        Then I expect 'badge-counter' mock to exist
        And I should see 'Badge'

    @focus
    Scenario: I should render secondary and validate if children onClick is called
        Given I render Badge with 'secondary' preset
        Then I expect 'badge-counter' mock to exist

        When I click on button 'mocked-button'
        Then I expect 'badge-children' spy to have been called 1 times

    @focus
    Scenario: I should render with dots
        Given I render Badge with 'with-dot' preset
        Then I should see 1 BadgeDot
        And I should see 'Badge'
