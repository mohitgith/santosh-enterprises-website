package com.business.santoshenterprises.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.business.santoshenterprises.model.Product;
import com.business.santoshenterprises.repository.ProductRepository;

@RestController
@CrossOrigin
@RequestMapping("/product")
public class ProductController implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
        productRepository.saveAll(Arrays.asList(
                new Product("7100STRIKER018", "STRIKER MOTOR HI-SPEED STRIKER PF"),
                new Product("710D96STRIKR81", "STRIKER WF MOTOR HI-SPEED WF"),
                new Product("740D95MISTY31", "LOCKING FLANGE"),
                new Product("740D95MISTY41", "ELEMENT GASKET"),
                new Product("740DCJ2000WTC41", "MAINBOARD-CJ2000WTC"),
                new Product("740DCJ2000WTC51", "DISPLAY BOARD"),
                new Product("740I74CJ200081", "MAIN CONTROL BOARD ASSEMBLY"),
                new Product("71200W5119904Z", "MOTOR ASSYWITHOUTGEARBOX-400W/F MIST"),
                new Product("740DCJ1600WPC71", "DC FAN-CJ1600WPC"),
                new Product("7400QH3002604U", "QUARTZ TUBE")));
    }

    @GetMapping("/{productNo}")
    public String getProductName(@PathVariable String productNo) {
        Product product = productRepository.findByProductNo(productNo);
        return product.getProductName();
    }

    @GetMapping("/all")
    public List<Product> getAllProduct() {
        List<Product> productList = (List<Product>) productRepository.findAll();
        return productList;
    }

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product) throws URISyntaxException {
        ResponseEntity<Product> responseEntity = null;
        Product responseBody;
        if (!productRepository.existsProductByProductNo(product.getProductNo())) {
            responseBody = productRepository.save(product);
            responseEntity = ResponseEntity.created(new URI("/product/" + product.getProductNo())).body(responseBody);
            System.out.println("Response Body: " + responseBody);
        } else {
            responseEntity = ResponseEntity.status(HttpStatus.ALREADY_REPORTED).build();
        }

        return responseEntity;
    }

    @PutMapping("/{productNo}")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product, @PathVariable String productNo)
            throws URISyntaxException {
        ResponseEntity<Product> responseEntity = null;
        Product responseBody;
        if (productRepository.existsProductByProductNo(product.getProductNo())) {
            responseBody = productRepository.save(product);
            responseEntity = ResponseEntity.created(new URI("/product/" + product.getProductNo())).body(responseBody);
            System.out.println("Response Body: " + responseBody);
        } else {
            responseEntity = ResponseEntity.status(HttpStatus.CONFLICT).build();
        }

        return responseEntity;
    }

    // @GetMapping("/product/allProductNo")
    // public List<String> getAllProductNo() {
    // List<String> productNo = new ArrayList<>();
    // Iterator i = getAllProduct().iterator();
    // while(i.hasNext()) {
    // Product product = (Product) i.next();
    // System.out.println(product.getProductId());
    // productNo.add(product.getProductId());
    // }
    // return productNo;
    // }

    // @GetMapping("/product/allProductName")
    // public List<String> getAllProductName() {
    // List<String> productName = new ArrayList<>();
    // Iterator i = getAllProduct().iterator();
    // while(i.hasNext()) {
    // Product product = (Product) i.next();
    // System.out.println(product.getProductName());
    // productName.add(product.getProductName());
    // }
    // return productName;
    // }
}
