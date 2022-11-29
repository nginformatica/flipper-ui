Feature: ChipField

    I want to use ChipField

    @focus
    Scenario: I should render and validate mock, spy and mocks
        Given I render ChipField
        Then I expect 'chip-field-values' mock size match with chip itens

        When I click on 1th delete icon
        Then I expect 'chip-field-on-delete' spy to have been called 1 times
        And I expect spy 'chip-field-on-delete' to have been called with mocked 'chip-field-values' values at 0 pos

        When I type 'chiptest' on 'chip-field-root' and press enter
        Then I expect 'chip-field-on-add' spy to have been called 1 times
        And I expect 'chip-field-on-add' spy to have been called with 'chiptest'

    @focus
    Scenario: I should render and validate mock, spy and mocks
        Given I render ChipField
        Then I expect 'chip-field-values' mock size match with chip itens

        When I click on 2th delete icon
        Then I expect 'chip-field-on-delete' spy to have been called 1 times
        And I expect spy 'chip-field-on-delete' to have been called with mocked 'chip-field-values' values at 1 pos
