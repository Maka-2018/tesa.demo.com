$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login Automating",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successfull Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsLogin.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://localhost:8080/Testautomation-01/\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsLogin.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Test automation Framework\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsLogin.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Username as \"mamoudou@gmail.com\" and Password as \"123456Admin\u0026%\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsLogin.user_enters_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepsLogin.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsLogin.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User opens URL \"http://localhost:8080/Testautomation-01/\"",
  "keyword": "When "
});
formatter.step({
  "name": "Page Title should be \"Test automation Framework\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters Username as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "camara@gmail.com",
        "admin1"
      ]
    },
    {
      "cells": [
        "amos12@hotmail.com",
        "A_#in2"
      ]
    },
    {
      "cells": [
        "12345pala@yahoo.com",
        "Ad/min3"
      ]
    },
    {
      "cells": [
        "_robert.ger34@gmail.com",
        "%234in\u00264"
      ]
    },
    {
      "cells": [
        "baga_dressin345@gmail.com",
        "56\u0026%"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsLogin.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://localhost:8080/Testautomation-01/\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsLogin.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Test automation Framework\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsLogin.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Username as \"camara@gmail.com\" and Password as \"admin1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsLogin.user_enters_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepsLogin.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsLogin.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsLogin.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://localhost:8080/Testautomation-01/\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsLogin.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Test automation Framework\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsLogin.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Username as \"amos12@hotmail.com\" and Password as \"A_#in2\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsLogin.user_enters_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepsLogin.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsLogin.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsLogin.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://localhost:8080/Testautomation-01/\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsLogin.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Test automation Framework\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsLogin.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Username as \"12345pala@yahoo.com\" and Password as \"Ad/min3\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsLogin.user_enters_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepsLogin.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsLogin.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsLogin.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://localhost:8080/Testautomation-01/\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsLogin.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Test automation Framework\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsLogin.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Username as \"_robert.ger34@gmail.com\" and Password as \"%234in\u00264\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsLogin.user_enters_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepsLogin.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsLogin.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsLogin.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://localhost:8080/Testautomation-01/\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsLogin.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Test automation Framework\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsLogin.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Username as \"baga_dressin345@gmail.com\" and Password as \"56\u0026%\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsLogin.user_enters_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepsLogin.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsLogin.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/SignIn.feature");
formatter.feature({
  "name": "Recovered Sing In",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Successfull Login with Valid Credentials",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Reopen Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsLogin.reopen_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsLogin.launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Opens URL \"http://localhost:8080/Testautomation-01/\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsLogin.opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title of page should be \"Test automation Framework\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsLogin.title_of_page_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters Username as \"mamoudou@gmail.com\" and Password as \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsLogin.enters_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Sign In",
  "keyword": "And "
});
formatter.match({
  "location": "StepsLogin.click_on_Sign_In()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Quit browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsLogin.quit_browser()"
});
formatter.result({
  "status": "passed"
});
});