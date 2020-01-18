Feature: Recovered Sing In

Background: Successfull Login with Valid Credentials
		Given Reopen Chrome browser
		
#@SmokeTest
  Scenario: Login with Valid Credentials
    Given Launch Chrome browser
    When Opens URL "http://localhost:8080/Testautomation-01/"
    Then Title of page should be "Test automation Framework"
    When Enters Username as "mamoudou@gmail.com" and Password as "123456"
    And Click on Sign In
    Then Quit browser
    

    


