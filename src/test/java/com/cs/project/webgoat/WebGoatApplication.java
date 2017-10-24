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
        driver.findElement(By.id("exampleInputEmail1")).clear();
        driver.findElement(By.id("exampleInputEmail1")).sendKeys(creds.getUsername());
        driver.findElement(By.id("exampleInputPassword1")).clear();
        driver.findElement(By.id("exampleInputPassword1")).sendKeys(creds.getPassword());
        driver.findElement(By.className("btn btn-large btn-primary")).click();

	}

	@Override
	public void openLoginPage() {
        driver.get(Config.getInstance().getBaseUrl() + "login.mvc");
        findAndWaitForElement(By.id("exampleInputEmail1"));
	}

	@Override
	public boolean isLoggedIn() {
        driver.get(Config.getInstance().getBaseUrl()+"start.mvc");
        if (driver.getPageSource().contains("lesson-title-wrapper")) {
            return true;
        } else {
            return false;
        }
	}

}
