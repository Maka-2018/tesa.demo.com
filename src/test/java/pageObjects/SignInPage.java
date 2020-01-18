package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.WaitHelper;

public class SignInPage {

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
	
	WaitHelper waitHelper;
	
	public SignInPage(WebDriver rdriver)
	{
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);	
		
		waitHelper = new WaitHelper(ldriver);
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
		btnSignIn.click();
	}
	
}
