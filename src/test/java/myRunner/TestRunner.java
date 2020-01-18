package myRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
//import cucumber.api.CucumberOptions;
//import cucumber.api.junit.Cucumber;


@SuppressWarnings("deprecation")
@RunWith(Cucumber.class)
@CucumberOptions
		(		
			features= {".//Features/Login.feature",".//Features/SignIn.feature"},
			glue="stepDefinitions",
			//tags = {"~@ParallelTest", "~@RegressionTest"},
			dryRun=false,
			strict=true,
			plugin= {"html:target/test-html-report",
			        "json:target/test-json.json", "pretty:target/test-pretty.txt",
			        "usage:target/test-usage.json", "junit:target/test-results.xml"},
			monochrome = true
		)
public class TestRunner {

}
