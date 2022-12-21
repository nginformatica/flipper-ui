Feature: Drawer

    I want to use Drawer

    @focus
    Scenario: I should render and validate visibility and mock
        Given I render Drawer
        Then I do not expect to see an Mui Drawer

        When I click on first Mui Button
        Then I expect to see an Mui Drawer
        And I expect drawer to match mock 'drawer-content' size

    @focus
    Scenario: I should get element by cy selector
        Given I render Drawer
        When I click on first Mui Button
        Then I should find a cy selector named 'drawer-container'
