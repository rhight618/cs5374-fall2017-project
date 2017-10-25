package com.cs.project.phonenumber.steps;

import com.cs.project.service.web.CheckNumberService;
import static org.junit.Assert.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PhoneNumberSteps {
	
	CheckNumberService service;
	String phoneNumber;
	String licenseKey;
	boolean isValidNumber;
	
    @Given("a new service instance")
    public void createNewServiceInstance() {
    	service = new CheckNumberService();
    }
    
    @And("the phone number (\\d+) is provided")
    public void insertValid10DigitPhoneNumber(String inputPhoneNumber){
    	phoneNumber = inputPhoneNumber;
    }
    
    @And("a negative number is provided")
    public void insertNegativeNumber(){
    	phoneNumber = "-19999999999";
    }
    
    @And("the licenseKey (\\d+) is provided")
    public void insertValidLicenseKey(String inputLicenseKey){
    	licenseKey = inputLicenseKey;
    }
    
    @When("a request is made to the service")
    public void callService(){
    	isValidNumber = service.getPhoneNumberCheckRepsonse(phoneNumber, licenseKey);
    }
    
    @Then("the number is valid")
    public void numberIsValid(){
    	assertTrue(isValidNumber);
    }
    
    @Then("the number is invalid")
    public void numberIsNotValid(){
    	assertFalse(isValidNumber);
    }

}
