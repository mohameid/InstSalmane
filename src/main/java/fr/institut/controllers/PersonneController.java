package fr.institut.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import fr.institut.entities.Personne;
import fr.institut.repositories.IPersonneRepository;

@Controller
public class PersonneController {
	
	@Autowired
	private IPersonneRepository personneRepository;

//	    @RequestMapping("/")
//	    public String index() {
//	    	return "index.html";
//	    }
	    
	    
	    @RequestMapping("/all")
	    @ResponseBody
	    public List<Personne> getPersonne(){
	    	
	    	return personneRepository.findAll();
	    }
	    
	    
	    @RequestMapping("/save")
	    @ResponseBody
	    public Personne savePersonne(Personne personne){
	    	personneRepository.save(personne);
	    	return personne;
	    	
	    }

}
