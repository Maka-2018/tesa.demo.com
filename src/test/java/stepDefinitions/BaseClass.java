package stepDefinitions;

import org.apache.commons.lang.RandomStringUtils;
import org.openqa.selenium.WebDriver;

import pageObjects.LoginPage;
import pageObjects.SignInPage;

public class BaseClass {

	
	public WebDriver ldriver;
	public LoginPage loginpage;
	public SignInPage signInpage;
	
	public static String randomestring(){
		String generateString1 = RandomStringUtils.randomAlphabetic(5);
		return (generateString1);
	}
}
