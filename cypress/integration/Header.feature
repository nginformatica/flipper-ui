Feature: Header

    I want to use Header

    @focus
    Scenario: I should render deafult
        Given I render Header with 'default' preset
        Then I expect 'header-content' mock to exist
        And I expect header to have Mui 'AppBarDefaultColor' class

    @focus
    Scenario: I should render primary
        Given I render Header with 'primary' preset
        Then I expect 'header-content' mock to exist
        And I expect header to have Mui 'AppBarPrimaryColor' class

    @focus
    Scenario: I should render secondary
        Given I render Header with 'secondary' preset
        Then I expect 'header-content' mock to exist
        And I expect header to have Mui 'AppBarSecondaryColor' class

    @focus
    Scenario: I should render inherit
        Given I render Header with 'inherit' preset
        Then I expect 'header-content' mock to exist
        And I expect header to have Mui 'AppBarInheritColor' class
