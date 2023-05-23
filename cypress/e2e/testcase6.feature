Feature: testcase6

    I want to fill details in contact Us form so that it gets submitted

    Scenario: On Filling details contact Us form get submitted
        Given I naivgate to website
        Then homepage is visible
        When on clicking contact Us button
        Then verify Get In touch text is visible
        When user enters name, email subject, message, upload file and click submit button
        Then verify success message displayed is visible And on click it redirects to homepage