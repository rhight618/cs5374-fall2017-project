package com.cs.project.service.web;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Properties;

import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.TransformerFactoryConfigurationError;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;

public class CheckNumberService {
	
	
	public boolean getPhoneNumberCheckRepsonse(String phoneNumber, String licenseKey){
		
		try {
			URL url = new URL("http://ws.cdyne.com/phoneverify/phoneverify.asmx/CheckPhoneNumber?"
			         + "PhoneNumber=" + phoneNumber 
			         + "&LicenseKey=" + licenseKey);
			
			InputStream in = url.openStream(); 
			StreamSource source = new StreamSource(in); 			
			boolean result = getStringResult(source);
			return result;
			
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (TransformerFactoryConfigurationError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (TransformerException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
		
		return false;
		
	}

	private boolean getStringResult(StreamSource source) throws IOException, TransformerFactoryConfigurationError, TransformerException {
		ByteArrayOutputStream bos = new ByteArrayOutputStream();
        StreamResult sr = new StreamResult(bos);
        Transformer trans;
		trans = TransformerFactory.newInstance().newTransformer();
        Properties oprops = new Properties();
        oprops.put(OutputKeys.OMIT_XML_DECLARATION, "yes");
        trans.setOutputProperties(oprops);
        trans.transform(source, sr);            
        System.out.println("**** Response ******");            
        System.out.println(bos.toString());
        String result = bos.toString();
		bos.close();
        System.out.println();        
		return isNumberValid(result);
	}

	private boolean isNumberValid(String result) {
	
		if(result.contains("<Valid>true</Valid>")){
			return true;
		}else if(result.contains("<Valid>false</Valid>")){
			return false;
		}else{
			return false;
		}
	}

}
