# FIXME: Component isnt calling onClose callback when it should
Feature: Dialog

    I want to use Dialog

    @focus
    Scenario: I should render and validate mock
        Given I render Dialog
        Then I do not expect to see an Mui Dialog

        When I click on first Mui Button
        Then I expect to see an Mui Dialog
        And I expect 'dialog-content' mock to exist
