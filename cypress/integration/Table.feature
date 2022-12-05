Feature: Table

    I want to use Table

    @focus
    Scenario: I see a table and its elements
        Given I render Table
        Then I expect 'table-elements' mock to exist
