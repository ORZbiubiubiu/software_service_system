package com.example.software_service_system.Entity.ClientEntity;

public class faq_List {
    int id;
    String faqName;
    String faqInfo;
    String faqSoftware;
    String faqType;
    String faqDate;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFaqInfo() {
        return faqInfo;
    }

    public void setFaqInfo(String faqInfo) {
        this.faqInfo = faqInfo;
    }

    public void setFaqType(String faqType) {
        this.faqType = faqType;
    }

    public String getFaqName() {
        return faqName;
    }

    public void setFaqName(String faqName) {
        this.faqName = faqName;
    }

    public String getFaqSoftware() {
        return faqSoftware;
    }

    public void setFaqSoftware(String faqSoftware) {
        this.faqSoftware = faqSoftware;
    }

    public String getFaqType() {
        return faqType;
    }

    public String getFaqDate() {
        return faqDate;
    }

    public void setFaqDate(String faqDate) {
        this.faqDate = faqDate;
    }
}
