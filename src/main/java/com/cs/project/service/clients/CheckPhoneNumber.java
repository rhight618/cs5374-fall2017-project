package com.cs.project.service.clients;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL; 
import java.util.Properties;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;
 
public class CheckPhoneNumber {
 
    public static void main(String[] args) {
          try{		
            URL url = new URL("http://ws.cdyne.com/phoneverify/phoneverify.asmx/CheckPhoneNumber?"
                               + "PhoneNumber=2142369211"
                               + "&LicenseKey=F01d89fd-5155-5455-5585-e84ab8de8591");		
    try{			
    InputStream in = url.openStream(); 
    StreamSource source = new StreamSource(in); 			
    printResult(source);	
}catch(java.io.IOException e){			
    e.printStackTrace();		
}		
}catch (MalformedURLException e){		
    e.printStackTrace();	
            }     
    }     
    private static void printResult(Source source) {        
            try {            
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            StreamResult sr = new StreamResult(bos);
            Transformer trans = TransformerFactory.newInstance().newTransformer();
            Properties oprops = new Properties();
            oprops.put(OutputKeys.OMIT_XML_DECLARATION, "yes");
            trans.setOutputProperties(oprops);
            trans.transform(source, sr);            
            System.out.println("**** Response ******");            
            System.out.println(bos.toString());   
 
            bos.close();
            System.out.println();        
    } catch (Exception e) {            
            }    
    }
}