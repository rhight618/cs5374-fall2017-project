package net.continuumsecurity.junit;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import net.continuumsecurity.scanner.ZapManager;
import net.continuumsecurity.web.drivers.DriverFactory;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {
                "src/test/resources/webGoatFeatures/"
        },
        format = {"pretty", "html:build/reports/cucumber/html", "json:build/reports/cucumber/all_tests.json", "junit:build/reports/junit/all_tests.xml"},
        glue = {"net.continuumsecurity.steps"},
        tags = {"~@skip", "login"}
)
public class WebGoatSecurityTest {

    @AfterClass
    public static void tearDown() {
        DriverFactory.quitAll();
        ZapManager.getInstance().stopZap();
    }
}

