package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.LoginPage;

public class StepsLogin extends BaseClass{
	
	@Given("User Launch Chrome browser")
	public void user_Launch_Chrome_browser() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")
				+"//Drivers/chromedriver.exe");
		ldriver = new ChromeDriver();
		
		loginpage = new LoginPage(ldriver);
	}

	@When("User opens URL {string}")
	public void user_opens_URL(String url) {
		ldriver.get(url);
	}

	@Then("Page Title should be {string}")
	public void page_Title_should_be(String title) {
		if (ldriver.getPageSource().equalsIgnoreCase(null)) {
			ldriver.close();
			Assert.assertTrue(false);
		} 
		else 
		{
		    Assert.assertEquals(title, ldriver.getTitle());
		}		
		
	}

	@When("User enters Username as {string} and Password as {string}")
	public void user_enters_Username_as_and_Password_as(String user, String pass) {
		loginpage.setUsername(user);
		loginpage.setPassword(pass);
	}

	@When("Click on Login")
	public void click_on_Login() {
		loginpage.clickBtnSignIn();
	}

	@Then("close browser")
	public void close_browser() throws InterruptedException {
		Thread.sleep(2000);
		ldriver.quit();
	}

	// Sign In Step definition
	
	@Given("Reopen Chrome browser")
	public void reopen_Chrome_browser() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Sign In Step definition");;
	}
	
	@Given("Launch Chrome browser")
	public void launch_Chrome_browser() {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")
				+"//Drivers/chromedriver.exe");
		ldriver = new ChromeDriver();
		
		loginpage = new LoginPage(ldriver);
	}

	@When("Opens URL {string}")
	public void opens_URL(String string) {
		ldriver.manage().window().maximize();
		ldriver.get(string);
	}

	@Then("Title of page should be {string}")
	public void title_of_page_should_be(String string) {
	    // Write code here that turns the phrase above into concrete actions
		if (ldriver.getPageSource().equalsIgnoreCase(null)) {
			ldriver.close();
			Assert.assertTrue(false);
		} 
		else 
		{
		    Assert.assertEquals(string, ldriver.getTitle());
		}		
		
	}

	@When("Enters Username as {string} and Password as {string}")
	public void enters_Username_as_and_Password_as(String strUser, String strPass) {
	    // Write code here that turns the phrase above into concrete actions
		loginpage.setUsername(strUser);
		loginpage.setPassword(strPass);
	}

	@When("Click on Sign In")
	public void click_on_Sign_In() {
	    // Write code here that turns the phrase above into concrete actions
		loginpage.clickBtnSignIn();
	}

	@Then("Quit browser")
	public void quit_browser() {
	    // Write code here that turns the phrase above into concrete actions
		ldriver.quit();
	}

}
