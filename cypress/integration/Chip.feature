Feature: Chip

    I want to use Chip

    @focus
    Scenario: I should render default
        Given I render Chip with 'default' preset
        Then I expect chip to exist
        And I expect to see delete icon from chip
        And I should see 1 'svg'
        And I expect chip to not have color secondary
        And I expect chip to be rounded

        When I click on delete icon
        Then I expect 'checkbox-onchange' spy to have been called 1 times

    @focus
    Scenario: I should render squared
        Given I render Chip with 'squared' preset
        Then I expect chip to be square
        And I expect chip to not have avatar
        And I should see 1 'svg'

        When I click on delete icon
        Then I expect 'checkbox-onchange' spy to have been called 1 times

    @focus
    Scenario: I should render with-avatar
        Given I render Chip with 'with-avatar' preset
        Then I expect chip to have avatar
        And I should see 1 'svg'

        When I click on delete icon
        Then I expect 'checkbox-onchange' spy to have been called 1 times

    @focus
    Scenario: I should render with-icon-avatar
        Given I render Chip with 'with-icon-avatar' preset
        Then I expect chip to have avatar
        And I should see 2 'svg'

        When I click on delete icon
        Then I expect 'checkbox-onchange' spy to have been called 1 times

    @focus
    Scenario: I should render with-image-avatar
        Given I render Chip with 'with-image-avatar' preset
        Then I expect chip to have avatar
        And I should see 1 'svg'
        And I should see 1 'img'

        When I click on delete icon
        Then I expect 'checkbox-onchange' spy to have been called 1 times

    @focus
    Scenario: I should render secondary-color
        Given I render Chip with 'secondary-color' preset
        Then I expect chip to have color secondary
        And I should see 1 'svg'

        When I click on delete icon
        Then I expect 'checkbox-onchange' spy to have been called 1 times
