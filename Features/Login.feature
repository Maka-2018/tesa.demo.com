Feature: Login Automating

  Scenario: Successfull Login with Valid Credentials
    Given User Launch Chrome browser
    When User opens URL "http://localhost:8080/Testautomation-01/"
    Then Page Title should be "Test automation Framework"
    When User enters Username as "mamoudou@gmail.com" and Password as "123456Admin&%"
    And Click on Login
    Then close browser
    
	Scenario Outline: Login Data Driven
    Given User Launch Chrome browser
    When User opens URL "http://localhost:8080/Testautomation-01/"
    Then Page Title should be "Test automation Framework"
    When User enters Username as "<email>" and Password as "<password>"
    And Click on Login
    Then close browser
    
    Examples:
    		| email | password |
    		| camara@gmail.com |	admin1 |
    		| amos12@hotmail.com |	A_#in2 |
    		| 12345pala@yahoo.com |	Ad/min3 |
    		| _robert.ger34@gmail.com |	%234in&4 |
    		| baga_dressin345@gmail.com | 56&% |
    


