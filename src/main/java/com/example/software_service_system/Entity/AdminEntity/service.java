package com.example.software_service_system.Entity.AdminEntity;

public class service {
    private int id;

    private String userName;
    private String softwareName;
    private String serverName;
    private String serviceState;
    private String serviceKind;
    private String serciceInfo;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getSoftwareName() {
        return softwareName;
    }

    public void setSoftwareName(String softwareName) {
        this.softwareName = softwareName;
    }

    public String getServerName() {
        return serverName;
    }

    public void setServerName(String serverName) {
        this.serverName = serverName;
    }

    public String getServiceState() {
        return serviceState;
    }

    public void setServiceState(String serviceState) {
        this.serviceState = serviceState;
    }

    public String getServiceKind() {
        return serviceKind;
    }

    public void setServiceKind(String serviceKind) {
        this.serviceKind = serviceKind;
    }

    public String getSerciceInfo() {
        return serciceInfo;
    }

    public void setSerciceInfo(String serciceInfo) {
        this.serciceInfo = serciceInfo;
    }

    @Override
    public String toString() {
        return "service{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", softwareName='" + softwareName + '\'' +
                ", serverName='" + serverName + '\'' +
                ", serviceState='" + serviceState + '\'' +
                ", serviceKind='" + serviceKind + '\'' +
                ", serciceInfo='" + serciceInfo + '\'' +
                '}';
    }

    public service(int id, String userName, String softwareName, String serverName, String serviceState, String serviceKind, String serciceInfo) {
        this.id = id;
        this.userName = userName;
        this.softwareName = softwareName;
        this.serverName = serverName;
        this.serviceState = serviceState;
        this.serviceKind = serviceKind;
        this.serciceInfo = serciceInfo;
    }
}
