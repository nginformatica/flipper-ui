Feature: StepCard

    I want to use StepCard

    @focus
    Scenario: I render default and validate its structure
        Given I render StepCard with 'default' preset
        And I should see cy 'linear-progress-bar-container'
        And I should not see cy 'summary-linear-progress-bar-container'

        When I click on cy 'summary-text'
        Then I should see cy 'expansion-panel-details-container'

    @focus
    Scenario: I render without expansion and validate its structure
        Given I render StepCard with 'without-expansion' preset
        Then I should not see cy 'linear-progress-bar-container'

    @focus
    Scenario: Ensure JSX image is rendered
        Given I render StepCard with 'with-svg-image' preset
        And I click on cy 'summary-text'
        Then I should see cy 'step-card-jsx-img'
