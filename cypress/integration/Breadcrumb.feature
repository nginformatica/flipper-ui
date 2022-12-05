Feature: Breadcrumb

    I want to use Breadcrumb

    @focus
    Scenario: I should render default
        Given I render Breadcrumb
        Then I should see 1 'nav'
        And I should see 2 'a'
        And I expect Breadcrumb links to match with mock
