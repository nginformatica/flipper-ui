Feature: Checkbox

    I want to use Checkbox

    @focus
    Scenario: I should render default
        Given I render Checkbox with 'default' preset
        Then I expect generic 'checkbox-params' component props and style to match with mock
        And I expect checkbox to be unchecked
        And I should see 1 'svg'

        When I click on 1th checkbox
        Then I expect 'checkbox-onchange' spy to have been called 1 times
        And I expect checkbox to be checked

    @focus
    Scenario: I should render with-helper
        Given I render Checkbox with 'with-helper' preset
        Then I expect generic 'checkbox-params' component props and style to match with mock
        And I expect checkbox to be unchecked
        And I should see 2 'svg'

        When I click on 1th checkbox
        Then I expect 'checkbox-onchange' spy to have been called 1 times
        And I expect checkbox to be checked

        When I hover mocked text 'checkbox-params'
        And I click on 1th button
        Then I expect 'checkbox-onHelper-click' spy to have been called 1 times

    @focus
    Scenario: I should render primary
        Given I render Checkbox with 'primary' preset
        Then I expect generic 'checkbox-params' component props and style to match with mock
        And I expect checkbox to be unchecked
        And I should see 1 'svg'

        When I click on 1th checkbox
        Then I expect 'checkbox-onchange' spy to have been called 1 times
        And I expect checkbox to be checked

    @focus
    Scenario: I should render without-label
        Given I render Checkbox with 'without-label' preset
        Then I expect generic 'checkbox-params' component props and style to match with mock
        And I expect checkbox to be unchecked
        And I should see 1 'svg'

        When I click on 1th checkbox
        Then I expect 'checkbox-onchange' spy to have been called 1 times
        And I expect checkbox to be checked

    @focus
    Scenario: I should render switch
        Given I render Checkbox with 'switch' preset
        Then I expect generic 'checkbox-params' component props and style to match with mock
        And I expect checkbox to be unchecked

        When I click on 1th checkbox
        Then I expect 'checkbox-onchange' spy to have been called 1 times
        And I expect checkbox to be checked

    @focus
    Scenario: I should render switch-with-helper
        Given I render Checkbox with 'switch-with-helper' preset
        When I hover mocked text 'checkbox-params'
        And I click on 1th button
        Then I expect 'checkbox-onHelper-click' spy to have been called 1 times

    @focus
    Scenario: I should get element by cy selector
        Given I render Checkbox with 'default' preset
        Then I should find a cy selector named 'checkbox-container'

    @focus
    Scenario: I should get switch by cy selector
        Given I render Checkbox with 'switch' preset
        Then I should find a cy selector named 'checkbox-container'
