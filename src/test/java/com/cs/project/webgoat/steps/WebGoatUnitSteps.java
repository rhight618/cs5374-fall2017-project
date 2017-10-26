package com.cs.project.webgoat.steps;

import com.cs.project.webgoat.WebGoatApplication;

import static org.junit.Assert.*;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WebGoatUnitSteps {
	
	private WebGoatApplication webgoatapp;
	private String result = "";
	private String input = "";
	private String output = "";
	
	@Given("^a new instance of WebGoatApplication")
    public void createNewInstance() {
        webgoatapp = new WebGoatApplication();
    }
	
	@When("^the input is set to (.*)")
	public void setInputValue(String key){
		input = key;
	}
	
	@When("^a call is made to the method getElementByID")
	public void callMethod(){
		result = webgoatapp.getElementIDByKey(input);
	}
	
	@Then("the output is (.*)")
	public void checkResult(String expectedResult){
		assertEquals(result,expectedResult);
	}

}
