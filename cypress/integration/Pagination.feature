Feature: Pagination

    I want to use Pagination

    @focus
    Scenario: I should render
        Given I render Pagination
        When I click on button 'prev-page-button'
        Then I expect 'pagination-prev-onclick' spy to have been called 1 times

        When I click on button 'next-page-button'
        Then I expect 'pagination-next-onclick' spy to have been called 1 times

        When I click on button 'pagination-page-1'
        Then I expect 'pagination-navigation-onclick' spy to have been called 1 times
        Then I expect spy 'pagination-navigation-onclick' to have been called with 1

        When I click on button 'pagination-page-2'
        Then I expect 'pagination-navigation-onclick' spy to have been called 1 times
        Then I expect spy 'pagination-navigation-onclick' to have been called with 2

        When I click on button 'pagination-page-3'
        Then I expect 'pagination-navigation-onclick' spy to have been called 1 times
        Then I expect spy 'pagination-navigation-onclick' to have been called with 3

        When I click on button 'pagination-page-4'
        Then I expect 'pagination-navigation-onclick' spy to have been called 1 times
        Then I expect spy 'pagination-navigation-onclick' to have been called with 4

        When I click on button 'pagination-page-5'
        Then I expect 'pagination-navigation-onclick' spy to have been called 1 times
        Then I expect spy 'pagination-navigation-onclick' to have been called with 5

    @focus
    Scenario: I should get element by cy selector
        Given I render Pagination
        Then I should find a cy selector named 'pagination-container'
