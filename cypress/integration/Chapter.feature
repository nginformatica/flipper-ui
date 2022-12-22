Feature: Chapter

    I want to use Chapter

    @focus
    Scenario: I should render default
        Given I render Chapter
        Then I expect 'chapter-content' mock to exist

    @focus
    Scenario:I should get element by cy selector
        Given I render Chapter
        Then I should find a cy selector named 'chapter-container'
