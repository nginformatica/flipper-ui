Feature: Chapter

    I want to use Chapter

    @focus
    Scenario: I should render default
        Given I render Chapter
        Then I expect 'chapter-content' mock to exist