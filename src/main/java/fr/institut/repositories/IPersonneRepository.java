package fr.institut.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.institut.entities.Personne;

public interface  IPersonneRepository extends JpaRepository<Personne, Long> {

}
