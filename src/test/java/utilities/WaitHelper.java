package utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WaitHelper {

	public WebDriver ldriver;
	
	public WaitHelper(WebDriver driver)
	{
		this.ldriver = driver;
	}
	
	public void waitForElement(WebElement element, long timeOutInSeconds){
		WebDriverWait wait = new WebDriverWait(this.ldriver, timeOutInSeconds);
		wait.until(ExpectedConditions.visibilityOf(element));
		
	}

}
