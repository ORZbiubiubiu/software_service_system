package com.example.software_service_system.Entity.ClientEntity;

public class find_service_List {
    private int id;
    private String userName;
    private String softwareName;
    private String serverName;
    private String serviceState;
    private String serviceKind;
    private String serviceInfo;
    public void setId(int id) {
        this.id = id;
    }
    public int getId() {
        return id;
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
    public String getSoftwareName(){
        return softwareName;
    }

    public void setServerName(String serverName) {
        this.serverName = serverName;
    }
    public String getServerName() {
        return serverName;
    }

    public void setServiceState(String serviceState) {
        this.serviceState = serviceState;
    }
    public String getServiceState() {
        return serviceState;
    }

    public void setServiceKind(String serviceKind) {
        this.serviceKind = serviceKind;
    }
    public String getServiceKind() {
        return serviceKind;
    }

    public void setServiceInfo(String serviceInfo) {
        this.serviceInfo = serviceInfo;
    }
    public String getServiceInfo() {
        return serviceInfo;
    }
}
