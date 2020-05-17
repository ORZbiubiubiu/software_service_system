package com.example.software_service_system.Entity.ClientEntity;

public class update_List {
    int id;
    String softwareName;
    String softwareInfo;
    String updateDate;

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
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

    public String getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(String updateDate) {
        this.updateDate = updateDate;
    }
}
