package com.cs.project.webgoat.steps;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.continuumsecurity.Config;
import net.continuumsecurity.Credentials;
import net.continuumsecurity.UserPassCredentials;
import net.continuumsecurity.behaviour.ILogin;
import net.continuumsecurity.proxy.LoggingProxy;
import net.continuumsecurity.steps.WebApplicationSteps;
import net.continuumsecurity.steps.World;
import net.continuumsecurity.web.Application;

public class WebGoatSteps {
	
    Logger log = Logger.getLogger(WebApplicationSteps.class);
    String methodName;
    WebElement currentElement;
    Application app;
    LoggingProxy proxy;
    
    public void WebGoatSteps () {
    	
    }
    
    @Given("^a new browser or client instance$")
    public void createAppForAnyClient() {
        createApp();
    }
    
    public void createApp() {
        app = Config.getInstance().createApp();
        app.enableDefaultClient();
        assert app.getAuthTokenManager() != null;
        app.getAuthTokenManager().deleteAuthTokens();
        World.getInstance().setCredentials(new UserPassCredentials("", ""));
    }
    

    @When("the default user logs in")
    public void loginDefaultUser() throws IOException {
        openLoginPage();
        setDefaultCredentials(Config.getInstance().getDefaultCredentials());
        loginWithSetCredentials();
    }
    
    public void openLoginPage() {
        ((ILogin) app).openLoginPage();
    }
    
    public void setDefaultCredentials(Credentials creds) throws IOException {
        World.getInstance().setCredentials(creds);
    }
    
    @When("^the user logs in$")
    public void loginWithSetCredentials() {
        assert World.getInstance().getCredentials() != null;
        ((ILogin) app).login(World.getInstance().getCredentials());
    }
    
    @When("the case of the password is changed")
    public void changeCaseOfPassword() {
        UserPassCredentials credentials = World.getInstance().getUserPassCredentials();
        String wrongCasePassword = credentials.getPassword().toUpperCase();

        if (wrongCasePassword.equals(credentials.getPassword())) {
            wrongCasePassword = credentials.getPassword().toLowerCase();
            if (wrongCasePassword.equals(credentials.getPassword())) {
                throw new RuntimeException(
                        "Password doesn't have alphabetic characters, can't run this test.");
            } else {
                credentials.setPassword(wrongCasePassword);
            }
        } else {
            credentials.setPassword(wrongCasePassword);
        }
    }

    
    @Then("the user is logged in")
    public void loginSucceeds() {
        assertThat("The user is logged in", ((ILogin) app).isLoggedIn(), is(true));
    }
    
    @When("the authentication tokens on the client are deleted")
    public void deleteAuthTokensOnClient() {
        deleteAuthTokens();
    }

    public void deleteAuthTokens() {
        app.getAuthTokenManager().deleteAuthTokens();
    }
    
    @When("the login page is displayed")
    public void displayLoginPage() {
        openLoginPage();
    }
    
    @Then("the user is not logged in")
    public void loginFails() {
        assertThat("The user is not logged in", ((ILogin) app).isLoggedIn(), is(false));
    }

}
