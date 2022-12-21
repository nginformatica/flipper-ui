Feature: MaskField

    I want to use MaskField

    @focus
    Scenario: I should render default and validate input
        Given I render MaskField with 'default' preset
        Then I expect input to have placeholder 'Description'

        When I type 'abc' on input
        Then I expect input to be empty

        When I type '123' on input
        Then I expect input not to be empty
        And I expect input to have value '123'

    @focus
    Scenario: I should render with-input-adornment and validate input
        Given I render MaskField with 'with-input-adornment' preset

        When I type 'abc' on input
        Then I expect input to be empty

        When I type '123' on input
        And I expect input to have value '123,00'

    @focus
    Scenario: I should render with-input-adornment and validate input with decimal
        Given I render MaskField with 'with-input-adornment' preset

        When I type '123,1' on input
        And I expect input to have value '123,10'

    @focus
    Scenario: I should render default and validate input
        Given I render MaskField with 'default' preset
        Then I should find a cy selector named 'mask-field'
