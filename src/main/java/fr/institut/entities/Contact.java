package fr.institut.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Contact implements Serializable{
	
	
	@Id
	@GeneratedValue (strategy=GenerationType.IDENTITY)
	private Long id;
	private String nom;
	private String prenom;
	private String email;
	private String  objet;
	private String message;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getObjet() {
		return objet;
	}
	public void setObjet(String objet) {
		this.objet = objet;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
	public Contact() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Contact(String nom, String prenom,String email, String objet, String message) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.objet = objet;
		this.message = message;
	}
	
//	/envoieMessage?nom=Stringnom&prenom=Stringprenom&email=StringEmail&objet=StringObjet&message=Stringmessage
	
	

}
