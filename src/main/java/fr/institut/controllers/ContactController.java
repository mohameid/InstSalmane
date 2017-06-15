package fr.institut.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import fr.institut.entities.Contact;
import fr.institut.repositories.IContactRepository;

@Controller
//@RequestMapping("/contact")
public class ContactController {
	
	
	@Autowired
	private IContactRepository contactRepository ;
	
	
	@RequestMapping(value= "/envoieMessage", method = RequestMethod.POST)
	@ResponseBody
	public void saveContact(@RequestBody Contact contact){
		System.out.println("contact "+contact);
		contactRepository.save(contact);
//		return contact;
		
	}
	
	
//	@RequestMapping("/contact.html")
//	public String contact(){
//		
//		return "/app/components/contact/contact.html" ;
//	}
	
	

}
