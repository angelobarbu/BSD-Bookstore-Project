package psb.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import psb.project.model.Address;

public interface AddressRepository extends JpaRepository<Address, Integer> {
}
