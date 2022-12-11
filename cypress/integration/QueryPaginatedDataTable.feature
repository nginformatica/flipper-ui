Feature: QueyPaginatedDataTableFactory

    I want to use QueyPaginatedDataTableFactory

    # @focus
    # Scenario: I should render with default preset with 'default' preset
    #     Given I render QueyPaginatedDataTableFactory
    #     Then I should see skeletons on table
    #     And I should not see skeletons on table
    #     And I expect to see table footer
    #     And I expect to see table header
    #     And I expect DataTable pages per row to be 5
    #     And I expect DataTable caption to be '1-5 of 35'


    #     When I click on 2th button
    #     Then I should not see skeletons on table
    #     And I expect DataTable caption to be '6-10 of 35'

    #     When I click on 2th button
    #     Then I should not see skeletons on table
    #     And I expect DataTable caption to be '11-15 of 35'

    # @focus
    # Scenario: I should render with default preset
    #     Given I render QueyPaginatedDataTableFactory with 'default' preset
    #     Then I should see skeletons on table
    #     And I should not see skeletons on table
    #     And I expect to see table footer
    #     And I expect to see table header
    #     And I expect DataTable pages per row to be 5
    #     And I expect DataTable caption to be '1-5 of 35'

    #     When I click on Mui select option
    #     And I select the option with value '10' from options
    #     And I should not see skeletons on table
    #     Then I expect DataTable caption to be '1-10 of 35'

    #     When I click on Mui select option
    #     And I select the option with value '25' from options
    #     And I should not see skeletons on table
    #     Then I expect DataTable caption to be '1-25 of 35'

    #     When I click on Mui select option
    #     And I select the option with value '5' from options
    #     And I should not see skeletons on table
    #     Then I expect DataTable caption to be '1-5 of 35'

    # @focus
    # Scenario: I should render with empty preset
    #     Given I render DataTable with 'empty' preset
    #     Then I should see 'Empty DataTable'
    #     And I expect to see table header

    # @focus
    # Scenario: I should render with no-header preset
    #     Given I render DataTable with 'no-header' preset
    #     Then I do not expect to see table header

    # @focus
    # Scenario: I should render with no-pagination preset
    #     Given I render DataTable with 'no-pagination' preset
    #     Then I do not expect to see table footer
    #     And I expect to see table header

    @focus
    Scenario: I should render with crud preset
        Given I render DataTable with 'crud' preset
        Then I should see 'Magazine'

#     When I click on 1th button from 1th row
#     And I clear input name 'product'
#     Then I expect input name 'product' to be ''

#     When I type 'test' into input name 'product'
#     Then I expect input name 'product' to be 'test'
#     When I click on 2th button from 1th row
#     Then I should see 'test'

#     When I click on 1th button from 2th row
#     And I clear input name 'product'
#     Then I expect input name 'product' to be ''
#     When I click on 3th button from 2th row
#     Then I should see 'Table'

#     When I click on 2th button from 3th row
#     And I click on 1th button from 3th row
#     Then I should not see 'Chair'
