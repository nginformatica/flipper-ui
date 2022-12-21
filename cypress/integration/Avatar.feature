Feature: Avatar

    I want to use Avatar

    @focus
    Scenario: I should render default
        Given I render Avatar with 'default' preset
        Then I should see 1 'svg'

    @focus
    Scenario: I should render primary
        Given I render Avatar with 'primary' preset
        Then I should see 1 'svg'

    @focus
    Scenario: I should render with children
        Given I render Avatar with 'with-children' preset
        Then I should not see any 'svg'
        And I expect 'avatar-children' mock to exist

    @focus
    Scenario: I should get element by cy selector
        Given I render Avatar with 'default' preset
        Then I should find a cy selector named 'avatar-container'
