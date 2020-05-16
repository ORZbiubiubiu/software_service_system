package com.example.software_service_system.Entity.AdminEntity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


public class faq {
    private int id;
    private String faqName;
    private String faqType;
    private String faqDescription;
    private String faqInfo;

    private String faqSoftware;
    private Date faqDate;

    public faq(int id, String faqName,String faqType, String faqDescription, String faqInfo, String faqSoftware) throws ParseException {
        this.id = id;
        this.faqName = faqName;
        this.faqType = faqType;
        this.faqDescription = faqDescription;
        this.faqInfo = faqInfo;
        this.faqSoftware = faqSoftware;
        Date date = new Date();//获得系统时间.
        SimpleDateFormat sdf = new SimpleDateFormat(" yyyy-MM-dd HH:mm:ss ");
        String nowTime = sdf.format(date);
        Date time = sdf.parse(nowTime);
        this.faqDate = time;
    }
    public void setNewDate() throws ParseException {
        Date date = new Date();//获得系统时间.
        SimpleDateFormat sdf = new SimpleDateFormat(" yyyy-MM-dd HH:mm:ss ");
        String nowTime = sdf.format(date);
        Date time = sdf.parse(nowTime);
        this.faqDate = time;
    }
    public int getId() {
        return id;
    }

    public String getFaqType() {
        return faqType;
    }

    public void setFaqType(String faqType) {
        this.faqType = faqType;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFaqName() {
        return faqName;
    }

    public void setFaqName(String faqName) {
        this.faqName = faqName;
    }

    public String getFaqDescription() {
        return faqDescription;
    }

    public void setFaqDescription(String faqDescription) {
        this.faqDescription = faqDescription;
    }

    public String getFaqInfo() {
        return faqInfo;
    }

    public void setFaqInfo(String faqInfo) {
        this.faqInfo = faqInfo;
    }

    public String getFaqSoftware() {
        return faqSoftware;
    }

    public void setFaqSoftware(String faqSoftware) {
        this.faqSoftware = faqSoftware;
    }

    public Date getFaqDate() {
        return faqDate;
    }

    public void setFaqDate(Date faqDate) {
        this.faqDate = faqDate;
    }

    @Override
    public String toString() {
        return "faq{" +
                "id=" + id +
                ", faqName='" + faqName + '\'' +
                ", faqDescription='" + faqDescription + '\'' +
                ", faqInfo='" + faqInfo + '\'' +
                ", faqSoftware='" + faqSoftware + '\'' +
                ", faqDate=" + faqDate +
                '}';
    }


}
