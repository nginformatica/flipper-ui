Feature: Stepper

    I want to use Stepper

    @focus
    Scenario: I see a normal
        Given I render Stepper with 'default' preset
        Then I expect 'stepper-steps-words' mock to exist
        And I expect 3 disabled itens on Stepper

    @focus
    Scenario: I see a normal
        Given I render Stepper with 'with-icon' preset
        Then I should see 1 'svg'
