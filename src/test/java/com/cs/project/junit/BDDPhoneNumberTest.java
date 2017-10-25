package com.cs.project.junit;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {
                "src/test/resources/phoneFeatures/"
        },
        format = {"pretty", "html:build/reports/cucumber/html", "json:build/reports/cucumber/all_tests.json", "junit:build/reports/junit/all_tests.xml"},
        glue = {"com.cs.project.phonenumber.steps"},
        tags = {"~@skip", "@phoneNumber"}
)

public class BDDPhoneNumberTest {

}
