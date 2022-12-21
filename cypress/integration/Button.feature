Feature: Button

    I want to use Button

    @focus
    Scenario: I should render default
        Given I render Button with 'default' preset
        Then I expect 'button-label' mock to exist
        And I expect Button label to match with mock

        When I click on button 'button-test'
        Then I expect 'button-onclick' spy to have been called 1 times
        And I expect button 'button-test' to have attr 'dashed' with value 'false'

    @focus
    Scenario: I should render with svg
        Given I render Button with Icon
        Then I should see 1 'svg'

        When I click on button 'button-test'
        Then I expect 'button-onclick' spy to have been called 1 times

    @focus
    Scenario: I should render primary
        Given I render Button with 'primary' preset
        Then I expect 'button-label' mock to exist
        And I expect Button label to match with mock

        When I click on button 'button-test'
        Then I expect 'button-onclick' spy to have been called 1 times
        And I expect button 'button-test' to have color 'primary'

    @focus
    Scenario: I should render secondary
        Given I render Button with 'secondary' preset
        Then I expect 'button-label' mock to exist
        And I expect Button label to match with mock

        When I click on button 'button-test'
        Then I expect 'button-onclick' spy to have been called 1 times
        And I expect button 'button-test' to have color 'secondary'

    @focus
    Scenario: I should render contained primary
        Given I render Button with 'contained-primary' preset
        Then I expect 'button-label' mock to exist
        And I expect Button label to match with mock

        When I click on button 'button-test'
        Then I expect 'button-onclick' spy to have been called 1 times
        And I expect button 'button-test' to have color 'primary'
        And I expect button 'button-test' to have variant 'contained'

    @focus
    Scenario: I should render contained secondary
        Given I render Button with 'contained-secondary' preset
        Then I expect 'button-label' mock to exist
        And I expect Button label to match with mock

        When I click on button 'button-test'
        Then I expect 'button-onclick' spy to have been called 1 times
        And I expect button 'button-test' to have color 'secondary'
        And I expect button 'button-test' to have variant 'contained'

    @focus
    Scenario: I should render outlined primary
        Given I render Button with 'outlined-primary' preset
        Then I expect 'button-label' mock to exist
        And I expect Button label to match with mock

        When I click on button 'button-test'
        Then I expect 'button-onclick' spy to have been called 1 times
        And I expect button 'button-test' to have color 'primary'
        And I expect button 'button-test' to have variant 'outlined'

    @focus
    Scenario: I should render outlined secondary
        Given I render Button with 'outlined-secondary' preset
        Then I expect 'button-label' mock to exist
        And I expect Button label to match with mock

        When I click on button 'button-test'
        Then I expect 'button-onclick' spy to have been called 1 times
        And I expect button 'button-test' to have color 'secondary'
        And I expect button 'button-test' to have variant 'outlined'

    @focus
    Scenario: I should render selected
        Given I render Button with 'selected' preset
        Then I expect 'button-label' mock to exist
        And I expect Button label to match with mock

        When I click on button 'button-test'
        Then I expect 'button-onclick' spy to have been called 1 times

    @focus
    Scenario: I should render dashed primary
        Given I render Button with 'dashed-primary' preset
        Then I expect 'button-label' mock to exist
        And I expect Button label to match with mock

        When I click on button 'button-test'
        Then I expect 'button-onclick' spy to have been called 1 times
        And I expect button 'button-test' to have color 'primary'
        And I expect button 'button-test' to have attr 'dashed' with value 'true'

    @focus
    Scenario: I should render dashed secondary
        Given I render Button with 'dashed-secondary' preset
        Then I expect 'button-label' mock to exist
        And I expect Button label to match with mock

        When I click on button 'button-test'
        Then I expect 'button-onclick' spy to have been called 1 times
        And I expect button 'button-test' to have color 'secondary'
        And I expect button 'button-test' to have attr 'dashed' with value 'true'

    @focus
    Scenario: I should render small
        Given I render Button with 'small' preset
        Then I expect 'button-label' mock to exist
        And I expect Button label to match with mock

        When I click on button 'button-test'
        Then I expect 'button-onclick' spy to have been called 1 times
        And I expect button 'button-test' to have size 'small'

    @focus
    Scenario: I should render medium
        Given I render Button with 'medium' preset
        Then I expect 'button-label' mock to exist
        And I expect Button label to match with mock

        When I click on button 'button-test'
        Then I expect 'button-onclick' spy to have been called 1 times

    @focus
    Scenario: I should render large
        Given I render Button with 'large' preset
        Then I expect 'button-label' mock to exist
        And I expect Button label to match with mock

        When I click on button 'button-test'
        Then I expect 'button-onclick' spy to have been called 1 times
        And I expect button 'button-test' to have size 'large'

    @focus
    Scenario: I should render disabled
        Given I render Button with 'disabled' preset
        Then I expect 'button-label' mock to exist
        And I expect Button label to match with mock
        And I expect button 'button-test' to be disabled

    @focus
    Scenario: I should get element by cy selector
        Given I render Button with 'default' preset
        Then I should find a cy selector named 'button-container'
