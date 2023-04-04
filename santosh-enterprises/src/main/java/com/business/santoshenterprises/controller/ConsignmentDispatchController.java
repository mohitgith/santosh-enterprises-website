package com.business.santoshenterprises.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.business.santoshenterprises.model.ConsignmentDispatch;
import com.business.santoshenterprises.model.Courier;
import com.business.santoshenterprises.repository.ConsignmentDispatchRepository;
import com.business.santoshenterprises.repository.CourierRepository;

@RestController
@CrossOrigin
@RequestMapping("/consignment")
public class ConsignmentDispatchController {

    @Autowired
    private ConsignmentDispatchRepository consignmentDispatchRepository;

    @Autowired
    private CourierRepository courierRepository;

    @GetMapping("/all")
    public List<ConsignmentDispatch> getAllDispatchConsignment() {
        List<ConsignmentDispatch> consignmentDispatchList = (List<ConsignmentDispatch>) consignmentDispatchRepository
                .findAll();
        return consignmentDispatchList;
    }

    @PostMapping
    public ResponseEntity<ConsignmentDispatch> addDispatchConsignment(
            @RequestBody ConsignmentDispatch consignmentDispatch) throws URISyntaxException {
        ConsignmentDispatch responseBody = consignmentDispatchRepository.save(consignmentDispatch);
        return ResponseEntity.created(new URI("/consignment/" + consignmentDispatch.getId())).body(responseBody);

    }

    @PostMapping("/courier")
    public ResponseEntity<Courier> addDispatchConsignmentCourier(
            @RequestBody Courier courier) throws URISyntaxException {
        // System.out.println("Data for Courier: " + courier);
        Courier responseBody = courierRepository.save(courier);
        return ResponseEntity.created(new URI("/consignment/courier" + courier.getRecordNo())).body(responseBody);
    }

    // @PutMapping("/consignment/{id}")
    // public ResponseEntity putDispatchConsignment(@PathVariable long id,
    // @RequestBody ConsignmentDispatch consignmentDispatch) {
    // ConsignmentDispatch currentClient =
    // consignmentDispatchRepository.findById(id).orElseThrow(RuntimeException::new);
    // // currentClient.setName(consignmentDispatch.getName());
    // // currentClient.setEmail(consignmentDispatch.getEmail());
    // currentClient = consignmentDispatchRepository.save(consignmentDispatch);

    // return ResponseEntity.ok(currentClient);
    // }

    // @DeleteMapping("/consignment/{id}")
    // public ResponseEntity removeDispatchConsignment(@PathVariable long id,
    // @RequestBody ConsignmentDispatch consignmentDispatch) {
    // consignmentDispatchRepository.deleteById(id);
    // return ResponseEntity.ok().build();
    // }
}
