package com.cs.project.junit;

import static org.junit.Assert.*;

import org.junit.Ignore;
import org.junit.Test;

import com.cs.project.service.web.CheckNumberService;

@Ignore
public class PhoneNumberTest {
	
	@Test
	public void testValid10DigitNumber(){
		
		CheckNumberService service = new CheckNumberService();
		boolean result = service.getPhoneNumberCheckRepsonse("9729895742", "11");
	    assertTrue(result);
	}
	
	@Test
	public void testInvalidNumber(){
		
		CheckNumberService service = new CheckNumberService();
		boolean result = service.getPhoneNumberCheckRepsonse("20000000000", "11");
		assertFalse(result);
	}

}
