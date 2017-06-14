package fr.institut.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.institut.entities.Contact;

public interface IContactRepository extends JpaRepository<Contact, Long> {

}
