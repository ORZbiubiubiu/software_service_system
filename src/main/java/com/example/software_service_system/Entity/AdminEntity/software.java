package com.example.software_service_system.Entity.AdminEntity;


import java.util.Date;

public class software {
    private int id;
    private String softwareName;
    private String softwareInfo;
    private Date updateDate;

    public software(int id, String softwareName, String softwareInfo, Date updateDate) {
        this.id = id;
        this.softwareName = softwareName;
        this.softwareInfo = softwareInfo;
        this.updateDate = updateDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSoftwareName() {
        return softwareName;
    }

    public void setSoftwareName(String softwareName) {
        this.softwareName = softwareName;
    }

    public String getSoftwareInfo() {
        return softwareInfo;
    }

    public void setSoftwareInfo(String softwareInfo) {
        this.softwareInfo = softwareInfo;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    @Override
    public String toString() {
        return "software{" +
                "id=" + id +
                ", softwareName='" + softwareName + '\'' +
                ", softwareInfo='" + softwareInfo + '\'' +
                ", updateDate=" + updateDate +
                '}';
    }
}
