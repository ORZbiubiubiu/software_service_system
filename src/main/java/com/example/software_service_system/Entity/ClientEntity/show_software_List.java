package com.example.software_service_system.Entity.ClientEntity;

public class show_software_List {
    private int id;
    private String orderId;
    private String userName;
    private String softwareName;
    private String buyDate;

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserName() {
        return userName;
    }

    public void setSoftwareName(String softwareName) {
        this.softwareName = softwareName;
    }

    public String getSoftwareName() {
        return softwareName;
    }

    public void setBuyDate(String buyDate) {
        this.buyDate = buyDate;
    }

    public String getBuyDate() {
        return buyDate;
    }
}
