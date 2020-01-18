package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

	public WebDriver ldriver;
	
	@FindBy(id="Email")
	@CacheLookup
	WebElement txtUsername;
	
	@FindBy(id="Password")
	@CacheLookup
	WebElement txtPassword;
	
	@FindBy(xpath ="(//input[@type='button'])[5]")
	@CacheLookup
	WebElement btnSignIn;	
	
	@FindBy(linkText="SignOut")
	@CacheLookup
	WebElement btnSignOut;
	
	public LoginPage(WebDriver rdriver)
	{
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);		
	}
	
	public void setUsername(String user){
		txtUsername.clear();
		txtUsername.sendKeys(user);
	}
	
	public void setPassword(String pass){
		txtPassword.clear();
		txtPassword.sendKeys(pass);
	}
	
	public void clickBtnSignIn(){
		btnSignIn = ldriver.findElement(By.cssSelector("input:nth-child(5)"));
		btnSignIn.click();
	}
	
	/*
	 * Testing later .....
	 */
	public void clickBtnSignOut(){
		btnSignOut.click();
	}
	
}
