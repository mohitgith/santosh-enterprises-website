package com.business.santoshenterprises.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Consignment_Dispatch")
public class ConsignmentDispatch {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull(message = "Invoice No is required")
    private Long invoiceNo;

    @NotNull(message = "Invoice Date is required")
    private Date invoiceDate;

    @NotEmpty(message = "Part No is required")
    private String partNo;

    @NotEmpty
    private String partName;

    @NotNull(message = "Quantity is required")
    private Integer quantity;

    @NotNull(message = "Price is required")
    private Double price;

    @NotNull
    private Double netPrice;

    @NotNull(message = "Dispatch Date is required")
    private Date dispatchDate;

    public ConsignmentDispatch() {
    }

    public ConsignmentDispatch(Long invoiceNo, Date invoiceDate, String partNo, String partName, Integer quantity,
            Double price, Double netPrice, Date dispatchDate, Courier courier) {
        this.invoiceNo = invoiceNo;
        this.invoiceDate = invoiceDate;
        this.partNo = partNo;
        this.partName = partName;
        this.quantity = quantity;
        this.price = price;
        this.netPrice = netPrice;
        this.dispatchDate = dispatchDate;
        this.courier = courier;
    }

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "courierRecordNo", referencedColumnName = "recordNo")
    // @NotNull(message = "Courier is required")
    private Courier courier;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getInvoiceNo() {
        return invoiceNo;
    }

    public void setInvoiceNo(Long invoiceNo) {
        this.invoiceNo = invoiceNo;
    }

    public Date getInvoiceDate() {
        return invoiceDate;
    }

    public void setInvoiceDate(Date invoiceDate) {
        this.invoiceDate = invoiceDate;
    }

    public String getPartNo() {
        return partNo;
    }

    public void setPartNo(String partNo) {
        this.partNo = partNo;
    }

    public String getPartName() {
        return partName;
    }

    public void setPartName(String partName) {
        this.partName = partName;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getNetPrice() {
        return netPrice;
    }

    public void setNetPrice(Double netPrice) {
        this.netPrice = netPrice;
    }

    public Date getDispatchDate() {
        return dispatchDate;
    }

    public void setDispatchDate(Date dispatchDate) {
        this.dispatchDate = dispatchDate;
    }

    public Courier getCourier() {
        return courier;
    }

    public void setCourier(Courier courier) {
        this.courier = courier;
    }

}
