Feature: Typography

    I want to use Typography

    @focus
    Scenario: I should render default preset
        Given I render Typography with 'default' preset
        Then Text should have typography 'body2'

    @focus
    Scenario: I should render error-text preset
        Given I render Typography with 'error-text' preset
        Then Text should have typography 'body2'
        And Text should have typography 'error-text'

    @focus
    Scenario: I should render primary preset
        Given I render Typography with 'primary' preset
        Then Text should have typography 'body2'
        And Text should have typography 'primary'

    @focus
    Scenario: I should render secondary preset
        Given I render Typography with 'secondary' preset
        Then Text should have typography 'body2'
        And Text should have typography 'secondary'

    @focus
    Scenario: I should render text-primary preset
        Given I render Typography with 'text-primary' preset
        Then Text should have typography 'body2'
        And Text should have typography 'text-primary'

    @focus
    Scenario: I should render text-secondary preset
        Given I render Typography with 'text-secondary' preset
        Then Text should have typography 'body2'
        And Text should have typography 'text-secondary'

    @focus
    Scenario: I should render button preset
        Given I render Typography with 'button' preset
        Then Text should have typography 'button'

    @focus
    Scenario: I should render caption preset
        Given I render Typography with 'caption' preset
        Then Text should have typography 'caption'

    @focus
    Scenario: I should render body1 preset
        Given I render Typography with 'body1' preset
        Then Text should have typography 'body1'

    @focus
    Scenario: I should render body2 preset
        Given I render Typography with 'body2' preset
        Then Text should have typography 'body2'

    @focus
    Scenario: I should render subtitle1 preset
        Given I render Typography with 'subtitle1' preset
        Then Text should have typography 'subtitle1'

    @focus
    Scenario: I should render subtitle2 preset
        Given I render Typography with 'subtitle2' preset
        Then Text should have typography 'subtitle2'

    @focus
    Scenario: I should render h1 preset
        Given I render Typography with 'h1' preset
        Then Text should have typography 'h1'

    @focus
    Scenario: I should render h2 preset
        Given I render Typography with 'h2' preset
        Then Text should have typography 'h2'

    @focus
    Scenario: I should render h3 preset
        Given I render Typography with 'h3' preset
        Then Text should have typography 'h3'

    @focus
    Scenario: I should render h4 preset
        Given I render Typography with 'h4' preset
        Then Text should have typography 'h4'

    @focus
    Scenario: I should render h5 preset
        Given I render Typography with 'h5' preset
        Then Text should have typography 'h5'

    @focus
    Scenario: I should render h6 preset
        Given I render Typography with 'h6' preset
        Then Text should have typography 'h6'
