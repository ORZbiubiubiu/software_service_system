package com.example.software_service_system.Entity.Text_SearchEntity;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.List;

@Document(indexName = "software_data", type = "_doc")
public class software_es_List {
    int id;

    @JsonProperty("updatedate")
    String updatedate;
    @JsonProperty("softwarename")
    String softwarename;
    @JsonProperty("softwareinfo")
    String softwareinfo;


    public void setId(int id) {
        this.id = id;
    }

    public void setSoftwareinfo(String softwareinfo) {
        this.softwareinfo = softwareinfo;
    }

    public void setSoftwarename(String softwarename) {
        this.softwarename = softwarename;
    }

    public void setUpdatedate(String updatedate) {
        this.updatedate = updatedate;
    }

    public int getId() {
        return id;
    }

    public String getSoftwareinfo() {
        return softwareinfo;
    }

    public String getSoftwarename() {
        return softwarename;
    }

    public String getUpdatedate() {
        return updatedate;
    }
}
