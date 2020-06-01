package com.example.software_service_system.Entity.Text_SearchEntity;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.List;

@Document(indexName = "log",type = "_doc", shards = 1, replicas = 0)
public class logs_es_List {
    int id;

    @JsonProperty("log_level")
    String log_level;
    @JsonProperty("java_class")
    String java_class;
    @JsonProperty("logdetail")
    String logdetail;
    @JsonProperty("thread")
    String thread;
    @JsonProperty("log_time")
    String log_time;


    public void setJava_class(String java_class) {
        this.java_class = java_class;
    }

    public void setLog_level(String log_level) {
        this.log_level = log_level;
    }

    public void setLog_time(String log_time) {
        this.log_time = log_time;
    }

    public void setLogdetail(String logdetail) {
        this.logdetail = logdetail;
    }

    public void setThread(String thread) {
        this.thread = thread;
    }

    public String getJava_class() {
        return java_class;
    }

    public String getLog_level() {
        return log_level;
    }

    public String getLog_time() {
        return log_time;
    }

    public String getLogdetail() {
        return logdetail;
    }

    public String getThread() {
        return thread;
    }

}
