package com.cs.project.webgoat;

import org.openqa.selenium.By;

import net.continuumsecurity.Config;
import net.continuumsecurity.Credentials;
import net.continuumsecurity.UserPassCredentials;
import net.continuumsecurity.behaviour.ILogin;
import net.continuumsecurity.behaviour.ILogout;
import net.continuumsecurity.behaviour.INavigable;
import net.continuumsecurity.web.WebApplication;

public class WebGoatApplication extends WebApplication implements ILogin, ILogout, INavigable {

	
	public WebGoatApplication() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	@Override
	public void logout() {
		// TODO Auto-generated method stub

	}

	@Override
	public void login(Credentials credentials) {
        UserPassCredentials creds = new UserPassCredentials(credentials);
        driver.findElement(By.id(getElementIDByKey("ID_FIELD"))).clear();
        driver.findElement(By.id(getElementIDByKey("ID_FIELD"))).sendKeys(creds.getUsername());
        driver.findElement(By.id(getElementIDByKey("PW_FIELD"))).clear();
        driver.findElement(By.id(getElementIDByKey("PW_FIELD"))).sendKeys(creds.getPassword());
        driver.findElement(By.cssSelector(getElementIDByKey("SIGN_IN_BUTTON"))).click();;


	}

	@Override
	public void openLoginPage() {
        driver.get(Config.getInstance().getBaseUrl() + "login.mvc");
        findAndWaitForElement(By.id(getElementIDByKey("PW_FIELD")));
	}

	@Override
	public boolean isLoggedIn() {
        if (driver.getPageSource().contains("Invalid username and password!")) {
            return false;
        } else {
            return true;
        }
	}
	
	public String getElementIDByKey(String key){
		
		String ID = "";
		
		switch (key) {
        case "ID_FIELD":  ID = "exampleInputEmail1";
                 break;
        case "PW_FIELD":  ID = "exampleInputPassword1";
                 break;
        case "SIGN_IN_BUTTON":  ID = "button[class*='btn']";
                 break;
        default: ID = "";
                 break;
    }
		
		return ID;
	}

}
