package com.business.santoshenterprises.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int recordNo;
    @Column(unique = true)
    private String productNo;
    private String productName;

    public Product() {
    }
    public String getProductNo() {
        return productNo;
    }
    public void setProductNo(String productNo) {
        this.productNo = productNo;
    }
    public String getProductName() {
        return productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }
    public Product(String productNo, String productName) {
        this.productNo = productNo;
        this.productName = productName;
    }
    public int getRecordNo() {
        return recordNo;
    }
    public void setRecordNo(int recordNo) {
        this.recordNo = recordNo;
    }
    @Override
    public String toString() {
        return "Product [productId=" + productNo + ", productName=" + productName + "]";
    }
    
}
