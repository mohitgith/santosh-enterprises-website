package com.business.santoshenterprises.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Consignment_Dispatch")
public class ConsignmentDispatch {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull(message = "Invoice No is required")
    private long invoiceNo;

    @NotNull(message = "Invoice Date is required")
    private Date invoiceDate;

    @NotNull(message = "Part No is required")
    private String partNo;

    @NotNull
    private String partName;

    @NotNull(message = "Quantity is required")
    private int quantity;

    @NotNull(message = "Price is required")
    private double price;

    @NotNull
    private double netPrice;

    @NotNull(message = "Dispatch Date is required")
    private Date dispatchDate;

    public ConsignmentDispatch() {
    }

    public ConsignmentDispatch(long invoiceNo, Date invoiceDate, String partNo, String partName, int quantity,
            double price, double netPrice, Date dispatchDate, Courier courier) {
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

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "courierId", referencedColumnName = "courierTrackingId")
    // @NotNull(message = "Courier is required")
    private Courier courier;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getInvoiceNo() {
        return invoiceNo;
    }

    public void setInvoiceNo(long invoiceNo) {
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

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getNetPrice() {
        return netPrice;
    }

    public void setNetPrice(double netPrice) {
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
