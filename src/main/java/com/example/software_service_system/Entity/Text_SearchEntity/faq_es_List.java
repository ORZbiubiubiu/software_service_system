package com.example.software_service_system.Entity.Text_SearchEntity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Document(indexName = "faq_data",type = "_doc", shards = 1, replicas = 0)
public class faq_es_List  implements Serializable {
    int id;

    @JsonProperty("faqname")
    String faqname;
    @JsonProperty("faqinfo")
    String faqinfo;
    @JsonProperty("faqsoftware")
    String faqsoftware;
    @JsonProperty("faqtype")
    String faqtype;
    @JsonProperty("faqdate")
    String faqDate;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFaqInfo() {
        return faqinfo;
    }

    public void setFaqInfo(String faqInfo) {
        this.faqinfo = faqInfo;
    }

    public void setFaqType(String faqType) {
        this.faqtype = faqType;
    }

    public String getFaqName() {
        return faqname;
    }

    public void setFaqName(String faqName) {
        this.faqname = faqName;
    }

    public String getFaqSoftware() {
        return faqsoftware;
    }

    public void setFaqSoftware(String faqSoftware) {
        this.faqsoftware = faqSoftware;
    }

    public String getFaqType() {
        return faqtype;
    }

    public String getFaqDate() {
        return faqDate;
    }

    public void setFaqDate(String faqDate) {
        this.faqDate = faqDate;
    }
}
