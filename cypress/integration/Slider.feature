Feature: Slider

    I want to use Slider

    @focus
    Scenario: I slide and validate values
        Given I render Slider with 'default' preset
        When I slide 15% from the 1th slider to 'right'
        Then I expect input to have value '15'
        And I expect 'slider-percentage' spy to have been called 15 times
        And I expect slider to have primary color

    @focus
    Scenario: I slide and validate values using secondary color
        Given I render Slider with 'secondary' preset
        When I slide 25% from the 1th slider to 'right'
        Then I expect input to have value '25'
        And I expect 'slider-percentage' spy to have been called 25 times
        And I expect slider to have secondary color

    # FIXME: preset ranged,fixed-label and with-marks isnt working
    # @focus
    Scenario: I slide and validate values
        Given I render Slider with 'ranged' preset

        When I slide 5% from the 1th slider to 'right'
        Then I expect input to have value '5'

        When I slide 3% from the 2th slider to 'left'
        Then I expect input to have value '3'

    @focus
    Scenario: I should get element by cy selector
        Given I render Slider with 'default' preset
        Then I should find a cy selector named 'slider-container'
