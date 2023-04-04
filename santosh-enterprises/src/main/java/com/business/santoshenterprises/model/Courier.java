package com.business.santoshenterprises.model;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Courier {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int recordNo;

    @NotNull(message = "Courier Tracking ID is required")
    private String courierTrackingId;

    @NotNull(message = "Courier Name is required")
    private String courierName;

    @Lob
    @NotNull(message = "Courier Receipt is required")
    private byte[] courierReceipt;

    @OneToOne(mappedBy = "courier")
    private ConsignmentDispatch consignmentDispatch;

    public String getCourierTrackingId() {
        return courierTrackingId;
    }

    public void setCourierTrackingId(String courierTrackingId) {
        this.courierTrackingId = courierTrackingId;
    }

    public String getCourierName() {
        return courierName;
    }

    public void setCourierName(String courierName) {
        this.courierName = courierName;
    }

    public byte[] getCourierReceipt() {
        return courierReceipt;
    }

    public void setCourierReceipt(byte[] courierReceipt) {
        this.courierReceipt = courierReceipt;
    }

    public ConsignmentDispatch getConsignmentDispatch() {
        return consignmentDispatch;
    }

    public void setConsignmentDispatch(ConsignmentDispatch consignmentDispatch) {
        this.consignmentDispatch = consignmentDispatch;
    }

    public Courier(String courierTrackingId, String courierName, byte[] courierReceipt,
            ConsignmentDispatch consignmentDispatch) {
        this.courierTrackingId = courierTrackingId;
        this.courierName = courierName;
        this.courierReceipt = courierReceipt;
        this.consignmentDispatch = consignmentDispatch;
    }

    public Courier() {
    }

    public int getRecordNo() {
        return recordNo;
    }

    public void setRecordNo(int recordNo) {
        this.recordNo = recordNo;
    }

    @Override
    public String toString() {
        return "Courier [recordNo=" + recordNo + ", courierTrackingId=" + courierTrackingId + ", courierName="
                + courierName + ", courierReceipt=" + Arrays.toString(courierReceipt) + ", consignmentDispatch="
                + consignmentDispatch + "]";
    }

}
